import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LessonProgressState {
  currentLessonId: string | null;
  completedLessonIds: string[];
}

const initialState: LessonProgressState = {
  currentLessonId: null,
  completedLessonIds: [],
};

const lessonProgressSlice = createSlice({
  name: 'lessonProgress',
  initialState,
  reducers: {
    setCurrentLesson(state, action: PayloadAction<string>) {
      state.currentLessonId = action.payload;
    },
    toggleCompletedLesson(state, action: PayloadAction<string>) {
      const lessonId = action.payload;
      const lessonIndex = state.completedLessonIds.indexOf(lessonId);

      if (lessonIndex >= 0) {
        state.completedLessonIds.splice(lessonIndex, 1);
        return;
      }

      state.completedLessonIds.push(lessonId);
    },
  },
});

export const { setCurrentLesson, toggleCompletedLesson } = lessonProgressSlice.actions;
export const lessonProgressReducer = lessonProgressSlice.reducer;
