export interface Project {
  number: string
  title: string
  brand: string
  description: string
  stack: string[]
  image: string
  alt: string
  href: string
  urlLabel: string
  layout: ProjectLayout
}

export type ProjectLayout =
  | 'zentry'
  | 'iworan'
  | 'oja'
  | 'fyb'
  | 'idanwo'
  | 'finance'

export interface Experience {
  index: string
  role: string
  organization: string
  period: string
  detail: string
  stack: string[]
}

export interface Education {
  index: string
  degree: string
  institution: string
  period: string
  note?: string
  detail?: string
  stack?: string[]
}

export interface Certification {
  index: string
  title: string
  organization: string
  description: string
  tags: string[]
  credly: string
}