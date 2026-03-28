import { HandbookSection } from './types';

export const handbookSections: HandbookSection[] = [
  {
    id: 'js',
    title: 'JavaScript',
    shortTitle: 'JS',
    description: 'Язык программирования: синтаксис, функции, асинхронность и браузерный API.',
    heroTitle: 'Справочник для последовательного изучения JavaScript',
    heroDescription:
      'Темы идут от базового синтаксиса до DOM, fetch, модулей и асинхронного кода. Каждая страница оформлена как учебная таблица: понятие, описание, пример и результат.',
    path: '/js',
  },
  {
    id: 'html',
    title: 'HTML',
    shortTitle: 'HTML',
    description: 'Структура веб-страницы, семантика, формы, медиа и таблицы.',
    heroTitle: 'Справочник по HTML для учебных страниц и интерфейсов',
    heroDescription:
      'Раздел собран как последовательный мини-учебник: базовая разметка, семантика, ссылки, списки, таблицы, формы и мультимедиа.',
    path: '/html',
  },
  {
    id: 'css',
    title: 'CSS',
    shortTitle: 'CSS',
    description: 'Стилизация, блоки, flex, grid, адаптивность и анимации.',
    heroTitle: 'Справочник по CSS для верстки и оформления интерфейсов',
    heroDescription:
      'Раздел покрывает селекторы, модель блока, позиционирование, flexbox, grid, адаптивность, трансформации и анимации.',
    path: '/css',
  },
  {
    id: 'react',
    title: 'React',
    shortTitle: 'React',
    description: 'Компоненты, props, state, эффекты, формы и маршрутизация.',
    heroTitle: 'Справочник по React для сборки SPA и учебных приложений',
    heroDescription:
      'Раздел идет от JSX и компонентов к хукам, управлению состоянием, спискам, формам, эффектам и маршрутизации.',
    path: '/react',
  },
];

export const getSectionById = (sectionId: string) =>
  handbookSections.find((section) => section.id === sectionId);
