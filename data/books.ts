import { Book } from '@/types'

export const books: Book[] = [
  {
    id: '1',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    rating: 5,
    dateRead: '2024-01-10',
    tags: ['Programming', 'Best Practices', 'Software Engineering'],
    favorite: true,
    summary: 'A must-read for any serious developer. Changed how I approach writing code.',
  },
  {
    id: '5',
    title: 'System Design Interview',
    author: 'Alex Xu',
    dateRead: '2024-05-01',
    tags: ['System Design', 'Interview', 'Architecture'],
    currentlyReading: true,
    summary: 'Learning how to design scalable distributed systems.',
  },
  {
    id: '2',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    rating: 5,
    dateRead: '2023-12-05',
    tags: ['Career', 'Programming', 'Philosophy'],
    favorite: true,
    summary: 'Essential wisdom for navigating a career in software development.',
  },
  {
    id: '3',
    title: 'Design Patterns',
    author: 'Gang of Four',
    rating: 4,
    dateRead: '2023-11-20',
    tags: ['Design Patterns', 'OOP', 'Architecture'],
    favorite: false,
    summary: 'The classic reference for understanding software design patterns.',
  },
  {
    id: '4',
    title: 'You Don\'t Know JS',
    author: 'Kyle Simpson',
    rating: 5,
    dateRead: '2024-02-15',
    tags: ['JavaScript', 'Web Development', 'Deep Dive'],
    favorite: true,
    summary: 'Deep dive into JavaScript that every JS developer should read.',
  },
]

