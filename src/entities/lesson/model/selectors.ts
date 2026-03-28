import { RootState } from '@/app/store';

export const selectCurrentLessonId = (state: RootState) =>
  state.lessonProgress.currentLessonId;

export const selectCompletedLessonIds = (state: RootState) =>
  state.lessonProgress.completedLessonIds;
