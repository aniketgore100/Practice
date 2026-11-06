import Header from './components/Header'
import Hero from './components/Hero'
import CategoryCarousel from './components/CategoryCarousel'
import { Stack, Industries, Why, Proof, OEM, CTA, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryCarousel />
        <Stack />
        <Industries />
        <Why />
        <Proof />
        <OEM />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
