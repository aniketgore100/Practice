import Header from './components/Header'
import Hero from './components/Hero'
import CategoryCarousel from './components/CategoryCarousel'
import { Steps, Services, Industries, Why, Proof, CTA, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryCarousel />
        <Steps />
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
