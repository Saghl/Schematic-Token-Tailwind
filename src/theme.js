const THEME_STORAGE_KEY = 'theme';

function safeGetItem(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore write failures (private mode, disabled storage, etc.)
  }
}

export function getSystemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
}

export function getInitialTheme() {
  const stored = safeGetItem(THEME_STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return getSystemTheme();
}

export function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
}

export function setTheme(theme) {
  const next = theme === 'dark' ? 'dark' : 'light';
  safeSetItem(THEME_STORAGE_KEY, next);
  applyTheme(next);
  return next;
}

export function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  return setTheme(current === 'dark' ? 'light' : 'dark');
}

export function initTheme() {
  const initial = getInitialTheme();
  applyTheme(initial);
  return initial;
}

