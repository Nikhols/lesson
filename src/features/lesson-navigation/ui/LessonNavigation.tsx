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
  background: ${({ theme }) => theme.panelBackground};
  border: 1px solid ${({ theme }) => theme.panelBorder};
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

const LessonList = styled.div`
  display: grid;
  max-height: calc(100vh - 220px);
  overflow-y: auto;
  padding-right: 6px;
  border-top: 1px solid ${({ theme }) => theme.separator};

  @media (max-width: 1080px) {
    max-height: 420px;
  }
`;

const LessonLink = styled(NavLink)<{ $isCurrent: boolean; $isDone: boolean }>`
  display: block;
  padding: 14px 4px;
  border-bottom: 1px solid ${({ theme }) => theme.separator};
  color: ${({ theme, $isCurrent }) => ($isCurrent ? theme.accentStrongText : theme.text)};
  opacity: ${({ $isCurrent }) => ($isCurrent ? 1 : 0.92)};
  transition:
    color 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accentStrongText};
    opacity: 1;
  }
`;

const LessonHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const LessonHeadingText = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  min-width: 0;
`;

const LessonOrder = styled.span`
  color: ${({ theme }) => theme.textSubtle};
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
`;

const LessonTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
`;

const LessonDoneMark = styled.span`
  position: relative;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: ${({ theme }) => theme.doneBadgeBackground};
  border: 1px solid ${({ theme }) => theme.doneBadgeBorder};
  box-shadow: ${({ theme }) => theme.doneBadgeShadow};
  flex-shrink: 0;

  &::after {
    content: '';
    width: 8px;
    height: 4px;
    border-left: 2px solid ${({ theme }) => theme.doneBadgeCheck};
    border-bottom: 2px solid ${({ theme }) => theme.doneBadgeCheck};
    transform: translateY(-1px) rotate(-45deg);
  }
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
              <LessonHeading>
                <LessonHeadingText>
                  <LessonOrder>{lesson.order}.</LessonOrder>
                  <LessonTitle>{lesson.title}</LessonTitle>
                </LessonHeadingText>
                {isDone ? <LessonDoneMark aria-label="Урок изучен" /> : null}
              </LessonHeading>
            </LessonLink>
          );
        })}
      </LessonList>
    </Card>
  );
};
