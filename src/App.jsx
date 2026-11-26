import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { initScroll } from './lib/scroll'
import Header from './components/Header'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'
import { Footer } from './components/Sections'

// Clicked links open their page at the top (the router keeps the old scroll position otherwise).
// Links with a #section are left to the page, which scrolls to that section; Back/Forward (POP)
// are left to the browser so it can restore the previous position.
function ScrollToTop() {
  const { key, hash } = useLocation()
  const navigationType = useNavigationType()
  useEffect(() => {
    if (!hash && navigationType !== 'POP') window.scrollTo(0, 0)
  }, [key, hash, navigationType])
  return null
}

export default function App() {
  useEffect(() => initScroll(), [])
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
