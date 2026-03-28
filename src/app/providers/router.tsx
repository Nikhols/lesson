import { Navigate, Route, Routes } from 'react-router-dom';

import { lessons } from '@/entities/lesson/model/lessons';
import { handbookSections } from '@/entities/lesson/model/sections';
import { MainLayout } from '@/widgets/layout/ui/MainLayout';
import { HomePage } from '@/pages/home/ui/HomePage';
import { LessonPage } from '@/pages/lesson/ui/LessonPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/js" replace />} />
        {handbookSections.map((section) => (
          <Route key={section.id} path={section.path} element={<HomePage sectionId={section.id} />} />
        ))}
        {lessons.map((lesson) => (
          <Route
            key={`${lesson.sectionId}-${lesson.id}`}
            path={lesson.path}
            element={<LessonPage lessonId={lesson.id} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/js" replace />} />
      </Route>
    </Routes>
  );
};
