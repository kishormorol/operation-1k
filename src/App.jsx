import { useState, useMemo } from 'react';
import { useStorage } from './useStorage';
import { TARGET, TYPES, WEEKS_DATA, ROUTINE } from './planData';

const DAY_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const today = () => new Date().toISOString().split('T')[0];
const todayDay = () => DAY_NAMES[new Date().getDay()];
const QUICK_MINS = [10, 15, 20, 30, 45, 60, 90, 120];

// Start date: March 23, 2026 (Monday) = Week 1 Day 1
// March 18-22 is Week 0 (setup)
const PLAN_START = new Date(2026, 2, 23); // Month is 0-indexed, so 2 = March
const DAY_MAP = { Mon:0, Tue:1, Wed:2, Thu:3, Fri:4, Sat:5, Sun:6 };
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const getWeekDates = (weekIndex) => {
  // weekIndex 0 = Week 1 in WEEKS_DATA (id:1), starts Mar 23
  const weekStart = new Date(PLAN_START);
  weekStart.setDate(weekStart.getDate() + weekIndex * 7);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  return {
    start: `${MONTHS[weekStart.getMonth()]} ${weekStart.getDate()}`,
    end: `${MONTHS[weekEnd.getMonth()]} ${weekEnd.getDate()}`,
  };
};

const getDayDate = (weekIndex, dayName) => {
  const offset = DAY_MAP[dayName] || 0;
  const date = new Date(PLAN_START);
  date.setDate(date.getDate() + weekIndex * 7 + offset);
  return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
};

const isToday = (weekIndex, dayName) => {
  const offset = DAY_MAP[dayName] || 0;
  const date = new Date(PLAN_START);
  date.setDate(date.getDate() + weekIndex * 7 + offset);
  const now = new Date();
  return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth() && date.getDate() === now.getDate();
};

const fmtTime = (m) => {
  if (!m) return '';
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  return r > 0 ? `${h}h ${r}m` : `${h}h`;
};

export default function App() {
  const [done, setDone] = useStorage('done', {});
  const [mins, setMins] = useStorage('mins', {});
  const [view, setView] = useState('plan');
  const [selWeek, setSelWeek] = useState(0);
  const [selDay, setSelDay] = useState(null);
  const [timeModal, setTimeModal] = useState(null);
  const [customMin, setCustomMin] = useState('');

  const toggle = (id) => {
    const u = { ...done };
    if (u[id]) {
      delete u[id];
      const m = { ...mins }; delete m[id]; setMins(m);
    } else {
      u[id] = Date.now();
      setTimeModal(id);
    }
    setDone(u);
  };

  const logTime = (taskId, minutes) => {
    if (minutes > 0) setMins({ ...mins, [taskId]: minutes });
    setTimeModal(null); setCustomMin('');
  };

  const skipTime = () => { setTimeModal(null); setCustomMin(''); };

  const allTasks = useMemo(() => WEEKS_DATA.flatMap(w => w.days.flatMap(d => d.tasks)), []);
  const doneCount = allTasks.filter(t => done[t.id]).length;
  const totalTasks = allTasks.length;
  const taskPct = totalTasks ? Math.round(doneCount / totalTasks * 100) : 0;
  const totalMins = Object.values(mins).reduce((s, v) => s + v, 0);
  const totalHours = Math.floor(totalMins / 60);
  const totalRemMins = totalMins % 60;

  // Today's stats — tasks completed today with their times
  const todayTs = new Date().setHours(0,0,0,0);
  const todayTasks = allTasks.filter(t => done[t.id] && new Date(done[t.id]).setHours(0,0,0,0) === todayTs);
  const todayMins = todayTasks.reduce((s, t) => s + (mins[t.id] || 0), 0);

  const getWeekProg = (wi) => {
    const ts = WEEKS_DATA[wi].days.flatMap(d => d.tasks);
    const dn = ts.filter(t => done[t.id]).length;
    const wm = ts.reduce((s, t) => s + (mins[t.id] || 0), 0);
    return { done: dn, total: ts.length, pct: ts.length ? Math.round(dn / ts.length * 100) : 0, mins: wm };
  };

  const week = WEEKS_DATA[selWeek];
  const curDay = todayDay();
  const routine = ROUTINE[curDay] || ROUTINE['Mon'];

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', padding: '14px 12px 70px', fontFamily: "'IBM Plex Mono', monospace" }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 7, color: '#27272A', letterSpacing: 4, textTransform: 'uppercase', fontWeight: 700 }}>26-Week Plan · Mar 18 – Sep 20</div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 26, fontWeight: 900, color: '#FAFAFA', letterSpacing: -2, lineHeight: .9 }}>Operation 1K</h1>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 24, fontWeight: 900, color: '#FAFAFA', lineHeight: .9 }}>{totalHours}<span style={{ fontSize: 11, color: '#333' }}>h</span>{totalRemMins > 0 && <span style={{ fontSize: 13, color: '#52525B' }}> {totalRemMins}m</span>}</div>
          <div style={{ fontSize: 7, color: '#27272A' }}>{doneCount}/{totalTasks} · {taskPct}%</div>
        </div>
      </div>

      {/* Progress */}
      <div style={{ height: 4, background: '#131316', borderRadius: 2, overflow: 'hidden', marginBottom: 6 }}>
        <div style={{ height: '100%', borderRadius: 2, width: `${taskPct}%`, transition: 'width .5s', background: 'linear-gradient(90deg,#EF4444,#F97316,#10B981,#A855F7)' }} />
      </div>

      {/* Today's auto-calculated stats */}
      <div style={{ background: '#0C0C0F', borderRadius: 8, padding: '8px 12px', marginBottom: 8, border: '1px solid #17171B', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div>
            <div style={{ fontSize: 7, color: '#27272A' }}>Today</div>
            <span style={{ fontFamily: "'Outfit'", fontSize: 16, fontWeight: 800, color: '#FAFAFA' }}>{fmtTime(todayMins) || '0m'}</span>
          </div>
          <div style={{ fontSize: 8, color: '#333' }}>{todayTasks.length} tasks done</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 7, color: '#27272A' }}>Total</div>
          <span style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 700, color: totalMins >= 1000*60 ? '#10B981' : '#FAFAFA' }}>{fmtTime(totalMins)}</span>
          <span style={{ fontSize: 7, color: '#333' }}> / 1000h</span>
        </div>
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', borderBottom: '1px solid #17171B', marginBottom: 10 }}>
        {['plan', 'routine', 'stats'].map(v => (
          <button key={v} onClick={() => setView(v)} style={{ background: 'none', border: 'none', borderBottom: `2px solid ${view === v ? '#FAFAFA' : 'transparent'}`, color: view === v ? '#FAFAFA' : '#333', fontSize: 10, fontFamily: 'inherit', cursor: 'pointer', padding: '8px 14px', textTransform: 'uppercase', letterSpacing: 1.5 }}>{v}</button>
        ))}
      </div>

      {/* PLAN */}
      {view === 'plan' && (
        <div>
          <div style={{ display: 'flex', gap: 4, marginBottom: 12, overflowX: 'auto', paddingBottom: 4 }}>
            {WEEKS_DATA.map((w, i) => {
              const p = getWeekProg(i); const on = i === selWeek;
              const wd = getWeekDates(i);
              return (
                <div key={i} onClick={() => { setSelWeek(i); setSelDay(null); }}
                  style={{ cursor: 'pointer', padding: '6px 8px', borderRadius: 8, textAlign: 'center', background: on ? w.accent + '10' : 'transparent', border: `1px solid ${on ? w.accent + '30' : 'transparent'}`, minWidth: 52, flexShrink: 0 }}>
                  <div style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 800, color: on ? w.accent : '#333' }}>W{w.id}</div>
                  <div style={{ fontSize: 6, color: on ? w.accent + '55' : '#1A1A1E', marginTop: 1 }}>{wd.start}</div>
                  <div style={{ fontSize: 7, color: on ? w.accent + '80' : '#222', marginTop: 1 }}>{p.pct}%</div>
                  {p.mins > 0 && <div style={{ fontSize: 6, color: '#10B981', marginTop: 1 }}>{fmtTime(p.mins)}</div>}
                  <div style={{ height: 2, background: '#17171B', borderRadius: 1, marginTop: 3, overflow: 'hidden' }}><div style={{ height: '100%', background: w.accent, width: `${p.pct}%` }} /></div>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
            <div>
              <span style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 700, color: '#FAFAFA' }}>{week.title}</span>
              <div style={{ fontSize: 8, color: '#333', marginTop: 2 }}>{getWeekDates(selWeek).start} – {getWeekDates(selWeek).end} · Month {week.month}</div>
            </div>
            <span style={{ fontSize: 7, color: '#27272A' }}>{getWeekProg(selWeek).done}/{getWeekProg(selWeek).total}</span>
          </div>

          {week.days.map((d, di) => {
            const dayDone = d.tasks.filter(t => done[t.id]).length;
            const dayMins = d.tasks.reduce((s, t) => s + (mins[t.id] || 0), 0);
            const isOpen = selDay === di;
            const allDone = dayDone === d.tasks.length && d.tasks.length > 0;
            const nd = d.tag.includes('FREE');
            const dayDate = getDayDate(selWeek, d.day);
            const isTodayDay = isToday(selWeek, d.day);
            return (
              <div key={di} style={{ marginBottom: 4, border: `1px solid ${isTodayDay ? '#FBBF2440' : isOpen ? week.accent + '25' : '#141416'}`, borderRadius: 8, overflow: 'hidden', background: isTodayDay ? '#FBBF2405' : 'transparent' }}>
                <div onClick={() => setSelDay(isOpen ? null : di)} style={{ padding: '10px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: "'Outfit'", fontSize: 12, fontWeight: 700, color: isTodayDay ? '#FBBF24' : isOpen ? week.accent : '#52525B', width: 30 }}>{d.day}</span>
                    <span style={{ fontSize: 8, color: isTodayDay ? '#FBBF24' : '#444', fontWeight: 500 }}>{dayDate}</span>
                    <span style={{ fontSize: 7, padding: '2px 5px', borderRadius: 3, background: nd ? '#22D3EE08' : '#FB718508', color: nd ? '#22D3EE' : '#FB7185', fontWeight: 600 }}>{d.tag}</span>
                    {isTodayDay && <span style={{ fontSize: 6, padding: '1px 4px', borderRadius: 3, background: '#FBBF2420', color: '#FBBF24', fontWeight: 700 }}>TODAY</span>}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {dayMins > 0 && <span style={{ fontSize: 7, color: '#10B981', fontWeight: 600 }}>⏱{fmtTime(dayMins)}</span>}
                    <span style={{ fontSize: 8, color: '#333' }}>{dayDone}/{d.tasks.length}</span>
                    {allDone && <span style={{ fontSize: 10, color: '#10B981' }}>✓</span>}
                    <span style={{ fontSize: 8, color: '#222', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .15s' }}>▼</span>
                  </div>
                </div>
                {isOpen && (
                  <div style={{ padding: '0 6px 8px' }}>
                    {d.tasks.map(task => {
                      const isDone = !!done[task.id]; const ty = TYPES[task.type] || TYPES.setup;
                      const tm = mins[task.id];
                      return (
                        <div key={task.id} onClick={() => toggle(task.id)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 8px', borderRadius: 6, cursor: 'pointer' }}>
                          <div style={{ width: 20, height: 20, borderRadius: 5, border: `2px solid ${isDone ? '#10B981' : '#27272A'}`, background: isDone ? '#10B981' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff', flexShrink: 0 }}>{isDone && '✓'}</div>
                          <span style={{ fontSize: 6, padding: '1px 4px', borderRadius: 2, background: ty.bg, color: ty.a, fontWeight: 700, letterSpacing: .5, flexShrink: 0, whiteSpace: 'nowrap' }}>{ty.i} {ty.l}</span>
                          <span style={{ fontSize: 10.5, color: isDone ? '#444' : '#D4D4D8', textDecoration: isDone ? 'line-through' : 'none', lineHeight: 1.35, flex: 1 }}>{task.text}</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                            {tm > 0 && <span style={{ fontSize: 8, color: '#10B981', fontWeight: 600, padding: '1px 5px', background: '#10B98110', borderRadius: 3 }}>{fmtTime(tm)}</span>}
                            {isDone && !tm && <span onClick={e => { e.stopPropagation(); setTimeModal(task.id); }} style={{ fontSize: 7, color: '#555', padding: '2px 5px', background: '#ffffff06', borderRadius: 3, cursor: 'pointer' }}>+⏱</span>}
                            {tm > 0 && <span onClick={e => { e.stopPropagation(); setTimeModal(task.id); }} style={{ fontSize: 8, color: '#444', cursor: 'pointer' }}>✎</span>}
                            {task.link && <a href={task.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ fontSize: 9, color: '#555', textDecoration: 'none' }}>↗</a>}
                          </div>
                        </div>
                      );
                    })}
                    {dayMins > 0 && (
                      <div style={{ padding: '6px 8px', marginTop: 4, borderTop: '1px solid #141416', display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                        <span style={{ fontSize: 8, color: '#52525B' }}>Day total:</span>
                        <span style={{ fontSize: 9, color: '#10B981', fontWeight: 700 }}>{fmtTime(dayMins)}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ROUTINE */}
      {view === 'routine' && (
        <div>
          <div style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 700, color: '#FAFAFA', marginBottom: 8 }}>Today — {curDay}</div>
          {routine.map((b, i) => {
            const hi = !['#333', '#222', '#52525B'].includes(b.c);
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0' }}>
                <span style={{ width: 38, fontSize: 9, color: hi ? '#71717A' : '#222', fontWeight: 500, flexShrink: 0 }}>{b.t}</span>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: hi ? b.c : '#1A1A1E', flexShrink: 0 }} />
                <span style={{ fontSize: 10.5, color: hi ? '#FAFAFA' : '#444', fontWeight: hi ? 600 : 400 }}>{b.l}</span>
              </div>
            );
          })}
          <div style={{ marginTop: 12, padding: '8px 12px', background: '#22D3EE06', border: '1px solid #22D3EE12', borderRadius: 8 }}>
            <div style={{ color: '#22D3EE', fontWeight: 700, fontSize: 9 }}>🔑 KEY</div>
            <div style={{ color: '#52525B', fontSize: 10, lineHeight: 1.5 }}>{curDay === 'Mon' || curDay === 'Wed' ? 'FREE EVENING. 8:20-11:20 PM = golden 3 hours.' : curDay === 'Sat' || curDay === 'Sun' ? 'Sprint 9:30-11:45 before lab. Push 8:20-11:20 after.' : 'Build hard before lab starts.'}</div>
          </div>
        </div>
      )}

      {/* STATS */}
      {view === 'stats' && (
        <div>
          <div style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 700, color: '#FAFAFA', marginBottom: 10 }}>Progress</div>

          {totalMins > 0 && (
            <div style={{ background: '#10B98108', border: '1px solid #10B98115', borderRadius: 8, padding: '10px 14px', marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 9, color: '#10B981', fontWeight: 600 }}>⏱ Total Tracked</span>
                <span style={{ fontFamily: "'Outfit'", fontSize: 20, fontWeight: 900, color: '#FAFAFA' }}>{fmtTime(totalMins)}</span>
              </div>
              <div style={{ fontSize: 8, color: '#333', marginTop: 4 }}>
                Avg/task: {doneCount > 0 ? fmtTime(Math.round(totalMins / Object.keys(mins).length)) : '0m'}
                {' · '}{Object.keys(mins).length}/{doneCount} tasks timed
              </div>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 12 }}>
            {WEEKS_DATA.map((w, i) => {
              const p = getWeekProg(i);
              return (
                <div key={i} style={{ padding: 10, background: '#0C0C0F', borderRadius: 8, border: '1px solid #141416', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, height: 2, background: w.accent, width: `${p.pct}%` }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: 9, color: w.accent, fontWeight: 600 }}>Week {w.id}</span>
                    <span style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 800, color: '#FAFAFA' }}>{p.pct}%</span>
                  </div>
                  <div style={{ fontSize: 7, color: '#222', marginTop: 2 }}>{p.done}/{p.total}</div>
                  {p.mins > 0 && <div style={{ fontSize: 7, color: '#10B981', marginTop: 1 }}>⏱ {fmtTime(p.mins)}</div>}
                </div>
              );
            })}
          </div>

          <div style={{ fontSize: 11, fontFamily: "'Outfit'", fontWeight: 600, color: '#52525B', marginBottom: 6 }}>By Category</div>
          {Object.entries(TYPES).map(([type, ty]) => {
            const all = allTasks.filter(t => t.type === type);
            const dn = all.filter(t => done[t.id]).length;
            const p = all.length ? Math.round(dn / all.length * 100) : 0;
            const catM = all.reduce((s, t) => s + (mins[t.id] || 0), 0);
            return (
              <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', borderBottom: '1px solid #0E0E11' }}>
                <span style={{ fontSize: 11 }}>{ty.i}</span>
                <span style={{ fontSize: 9, color: ty.a, fontWeight: 600, width: 40 }}>{ty.l}</span>
                <div style={{ flex: 1, height: 4, background: '#141416', borderRadius: 2, overflow: 'hidden' }}><div style={{ height: '100%', background: ty.a, borderRadius: 2, width: `${p}%` }} /></div>
                {catM > 0 && <span style={{ fontSize: 7, color: '#10B981', width: 36, textAlign: 'right' }}>{fmtTime(catM)}</span>}
                <span style={{ fontSize: 9, color: '#444', width: 30, textAlign: 'right' }}>{dn}/{all.length}</span>
              </div>
            );
          })}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginTop: 12 }}>
            {[
              { n: `${totalHours}h`, l: 'Total Time' },
              { n: doneCount, l: 'Tasks Done' },
              { n: Object.keys(mins).length > 0 ? fmtTime(Math.round(totalMins / Object.keys(mins).length)) : '0m', l: 'Avg / Task' },
            ].map(s => (
              <div key={s.l} style={{ padding: 8, background: '#0C0C0F', borderRadius: 6, textAlign: 'center', border: '1px solid #141416' }}>
                <div style={{ fontFamily: "'Outfit'", fontSize: 18, fontWeight: 900, color: '#FAFAFA' }}>{s.n}</div>
                <div style={{ fontSize: 7, color: '#27272A' }}>{s.l}</div>
              </div>
            ))}
          </div>

          <button onClick={() => { if (confirm('Reset ALL progress?')) { setDone({}); setMins({}); } }}
            style={{ marginTop: 16, width: '100%', padding: 8, background: 'transparent', border: '1px solid rgba(239,68,68,.12)', borderRadius: 6, color: 'rgba(239,68,68,.3)', fontFamily: 'inherit', fontSize: 9, cursor: 'pointer' }}>
            Reset All Progress
          </button>
        </div>
      )}

      {/* TIME MODAL */}
      {timeModal && (
        <div onClick={skipTime} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 20 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#111114', border: '1px solid #222', borderRadius: 12, padding: 20, width: '100%', maxWidth: 340 }}>
            <div style={{ fontFamily: "'Outfit'", fontSize: 14, fontWeight: 700, color: '#FAFAFA', marginBottom: 4 }}>⏱ How long?</div>
            <div style={{ fontSize: 9, color: '#52525B', marginBottom: 14, lineHeight: 1.4 }}>
              {allTasks.find(t => t.id === timeModal)?.text || ''}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginBottom: 12 }}>
              {QUICK_MINS.map(m => (
                <button key={m} onClick={() => logTime(timeModal, m)} style={{
                  padding: '10px 4px', borderRadius: 6,
                  border: `1px solid ${mins[timeModal] === m ? '#10B981' : '#222'}`,
                  background: mins[timeModal] === m ? '#10B98115' : '#0C0C0F',
                  color: mins[timeModal] === m ? '#10B981' : '#A1A1AA',
                  fontFamily: 'inherit', fontSize: 12, fontWeight: 600, cursor: 'pointer',
                }}>{m < 60 ? `${m}m` : `${m / 60}h`}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
              <input type="number" placeholder="Custom minutes" value={customMin}
                onChange={e => setCustomMin(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && customMin) logTime(timeModal, parseInt(customMin)); }}
                style={{ flex: 1, padding: '8px 10px', borderRadius: 6, border: '1px solid #222', background: '#0C0C0F', color: '#FAFAFA', fontFamily: 'inherit', fontSize: 12, outline: 'none' }} />
              <button onClick={() => { if (customMin) logTime(timeModal, parseInt(customMin)); }}
                style={{ padding: '8px 14px', borderRadius: 6, border: '1px solid #10B981', background: '#10B98115', color: '#10B981', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Log</button>
            </div>
            <button onClick={skipTime} style={{ width: '100%', padding: 8, background: 'transparent', border: '1px solid #1A1A1E', borderRadius: 6, color: '#555', fontFamily: 'inherit', fontSize: 10, cursor: 'pointer' }}>Skip</button>
          </div>
        </div>
      )}
    </div>
  );
}
