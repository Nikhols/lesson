import { DefaultTheme } from 'styled-components';

export const themeModes = {
  dark: 'dark',
  light: 'light',
} as const;

export type ThemeMode = (typeof themeModes)[keyof typeof themeModes];

export const darkTheme: DefaultTheme = {
  text: '#f6efe5',
  textMuted: 'rgba(246, 239, 229, 0.7)',
  textSubtle: 'rgba(246, 239, 229, 0.45)',
  accentText: '#ffd598',
  accentStrongText: '#fff3dc',
  infoText: '#cfe0ff',
  successText: '#9fe870',
  pageBackground: `
    radial-gradient(circle at top left, rgba(255, 196, 117, 0.28), transparent 28%),
    radial-gradient(circle at bottom right, rgba(48, 111, 242, 0.24), transparent 32%),
    linear-gradient(135deg, #17191f 0%, #0f1117 45%, #141a24 100%)
  `,
  panelBackground: 'rgba(12, 14, 19, 0.74)',
  panelBackgroundStrong: 'rgba(12, 14, 19, 0.78)',
  panelBorder: 'rgba(255, 255, 255, 0.08)',
  surfaceBackground: 'rgba(255, 255, 255, 0.05)',
  surfaceBackgroundAlt: 'rgba(255, 255, 255, 0.04)',
  surfaceBorder: 'rgba(255, 255, 255, 0.06)',
  separator: 'rgba(255, 255, 255, 0.08)',
  separatorSubtle: 'rgba(255, 255, 255, 0.06)',
  sectionActiveBackground: 'rgba(255, 196, 117, 0.14)',
  sectionHoverBackground: 'rgba(48, 111, 242, 0.18)',
  sectionActiveBorder: 'rgba(255, 196, 117, 0.55)',
  primaryButtonBackground: '#ffd598',
  primaryButtonText: '#17191f',
  successButtonBackground: '#9fe870',
  doneBadgeBackground:
    'linear-gradient(180deg, rgba(159, 232, 112, 0.28), rgba(91, 168, 61, 0.2))',
  doneBadgeBorder: 'rgba(159, 232, 112, 0.42)',
  doneBadgeShadow:
    'inset 0 1px 0 rgba(255, 255, 255, 0.16), 0 6px 14px rgba(91, 168, 61, 0.2)',
  doneBadgeCheck: '#efffe4',
  toggleBackground: 'rgba(255, 255, 255, 0.06)',
  toggleBorder: 'rgba(255, 255, 255, 0.1)',
  toggleThumb: '#ffd598',
  toggleThumbShadow: '0 6px 18px rgba(0, 0, 0, 0.28)',
};

export const lightTheme: DefaultTheme = {
  text: '#1d2430',
  textMuted: 'rgba(29, 36, 48, 0.7)',
  textSubtle: 'rgba(29, 36, 48, 0.46)',
  accentText: '#a55a00',
  accentStrongText: '#7d4300',
  infoText: '#2056a8',
  successText: '#2f8c35',
  pageBackground: `
    radial-gradient(circle at top left, rgba(255, 197, 118, 0.22), transparent 28%),
    radial-gradient(circle at bottom right, rgba(72, 140, 255, 0.16), transparent 34%),
    linear-gradient(135deg, #f7f1e8 0%, #f7f9fc 46%, #eef4fb 100%)
  `,
  panelBackground: 'rgba(255, 255, 255, 0.72)',
  panelBackgroundStrong: 'rgba(255, 255, 255, 0.84)',
  panelBorder: 'rgba(29, 36, 48, 0.1)',
  surfaceBackground: 'rgba(255, 255, 255, 0.64)',
  surfaceBackgroundAlt: 'rgba(246, 248, 252, 0.92)',
  surfaceBorder: 'rgba(29, 36, 48, 0.08)',
  separator: 'rgba(29, 36, 48, 0.12)',
  separatorSubtle: 'rgba(29, 36, 48, 0.08)',
  sectionActiveBackground: 'rgba(255, 204, 132, 0.26)',
  sectionHoverBackground: 'rgba(76, 138, 255, 0.12)',
  sectionActiveBorder: 'rgba(212, 132, 26, 0.28)',
  primaryButtonBackground: '#1d2430',
  primaryButtonText: '#f8f7f3',
  successButtonBackground: '#2f8c35',
  doneBadgeBackground:
    'linear-gradient(180deg, rgba(70, 186, 78, 0.34), rgba(35, 133, 43, 0.3))',
  doneBadgeBorder: 'rgba(35, 133, 43, 0.4)',
  doneBadgeShadow:
    'inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 8px 16px rgba(35, 133, 43, 0.18)',
  doneBadgeCheck: '#ffffff',
  toggleBackground: 'rgba(29, 36, 48, 0.08)',
  toggleBorder: 'rgba(29, 36, 48, 0.12)',
  toggleThumb: '#1d2430',
  toggleThumbShadow: '0 6px 18px rgba(29, 36, 48, 0.2)',
};
