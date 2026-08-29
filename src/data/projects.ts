import type { Project } from '../lib/types'

export const projects: Project[] = [
  {
    number: '01',
    title: 'Zentry Clone',
    brand: 'ZENTRY',
    description:
      "A recreation of Zentry's landing page, rebuilt with smooth 3D transitions and a bold, game-focused layout.",
    stack: ['React', 'Tailwind CSS', 'GSAP', 'Three.js'],
    image: '/images/zentry.jpg',
    alt: 'Preview of the Zentry Clone landing page with layered 3D game typography',
    href: 'https://zentry-clone-ochre.vercel.app/',
    urlLabel: 'zentry-clone-ochre.vercel.app',
    layout: 'zentry',
  },
  {
    number: '02',
    title: 'Ìwòran',
    brand: 'ÌWÒRAN',
    description:
      'A seat and ticket booking application for cinema experiences, built with React, Tailwind CSS and the TMDB API.',
    stack: ['React', 'Tailwind CSS', 'TMDB API'],
    image: '/images/iworan.jpg',
    alt: 'Preview of the Ìwòran cinema seat and ticket booking interface',
    href: 'https://iworan.vercel.app/',
    urlLabel: 'iworan.vercel.app',
    layout: 'iworan',
  },
  {
    number: '03',
    title: 'Ọjà',
    brand: 'ỌJÀ',
    description:
      'A simple e-commerce experience built with React and Tailwind CSS, featuring product browsing, cart interactions, and checkout.',
    stack: ['React', 'Tailwind CSS'],
    image: '/images/oja.jpg',
    alt: 'Preview of the Ọjà e-commerce storefront with product cards and cart',
    href: 'https://oja-three.vercel.app/',
    urlLabel: 'oja-three.vercel.app',
    layout: 'oja',
  },
  {
    number: '04',
    title: 'FYB Spotlight',
    brand: 'FYB SPOTLIGHT',
    description:
      'A digital yearbook featuring profiles of students at Obafemi Awolowo University, with downloadable student profile cards.',
    stack: ['React', 'Tailwind CSS', 'Vite'],
    image: '/images/fyb-spotlight.jpg',
    alt: 'Preview of the FYB Spotlight yearbook with student profile cards',
    href: 'https://uncharted-fyb-spotlight.vercel.app/',
    urlLabel: 'uncharted-fyb-spotlight.vercel.app',
    layout: 'fyb',
  },
  {
    number: '05',
    title: 'Ìdánwò',
    brand: 'ÌDÁNWÒ',
    description:
      'A computer-based testing platform for creating question banks, assembling practice exams, taking timed tests, and reviewing detailed results.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express'],
    image: '/images/idanwo.jpg',
    alt: 'Preview of the Ìdánwò computer-based testing platform with exam builder',
    href: 'https://idanwo.vercel.app/',
    urlLabel: 'idanwo.vercel.app',
    layout: 'idanwo',
  },
  {
    number: '06',
    title: 'Finance Logger',
    brand: 'FINANCE LOGGER',
    description:
      'A lightweight finance tracking application for recording and monitoring income and expenses.',
    stack: ['React', 'Tailwind CSS'],
    image: '/images/finance-logger.jpg',
    alt: 'Preview of the Finance Logger income and expense tracking interface',
    href: 'https://financelogger-v2.vercel.app/',
    urlLabel: 'financelogger-v2.vercel.app',
    layout: 'finance',
  },
]