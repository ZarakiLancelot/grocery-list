import { useEffect, useState } from 'react';

import styles from './SwitchTheme.module.css';

import useLocalStorage from '../hooks/useLocalStorage';

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const SwitchTheme = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('grocery-list.theme', defaultDark ? 'dark' : 'light');

  const handleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', theme);
  }, [theme]);

  return (
    <aside className={styles.wrapper}>
      <div className={styles.btns}>
        <button
          className='btn'
          aria-label={`Switch theme to ${theme === 'light' ? 'dark' : 'light'} mode`}
          role='switch'
          onClick={handleTheme}
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </aside>
  );
};

export default SwitchTheme;