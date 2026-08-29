import { Hero } from '../components/Hero'
import { ProjectList } from '../components/ProjectList'
import { About } from '../components/About'
import { Toolkit } from '../components/Toolkit'
import { HowIWork } from '../components/HowIWork'
import { Experience } from '../components/Experience'
import { Education } from '../components/Education'
import { Certifications } from '../components/Certifications'
import { Currently } from '../components/Currently'
import { Contact } from '../components/Contact'

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <About />
      <ProjectList />
      <Toolkit />
      <HowIWork />
      <Experience />
      <Education />
      <Certifications />
      <Currently />
      <Contact />
    </main>
  )
}