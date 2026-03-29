import styled from 'styled-components';

import { useThemeMode } from '@/app/providers/theme-provider';
import { themeModes } from '@/app/styles/theme';

const Toggle = styled.button<{ $isLight: boolean }>`
  position: relative;
  width: 76px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 999px;
  background: ${({ theme }) => theme.toggleBackground};
  cursor: pointer;
  backdrop-filter: blur(18px);

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: ${({ $isLight }) => ($isLight ? '39px' : '5px')};
    width: 30px;
    height: 30px;
    border-radius: 999px;
    background: ${({ theme }) => theme.toggleThumb};
    box-shadow: ${({ theme }) => theme.toggleThumbShadow};
    transition: left 0.22s ease, background 0.22s ease;
  }
`;

const ToggleLabels = styled.span`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToggleIcon = styled.span<{ $active: boolean }>`
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 1;
  color: ${({ $active, theme }) => ($active ? '#ffffff' : theme.textSubtle)};
  opacity: ${({ $active }) => ($active ? 1 : 0.82)};
  transition:
    color 0.22s ease,
    opacity 0.22s ease;
`;

export const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeMode();
  const isLight = mode === themeModes.light;

  return (
    <Toggle
      type="button"
      onClick={toggleTheme}
      $isLight={isLight}
      aria-label={isLight ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
      title={isLight ? 'Темная тема' : 'Светлая тема'}
    >
      <ToggleLabels aria-hidden="true">
        <ToggleIcon $active={!isLight}>☾</ToggleIcon>
        <ToggleIcon $active={isLight}>☀</ToggleIcon>
      </ToggleLabels>
    </Toggle>
  );
};
