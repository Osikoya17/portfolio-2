import { Send } from 'lucide-react'
import { useGsap, fadeUp } from '../lib/animations'
import { SectionIntro } from './SectionIntro'
import { site } from '../data/site'

const fieldClass =
  'w-full border-b border-line-deep bg-transparent py-3 text-[16px] text-ink outline-none transition-colors duration-300 placeholder:text-faint focus:border-ink'

export function Contact() {
  const ref = useGsap((api) => {
    const root = api.query<HTMLElement>('.contact-root')[0]
    if (root) {
      const targets = api.query<HTMLElement>('[data-reveal]')
      if (targets.length) fadeUp(targets, root, { stagger: 0.1 })
    }
  })

  return (
    <section id="contact" className="mt-32 scroll-mt-20 pt-4 md:mt-48">
      <div ref={ref} className="contact-root">
        <SectionIntro index="7" label="Contact" />

        <div className="mx-auto mt-12 max-w-[1500px] px-6 md:mt-16 md:px-10">
          <h2 className="font-display-xl max-w-[15em] text-[clamp(2.3rem,6vw,5.6rem)] font-light leading-[1.0] tracking-[-0.02em]">
            Let&apos;s build something{' '}
            <span className="italic">great together</span>.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-14 md:mt-24 lg:grid-cols-12 lg:gap-x-10">
            <div data-reveal className="flex flex-col gap-10 lg:col-span-5">
              <p className="max-w-[46ch] text-[16px] leading-relaxed text-muted md:text-lg">
                Have a project, role, or idea in mind? I&apos;d love to hear
                about it.
              </p>

              <dl className="flex flex-col gap-6">
                <div className="border-t border-line pt-5">
                  <dt className="u-label">Email</dt>
                  <dd className="mt-2 text-[15px] font-medium tracking-tight">
                    {site.email}
                  </dd>
                </div>
                <div className="border-t border-line pt-5">
                  <dt className="u-label">Location</dt>
                  <dd className="mt-2 text-[15px] font-medium tracking-tight">
                    {site.location} · {site.timezone}
                  </dd>
                </div>
                <div className="border-t border-line pt-5">
                  <dt className="u-label">Availability</dt>
                  <dd className="mt-2 flex items-center gap-2 text-[15px] font-medium tracking-tight">
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-[#2f6b43]"
                    />
                    {site.availability}
                  </dd>
                </div>
              </dl>
            </div>

            <form
              data-reveal
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
              className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="u-label">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="u-label">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="u-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What are we building?"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 border border-ink px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:bg-ink hover:text-paper"
                >
                  Get in touch
                  <Send
                    aria-hidden="true"
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </button>
                <p className="mt-3 text-[12px] text-faint">
                  Submitting opens your email app with the message ready to
                  send.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}