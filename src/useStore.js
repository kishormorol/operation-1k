import { useState, useEffect } from 'react';

const STORAGE_KEY = 'op1k-data-v1';

export function useStore() {
  const [data, setData] = useState({ done: {}, hrs: {} });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setData(JSON.parse(raw));
    } catch (e) {
      console.error('Failed to load:', e);
    }
    setLoaded(true);
  }, []);

  const save = (newData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error('Failed to save:', e);
    }
  };

  const toggle = (id) => {
    const d = { ...data.done };
    if (d[id]) delete d[id]; else d[id] = Date.now();
    save({ ...data, done: d });
  };

  const logHours = (date, h) => {
    save({ ...data, hrs: { ...data.hrs, [date]: h } });
  };

  const reset = () => {
    if (confirm('Reset ALL progress? This cannot be undone.')) {
      save({ done: {}, hrs: {} });
    }
  };

  return { data, loaded, toggle, logHours, reset };
}
