import { useState } from 'react';
import { WEEKS, ROUTINE, TYPES } from './data.js';
import { useStore } from './useStore.js';
import './styles.css';

const DAY_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

export default function App() {
  const { data, loaded, toggle, logHours, reset } = useStore();
  const [view, setView] = useState('plan');
  const [selWeek, setSelWeek] = useState(0);
  const [selDay, setSelDay] = useState(null);

  const today = new Date().toISOString().split('T')[0];
  const todayName = DAY_NAMES[new Date().getDay()];

  const allTasks = WEEKS.flatMap(w => w.days.flatMap(d => d.tasks));
  const doneCount = allTasks.filter(t => data.done[t.id]).length;
  const totalTasks = allTasks.length;
  const taskPct = totalTasks ? Math.round(doneCount / totalTasks * 100) : 0;
  const totH = Object.values(data.hrs).reduce((s, v) => s + v, 0);

  const getWeekProg = (i) => {
    const ts = WEEKS[i].days.flatMap(d => d.tasks);
    const dn = ts.filter(t => data.done[t.id]).length;
    return { done: dn, total: ts.length, pct: ts.length ? Math.round(dn / ts.length * 100) : 0 };
  };

  if (!loaded) return <div className="loading">Loading...</div>;

  const week = WEEKS[selWeek];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div>
          <div className="label">4-Week Plan</div>
          <h1 className="title">Operation 1K</h1>
        </div>
        <div className="header-right">
          <div className="big-num">{totH}<span className="unit">h</span></div>
          <div className="label">{doneCount}/{totalTasks} tasks · {taskPct}%</div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="progress-track">
        <div className="progress-fill" style={{
          width: `${taskPct}%`,
          background: `linear-gradient(90deg,${WEEKS.map(w=>w.accent).join(',')})`
        }} />
      </div>

      {/* Hour logger */}
      <div className="hour-logger">
        <div className="hour-logger-left">
          <div className="label">Today</div>
          <div className="today-hours">{data.hrs[today] || 0}h</div>
        </div>
        <div className="hour-btns">
          {[0,1,2,3,4,5,6,7,8].map(h => (
            <button key={h}
              className={`hour-btn ${data.hrs[today]===h ? 'active' : ''}`}
              onClick={() => logHours(today, h)}>
              {h}
            </button>
          ))}
        </div>
      </div>

      {/* Nav tabs */}
      <nav className="nav">
        {['plan','routine','stats'].map(v => (
          <button key={v} className={`nav-btn ${view===v?'active':''}`} onClick={() => setView(v)}>
            {v}
          </button>
        ))}
      </nav>

      {/* ===== PLAN VIEW ===== */}
      {view === 'plan' && (
        <div className="fade-in">
          <div className="week-tabs">
            {WEEKS.map((w, i) => {
              const p = getWeekProg(i);
              const on = i === selWeek;
              return (
                <div key={i} className={`week-tab ${on?'active':''}`}
                  onClick={() => { setSelWeek(i); setSelDay(null); }}
                  style={on ? {'--wa': w.accent} : {}}>
                  <div className="week-tab-label" style={{color: on ? w.accent : '#333'}}>W{w.id}</div>
                  <div className="week-tab-pct" style={{color: on ? w.accent+'99' : '#222'}}>{p.pct}%</div>
                  <div className="week-tab-bar">
                    <div className="week-tab-fill" style={{width:`${p.pct}%`, background: w.accent}} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="week-title" style={{color: week.accent}}>{week.title}</div>
          <div className="week-sub">{getWeekProg(selWeek).done}/{getWeekProg(selWeek).total} tasks done</div>

          {week.days.map((d, di) => {
            const dayDone = d.tasks.filter(t => data.done[t.id]).length;
            const isOpen = selDay === di;
            const allDone = dayDone === d.tasks.length && d.tasks.length > 0;
            return (
              <div key={di} className={`day-card ${isOpen?'open':''}`}
                style={isOpen ? {'--da': week.accent+'25'} : {}}>
                <div className="day-header" onClick={() => setSelDay(isOpen ? null : di)}>
                  <div className="day-header-left">
                    <span className="day-name" style={{color: isOpen ? week.accent : '#52525B'}}>{d.day}</span>
                    <span className={`day-tag ${d.tag.includes('NO')?'no-drive':'drive'}`}>{d.tag}</span>
                  </div>
                  <div className="day-header-right">
                    <span className="day-count">{dayDone}/{d.tasks.length}</span>
                    {allDone && <span className="day-check">✓</span>}
                    <span className={`day-arrow ${isOpen?'open':''}`}>▼</span>
                  </div>
                </div>
                {isOpen && (
                  <div className="day-tasks fade-in">
                    {d.tasks.map(task => {
                      const isDone = !!data.done[task.id];
                      const ty = TYPES[task.type] || TYPES.setup;
                      return (
                        <div key={task.id} className="task-row" onClick={() => toggle(task.id)}>
                          <div className={`checkbox ${isDone?'done':''}`}>
                            {isDone && <span>✓</span>}
                          </div>
                          {ty.l && (
                            <span className="task-badge" style={{background:ty.bg, color:ty.a}}>
                              {ty.i} {ty.l}
                            </span>
                          )}
                          <span className={`task-text ${isDone?'done':''}`}>{task.text}</span>
                          {task.link && (
                            <a href={task.link} target="_blank" rel="noopener noreferrer"
                              className="task-link" onClick={e => e.stopPropagation()}>↗</a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ===== ROUTINE VIEW ===== */}
      {view === 'routine' && (
        <div className="fade-in">
          <div className="section-title">Today's Routine — {todayName}</div>
          <div className="routine-list">
            {(ROUTINE[todayName] || ROUTINE.Mon).map((b, i) => {
              const bright = !['#333','#222','#52525B'].includes(b.c);
              return (
                <div key={i} className="routine-row" style={{animationDelay:`${i*20}ms`}}>
                  <span className="routine-time" style={{color: bright ? '#71717A' : '#222'}}>{b.t}</span>
                  <div className="routine-dot" style={{background: b.c, boxShadow: bright ? `0 0 6px ${b.c}30` : 'none'}} />
                  <span className="routine-label" style={{color: bright ? '#FAFAFA' : '#444'}}>{b.l}</span>
                </div>
              );
            })}
          </div>
          <div className="routine-info">
            <div className="routine-info-title">Schedule: 7:30 AM → 12:30 AM</div>
            <div className="routine-info-sub">
              Gym 8-9:30 · Walk 11:30-12 · 
              {todayName === 'Mon' || todayName === 'Wed'
                ? ' NO DRIVING — 3h evening deep work'
                : todayName === 'Sat' || todayName === 'Sun'
                ? ' Drive 12-8 PM'
                : todayName === 'Fri'
                ? ' Drive 4-9 PM'
                : ' Drive 5-9 PM'}
            </div>
          </div>
        </div>
      )}

      {/* ===== STATS VIEW ===== */}
      {view === 'stats' && (
        <div className="fade-in">
          <div className="section-title">Progress</div>
          <div className="stats-grid">
            {WEEKS.map((w, i) => {
              const p = getWeekProg(i);
              return (
                <div key={i} className="stat-card">
                  <div className="stat-card-bar" style={{width:`${p.pct}%`, background:w.accent}} />
                  <div className="stat-card-row">
                    <span style={{color:w.accent, fontWeight:600, fontSize:11}}>Week {w.id}</span>
                    <span className="stat-card-pct">{p.pct}%</span>
                  </div>
                  <div className="stat-card-sub">{p.done}/{p.total} tasks</div>
                </div>
              );
            })}
          </div>

          <div className="section-title" style={{marginTop:16}}>By Category</div>
          {Object.entries(TYPES).map(([type, ty]) => {
            const all = allTasks.filter(t => t.type === type);
            const dn = all.filter(t => data.done[t.id]).length;
            const p = all.length ? Math.round(dn / all.length * 100) : 0;
            return (
              <div key={type} className="cat-row">
                <span className="cat-icon">{ty.i}</span>
                <span className="cat-label" style={{color:ty.a}}>{ty.l}</span>
                <div className="cat-bar-track">
                  <div className="cat-bar-fill" style={{width:`${p}%`, background:ty.a}} />
                </div>
                <span className="cat-count">{dn}/{all.length}</span>
              </div>
            );
          })}

          <div className="section-title" style={{marginTop:16}}>Hours</div>
          <div className="hours-grid">
            <div className="hour-stat">
              <div className="hour-stat-num">{totH}</div>
              <div className="hour-stat-label">Total</div>
            </div>
            <div className="hour-stat">
              <div className="hour-stat-num">{Object.keys(data.hrs).length}</div>
              <div className="hour-stat-label">Days</div>
            </div>
            <div className="hour-stat">
              <div className="hour-stat-num">
                {Object.keys(data.hrs).length ? (totH / Object.keys(data.hrs).length).toFixed(1) : 0}
              </div>
              <div className="hour-stat-label">Avg/day</div>
            </div>
          </div>

          <button className="reset-btn" onClick={reset}>Reset All Progress</button>
        </div>
      )}
    </div>
  );
}
