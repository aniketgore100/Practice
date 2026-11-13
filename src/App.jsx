import { useEffect } from 'react'
import { initScroll } from './lib/scroll'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryCarousel from './components/CategoryCarousel'
import { TrustedBy, Steps, Services, Industries, Why, Proof, CTA, Footer } from './components/Sections'

export default function App() {
  useEffect(() => initScroll(), [])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Steps />
        <CategoryCarousel />
        <Services />
        <Industries />
        <Why />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
