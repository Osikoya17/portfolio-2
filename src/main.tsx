import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/archivo'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/fraunces/wght-italic.css'
import './index.css'
import App from './App.tsx'

document.documentElement.classList.add('gsap-ready')

function initialTheme() {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* no storage — fall through to system preference */
  }
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', dark ? '#15130f' : '#f4f1ea')
  return dark ? 'dark' : 'light'
}

document.documentElement.setAttribute('data-theme', initialTheme())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)