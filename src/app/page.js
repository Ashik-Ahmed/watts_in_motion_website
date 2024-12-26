import Link from 'next/link'
import Hero from './components/Hero'
import Services from './components/Services'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <CtaSection />
    </div>
  )
}

const CtaSection = () => (
  <section className="py-20 bg-primary text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Building the Future of Clean Energy Together</h2>
      <p className="text-xl mb-8">Explore how Watts in Motion is working towards creating a sustainable energy landscape and how you can contribute to this vision.</p>
      <Link
        href="/contact"
        className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
      >
        Get in Touch
      </Link>
    </div>
  </section>
)