import type { Project } from '../lib/types'
import { useGsap, fadeUp, imageParallax } from '../lib/animations'
import { cn } from '../lib/utils'
import { ArrowUpRight } from 'lucide-react'

/** Per-layout editorial compositions. Desktop splits each project
    into two equal columns: image and text sit side by side, with odd
    projects image-left and even projects image-right. */
const COMPOSITIONS: Record<
  Project['layout'],
  { figure: string; meta: string }
> = {
  zentry: { figure: 'lg:aspect-[16/10]', meta: '' },
  iworan: { figure: 'lg:order-2 lg:aspect-[4/3]', meta: 'lg:order-1' },
  oja: { figure: 'lg:aspect-[16/10]', meta: '' },
  fyb: { figure: 'lg:order-2 lg:aspect-[4/3]', meta: 'lg:order-1' },
  idanwo: { figure: 'lg:aspect-[16/10]', meta: '' },
  finance: { figure: 'lg:order-2 lg:aspect-[4/3]', meta: 'lg:order-1' },
}

interface ProjectItemProps {
  project: Project
  total: number
}

export function ProjectItem({ project, total }: ProjectItemProps) {
  const rootRef = useGsap((api) => {
    const root = api.query<HTMLElement>('.project-root')[0]
    if (!root) return
    const targets = api.query<HTMLElement>('[data-reveal]')
    if (targets.length) fadeUp(targets, root)
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 1040px)').matches
    ) {
      imageParallax(root)
    }
  })

  const layout = COMPOSITIONS[project.layout]
  const rightAlign = layout.meta.includes('text-right')

  return (
    <article ref={rootRef} className="project-root border-t border-line pt-10 md:pt-14">
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="group grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-10"
      >
        <div
          data-reveal
          data-parallax
          className={cn(
            'aspect-[4/3] overflow-hidden border border-line-deep bg-line/40',
            layout.figure,
          )}
        >
          <div className="h-full w-full overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]">
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          data-reveal
          className={cn(
            'flex flex-col gap-5',
            layout.meta,
            rightAlign ? 'lg:items-end' : '',
          )}
        >
          <p className="u-label u-figs flex items-center gap-3">
            <span>{project.number} / {total}</span>
            <span aria-hidden="true" className="inline-block h-px w-6 bg-ink/40" />
            <span>{project.brand}</span>
          </p>

          <h3 className="font-display-xl flex items-baseline gap-3 text-[clamp(2rem,4.4vw,4.4rem)] font-light leading-[1.02] tracking-[-0.02em]">
            {project.title}
            <span className="inline-flex shrink-0 overflow-hidden">
              <ArrowUpRight
                aria-hidden="true"
                className="size-[0.9em] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.25}
              />
            </span>
          </h3>

          <p className={cn('max-w-[52ch] font-serif text-[15px] leading-relaxed text-muted', rightAlign ? 'lg:text-right' : '')}>
            {project.description}
          </p>

          <ul
            className={cn(
              'flex flex-wrap gap-x-5 gap-y-2',
              rightAlign ? 'lg:justify-end' : '',
            )}
          >
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="border border-line-deep px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <p className="u-label flex items-center gap-2">
            <span className="text-ink">Live</span>
            <span className="u-figs">{project.urlLabel}</span>
          </p>
        </div>
      </a>
    </article>
  )
}