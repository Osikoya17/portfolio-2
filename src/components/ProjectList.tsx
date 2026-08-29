import { projects } from '../data/projects'
import { SectionIntro } from './SectionIntro'
import { ProjectItem } from './ProjectItem'

export function ProjectList() {
  return (
    <section id="work" className="mt-24 pt-4 md:mt-36">
      <SectionIntro index="1" label="Selected Work" />

      <div className="mx-auto mt-12 grid max-w-[1500px] grid-cols-1 gap-12 px-6 md:mt-16 md:px-10 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="max-w-[32ch] font-serif text-[17px] leading-relaxed text-muted md:text-xl">
              A few things I&apos;ve built, from expressive interfaces and
              interactive experiences to practical web applications.
            </p>
            <p className="mt-6 u-label text-faint">{projects.length} selected works</p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="flex flex-col gap-20">
            {projects.map((project) => (
              <ProjectItem
                key={project.number}
                project={project}
                total={projects.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}