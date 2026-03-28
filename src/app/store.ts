import { configureStore } from '@reduxjs/toolkit';

import { lessonProgressReducer } from '@/entities/lesson/model/lesson-progress-slice';

export const store = configureStore({
  reducer: {
    lessonProgress: lessonProgressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
