import { useState, useCallback } from 'react';
const PFX = 'op1k_';
export function useStorage(key, def) {
  const fk = PFX + key;
  const [val, setVal] = useState(() => {
    try { const s = localStorage.getItem(fk); return s ? JSON.parse(s) : def; } catch { return def; }
  });
  const set = useCallback((v) => { setVal(v); try { localStorage.setItem(fk, JSON.stringify(v)); } catch(e) {} }, [fk]);
  return [val, set];
}
