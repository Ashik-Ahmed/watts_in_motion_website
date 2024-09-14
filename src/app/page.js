'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CtaSection />
    </div>
  )
}

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <Image
      src="/e-vehicle-charging.webp"
      alt="Electric car charging"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 text-center text-white">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Powering the Future
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Innovating green energy ecosystem in Bangladesh
      </motion.p>
      <motion.button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </div>
  </section>
)

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

const AboutSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/green-energy-ecosystem.jpg"
            alt="Electric vehicle charging"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold mb-6">About Watts in Motion</h2>
          <p className="text-gray-600 mb-6">
            Watts in Motion is established to bring innovation in the green energy ecosystem in Bangladesh. We are pioneering the establishment of a charging station chain to provide comprehensive charging solutions for electric vehicles nationwide.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to become the market leader in e-vehicles and contribute significantly to a sustainable, eco-friendly future for Bangladesh.
          </p>
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Us
          </motion.button>
        </div>
      </div>
    </div>
  </section>
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