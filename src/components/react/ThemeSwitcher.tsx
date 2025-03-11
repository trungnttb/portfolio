import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  // Use null as initial state to avoid hydration mismatch
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Get theme from localStorage or system preference
    const storedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    const initialTheme = storedTheme || systemTheme;
    setTheme(initialTheme);

    // Set initial theme
    document.documentElement.classList.add(initialTheme);

    // Ensure HTML class is in sync with theme
    return () => {
      document.documentElement.classList.remove('light', 'dark');
    };
  }, []);

  useEffect(() => {
    // Track theme changes
    if (theme) {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark');
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-orange-100 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      role="button"
    >
      {theme === 'light' ? (
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-yellow-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
