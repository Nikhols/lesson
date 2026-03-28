import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { lessons } from '@/entities/lesson/model/lessons';
import { getSectionById } from '@/entities/lesson/model/sections';
import {
  selectCompletedLessonIds,
  selectCurrentLessonId,
} from '@/entities/lesson/model/selectors';
import { routes } from '@/shared/config/routes';

const Card = styled.nav`
  padding: 24px;
  border-radius: 28px;
  background: rgba(12, 14, 19, 0.74);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
`;

const Brand = styled(NavLink)`
  display: block;
  margin-bottom: 24px;
`;

const BrandTitle = styled.div`
  font-size: 24px;
  font-weight: 800;
`;

const BrandDescription = styled.p`
  margin: 8px 0 0;
  color: rgba(246, 239, 229, 0.68);
  line-height: 1.5;
`;

const LessonList = styled.div`
  display: grid;
  gap: 12px;
`;

const LessonLink = styled(NavLink)<{ $isCurrent: boolean; $isDone: boolean }>`
  display: grid;
  gap: 6px;
  padding: 16px 18px;
  border-radius: 20px;
  background: ${({ $isCurrent }) =>
    $isCurrent ? 'rgba(48, 111, 242, 0.22)' : 'rgba(255, 255, 255, 0.03)'};
  border: 1px solid
    ${({ $isCurrent }) =>
      $isCurrent ? 'rgba(115, 166, 255, 0.42)' : 'rgba(255, 255, 255, 0.06)'};
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 196, 117, 0.12);
  }
`;

const LessonMeta = styled.span`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(246, 239, 229, 0.45);
`;

const LessonTitle = styled.span`
  font-size: 17px;
  font-weight: 700;
  line-height: 1.3;
`;

const LessonState = styled.span<{ $isDone: boolean }>`
  color: ${({ $isDone }) => ($isDone ? '#9fe870' : 'rgba(246, 239, 229, 0.54)')};
  font-size: 14px;
`;

export const LessonNavigation = () => {
  const { pathname } = useLocation();
  const currentLessonId = useSelector(selectCurrentLessonId);
  const completedLessonIds = useSelector(selectCompletedLessonIds);
  const activeSectionId = pathname.split('/')[1] || 'js';
  const activeSection = getSectionById(activeSectionId) ?? getSectionById('js');
  const sectionLessons = lessons.filter((lesson) => lesson.sectionId === activeSection?.id);

  return (
    <Card>
      <Brand to={activeSection?.path ?? routes.home}>
        <BrandTitle>{activeSection?.title} Handbook</BrandTitle>
        <BrandDescription>
          {activeSection?.description}
        </BrandDescription>
      </Brand>
      <LessonList>
        {sectionLessons.map((lesson) => {
          const isDone = completedLessonIds.includes(lesson.id);

          return (
            <LessonLink
              key={lesson.id}
              to={lesson.path}
              $isCurrent={lesson.id === currentLessonId}
              $isDone={isDone}
            >
              <LessonMeta>Урок {lesson.order}</LessonMeta>
              <LessonTitle>{lesson.title}</LessonTitle>
              <LessonState $isDone={isDone}>
                {isDone ? 'Изучено' : 'Открыть урок'}
              </LessonState>
            </LessonLink>
          );
        })}
      </LessonList>
    </Card>
  );
};
