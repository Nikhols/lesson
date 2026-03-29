import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { handbookSections } from '@/entities/lesson/model/sections';

const Menu = styled.nav`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

const MenuLink = styled(NavLink)`
  padding: 14px 18px;
  border-radius: 999px;
  background: ${({ theme }) => theme.surfaceBackground};
  border: 1px solid ${({ theme }) => theme.panelBorder};
  color: ${({ theme }) => theme.textMuted};
  font-weight: 700;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &.active {
    background: ${({ theme }) => theme.sectionActiveBackground};
    border-color: ${({ theme }) => theme.sectionActiveBorder};
    color: ${({ theme }) => theme.accentStrongText};
  }

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.sectionHoverBackground};
  }
`;

export const SectionMenu = () => {
  return (
    <Menu>
      {handbookSections.map((section) => (
        <MenuLink key={section.id} to={section.path}>
          {section.shortTitle}
        </MenuLink>
      ))}
    </Menu>
  );
};
