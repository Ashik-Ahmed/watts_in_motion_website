'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
  <section className="py-20 bg-green-600 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Join the Green Revolution?</h2>
      <p className="text-xl mb-8">Contact us today to learn more about our services and how we can help you transition to sustainable energy solutions.</p>
      <Link
        href="/contact"
        className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
      >
        Get in Touch
      </Link>
    </div>
  </section>
)