import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { initScroll } from './lib/scroll'
import Header from './components/Header'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import { Footer } from './components/Sections'

export default function App() {
  useEffect(() => initScroll(), [])
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
