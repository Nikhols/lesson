import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { AppDispatch } from '@/app/store';
import { lessons } from '@/entities/lesson/model/lessons';
import { getSectionById } from '@/entities/lesson/model/sections';
import {
  selectCompletedLessonIds,
  selectCurrentLessonId,
} from '@/entities/lesson/model/selectors';
import {
  setCurrentLesson,
  toggleCompletedLesson,
} from '@/entities/lesson/model/lesson-progress-slice';
import {
  Description,
  HeroCard,
  Label,
  PageShell,
  Title,
} from '@/shared/ui/PageShell';

const TableCard = styled.div`
  overflow: hidden;
  border-radius: 28px;
  background: rgba(12, 14, 19, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const TableWrap = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  min-width: 860px;
  border-collapse: collapse;
`;

const HeadCell = styled.th`
  padding: 18px 20px;
  text-align: left;
  color: #ffd598;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.04);
`;

const Cell = styled.td`
  padding: 18px 20px;
  vertical-align: top;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  line-height: 1.65;
`;

const Code = styled.pre`
  margin: 0;
  white-space: pre-wrap;
  color: #cfe0ff;
`;

const Result = styled.div`
  color: #9fe870;
  font-weight: 600;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const Status = styled.span`
  color: rgba(246, 239, 229, 0.62);
`;

const ToggleButton = styled.button<{ $isDone: boolean }>`
  border: 0;
  border-radius: 999px;
  padding: 14px 20px;
  cursor: pointer;
  background: ${({ $isDone }) => ($isDone ? '#9fe870' : '#ffd598')};
  color: #17191f;
  font-weight: 800;
`;

interface LessonPageProps {
  lessonId: string;
}

export const LessonPage = ({ lessonId }: LessonPageProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const completedLessonIds = useSelector(selectCompletedLessonIds);
  const currentLessonId = useSelector(selectCurrentLessonId);

  const lesson = lessons.find((item) => item.id === lessonId);
  const section = lesson ? getSectionById(lesson.sectionId) : null;

  useEffect(() => {
    dispatch(setCurrentLesson(lessonId));
  }, [dispatch, lessonId]);

  if (!lesson) {
    return null;
  }

  const isDone = completedLessonIds.includes(lessonId);

  return (
    <PageShell>
      <HeroCard>
        <Label>
          {section?.title} • Урок {lesson.order}{' '}
          {currentLessonId === lessonId ? '• сейчас открыт' : ''}
        </Label>
        <Title>{lesson.title}</Title>
        <Description>{lesson.description}</Description>
      </HeroCard>

      <Actions>
        <Status>
          Таблица показывает понятие, объяснение, пример и ожидаемый результат.
        </Status>
        <ToggleButton
          type="button"
          $isDone={isDone}
          onClick={() => dispatch(toggleCompletedLesson(lessonId))}
        >
          {isDone ? 'Снять отметку' : 'Отметить как изученное'}
        </ToggleButton>
      </Actions>

      <TableCard>
        <TableWrap>
          <Table>
            <thead>
              <tr>
                <HeadCell>Метод / конструкция</HeadCell>
                <HeadCell>Описание</HeadCell>
                <HeadCell>Пример использования</HeadCell>
                <HeadCell>Результат</HeadCell>
              </tr>
            </thead>
            <tbody>
              {lesson.rows.map((row) => (
                <tr key={row.title}>
                  <Cell>{row.title}</Cell>
                  <Cell>{row.description}</Cell>
                  <Cell>
                    <Code>{row.example}</Code>
                  </Cell>
                  <Cell>
                    <Result>{row.result}</Result>
                  </Cell>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrap>
      </TableCard>
    </PageShell>
  );
};
