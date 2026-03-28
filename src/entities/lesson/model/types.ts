export interface LessonRow {
  title: string;
  description: string;
  example: string;
  result: string;
}

export interface Lesson {
  id: string;
  sectionId: string;
  order: number;
  title: string;
  description: string;
  path: string;
  rows: LessonRow[];
}

export interface HandbookSection {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  path: string;
}
