import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { LessonNavigation } from '@/features/lesson-navigation/ui/LessonNavigation';
import { SectionMenu } from './SectionMenu';

const Layout = styled.div`
  min-height: 100vh;
  padding: 24px;
`;

const Header = styled.header`
  max-width: 1440px;
  margin: 0 auto 24px;
  padding: 20px 24px;
  border-radius: 28px;
  background: rgba(12, 14, 19, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
`;

const HeaderTitle = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(246, 239, 229, 0.52);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 320px) minmax(0, 1fr);
  gap: 24px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 24px;
  align-self: start;

  @media (max-width: 1080px) {
    position: static;
  }
`;

const Content = styled.main`
  min-width: 0;
`;

export const MainLayout = () => {
  return (
    <Layout>
      <Header>
        <HeaderTitle>Справочники и уроки</HeaderTitle>
        <SectionMenu />
      </Header>
      <Grid>
        <Sidebar>
          <LessonNavigation />
        </Sidebar>
        <Content>
          <Outlet />
        </Content>
      </Grid>
    </Layout>
  );
};
