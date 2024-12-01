'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Hero from './components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <CtaSection />
    </div>
  )
}

const ServicesSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="Setup Charging Stations"
          description="We establish cutting-edge charging stations for electric vehicles across Bangladesh."
          icon="🔌"
        />
        <ServiceCard
          title="Provide Charging Solutions"
          description="Our innovative charging solutions ensure your electric vehicle is always ready to go."
          icon="🔋"
        />
        <ServiceCard
          title="Renewable Energy Consultant"
          description="Expert consultation on implementing renewable energy solutions for businesses and communities."
          icon="💡"
        />
      </div>
    </div>
  </section>
)

const ServiceCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const CtaSection = () => (
  <section className="py-20 bg-green-600 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Join the Green Revolution?</h2>
      <p className="text-xl mb-8">Contact us today to learn more about our services and how we can help you transition to sustainable energy solutions.</p>
      <motion.button
        className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.button>
    </div>
  </section>
)