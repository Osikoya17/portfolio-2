export const skills = {
  core: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
    'Python',
    'Firebase',
    'Git',
  ] as string[],
  practices: [
    'APIs',
    'Full-stack development',
    'Accessible interfaces',
    'Clean architecture',
    'Responsive design',
  ] as string[],
  disciplines: ['FRONTEND', 'FULL-STACK', 'UI ENGINEERING'] as string[],
}

export const principles = [
  {
    index: '01',
    title: 'Clean architecture',
    body: 'Build systems that remain understandable as the product grows.',
  },
  {
    index: '02',
    title: 'Thoughtful interfaces',
    body: 'Design interactions that feel clear, accessible, and intentional.',
  },
  {
    index: '03',
    title: 'Ship, then iterate',
    body: 'Get the important thing working, learn from it, and improve it.',
  },
] as const