import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToHash } from '../lib/scroll'
import Hero from '../components/Hero'
import CategoryCarousel from '../components/CategoryCarousel'
import { TrustedBy, Steps, Services, Industries, Why, Proof, Partners, CTA } from '../components/Sections'

export default function Home() {
  const location = useLocation()
  // Keyed on location.key so re-clicking the same link (unchanged hash) still scrolls.
  useEffect(() => { if (location.hash) scrollToHash(location.hash) }, [location.key, location.hash])

  return (
    <>
      <Hero />
      <TrustedBy />
      <Steps />
      <CategoryCarousel />
      <Services />
      <Industries />
      <Why />
      <Proof />
      <Partners />
      <CTA />
    </>
  )
}
