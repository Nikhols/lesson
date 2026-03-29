import { HandbookSection } from './types';

export const handbookSections: HandbookSection[] = [
  {
    id: 'js',
    title: 'JavaScript',
    shortTitle: 'JS',
    description: 'Язык программирования: синтаксис, функции, асинхронность и браузерный API.',
    path: '/js',
  },
  {
    id: 'html',
    title: 'HTML',
    shortTitle: 'HTML',
    description: 'Структура веб-страницы, семантика, формы, медиа и таблицы.',
    path: '/html',
  },
  {
    id: 'css',
    title: 'CSS',
    shortTitle: 'CSS',
    description: 'Стилизация, блоки, flex, grid, адаптивность и анимации.',
    path: '/css',
  },
  {
    id: 'react',
    title: 'React',
    shortTitle: 'React',
    description: 'Компоненты, props, state, эффекты, формы и маршрутизация.',
    path: '/react',
  },
];

export const getSectionById = (sectionId: string) =>
  handbookSections.find((section) => section.id === sectionId);
