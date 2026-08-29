import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Loader } from './components/Loader'
import Home from './pages/Home'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:outline-ink"
      >
        Skip to content
      </a>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App