import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeMode, darkTheme, lightTheme, themeModes } from '@/app/styles/theme';

interface ThemeModeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

const DAY_START_HOUR = 7;
const NIGHT_START_HOUR = 19;

const getMoscowHour = () => {
  const formattedHour = new Intl.DateTimeFormat('ru-RU', {
    hour: 'numeric',
    hour12: false,
    timeZone: 'Europe/Moscow',
  }).format(new Date());

  return Number(formattedHour);
};

const getInitialThemeMode = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return themeModes.dark;
  }

  const hour = getMoscowHour();

  return hour >= DAY_START_HOUR && hour < NIGHT_START_HOUR ? themeModes.light : themeModes.dark;
};

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<ThemeMode>(getInitialThemeMode);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      toggleTheme: () =>
        setMode((currentMode) =>
          currentMode === themeModes.dark ? themeModes.light : themeModes.dark,
        ),
    }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={mode === themeModes.dark ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error('useThemeMode must be used within AppThemeProvider');
  }

  return context;
};
