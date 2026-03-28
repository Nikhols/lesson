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
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(246, 239, 229, 0.74);
  font-weight: 700;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;

  &.active {
    background: rgba(255, 196, 117, 0.14);
    border-color: rgba(255, 196, 117, 0.55);
    color: #fff3dc;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(48, 111, 242, 0.18);
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
