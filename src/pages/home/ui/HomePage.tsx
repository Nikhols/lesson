import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { lessons } from '@/entities/lesson/model/lessons';
import { getSectionById } from '@/entities/lesson/model/sections';
import { PageShell } from '@/shared/ui/PageShell';

const LessonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`;

const LessonCard = styled(NavLink)`
  padding: 20px;
  border-radius: 24px;
  background: ${({ theme }) => theme.surfaceBackground};
  border: 1px solid ${({ theme }) => theme.surfaceBorder};
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.sectionActiveBorder};
  }
`;

const LessonNumber = styled.span`
  color: ${({ theme }) => theme.accentText};
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const LessonTitle = styled.h2`
  margin: 10px 0 10px;
  font-size: 22px;
`;

const LessonDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.6;
`;

interface HomePageProps {
  sectionId: string;
}

export const HomePage = ({ sectionId }: HomePageProps) => {
  const section = getSectionById(sectionId) ?? getSectionById('js');
  const sectionLessons = lessons.filter((lesson) => lesson.sectionId === section?.id);

  return (
    <PageShell>
      <LessonGrid>
        {sectionLessons.map((lesson) => (
          <LessonCard key={lesson.id} to={lesson.path}>
            <LessonNumber>Урок {lesson.order}</LessonNumber>
            <LessonTitle>{lesson.title}</LessonTitle>
            <LessonDescription>{lesson.description}</LessonDescription>
          </LessonCard>
        ))}
      </LessonGrid>
    </PageShell>
  );
};
