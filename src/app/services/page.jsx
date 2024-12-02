'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Services() {

    return (
        <div className="min-h-screen">
            <section id='services_hero' className="py-20">
                <div className="container mx-auto px-6">
                    <div>
                        <p className='text-green-400'>{`Home > Services`}</p>
                    </div>
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mt-8 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Endeavors
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        To drive the future with clean energy and sustainable solutions, we have outlined our task with careful strategies.
                    </motion.p>
                </div>
            </section>

            <section id='renewable_energy_trading' className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">Renewable Energy Trading</h2>
                    <div className='flex flex-col md:flex-row items-center justify-between mx-auto gap-8'>
                        <div className='w-1/2'>
                            <p>
                                At Watts in Motion, we will be pioneering the future of energy by enabling seamless renewable energy trading. We are designing our system in such a way that will connect clean energy producers with forward-thinking consumers, leveraging solar, wind, and other sustainable sources. Through innovative trading solutions, we will make a framework where it will be easy to buy, sell, and track renewable energy in real time, empowering a cleaner, more intelligent grid.
                            </p>
                        </div>
                        <div className='w-1/2'>
                            <Image src="/services/renewable_energy_trading.png" alt="Renewable Energy Trading" width={400} height={400} className='mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
            <section id='charging_station_network' className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">Charging Station Network</h2>
                    <div className='flex flex-col md:flex-row items-center justify-between mx-auto gap-8'>
                        <div className='w-1/2'>
                            <Image src="/services/renewable_energy_trading.png" alt="Renewable Energy Trading" width={400} height={400} className='mx-auto' />
                        </div>
                        <div className='w-1/2'>
                            <p>
                                We are developing the future of transportation in Bangladesh with a comprehensive Electric Vehicle (EV) charging station network. Our vision is to create an extensive, nationwide infrastructure that ensures EV users can access fast, reliable, and convenient charging points wherever they go. By strategically placing stations in key locations, we will help individuals and businesses seamlessly transition to electric mobility. As we pave the way for a sustainable future, our network will be the backbone of Bangladesh&apos;s green revolution, driving widespread adoption of clean, efficient transportation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='charging_solutions' className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">Charging Solutions & Battery Management System</h2>
                    <div className='flex flex-col md:flex-row items-center justify-between mx-auto gap-8'>
                        <div className='w-1/2'>
                            <p>
                                To build a cutting-edge infrastructure of charging solutions and battery management systems for the EV, we work with our expert engineers every day. This advanced charging infrastructure will ensure quick, reliable, and accessible charging for electric vehicles, making it easier to adopt clean transportation. We are also designing an intelligent battery management system to optimize battery performance, extend lifespan, and ensure safety for a seamless driving experience. Together, these solutions will play a key role in powering a sustainable and green future for Bangladesh’s EV ecosystem.
                            </p>
                        </div>
                        <div className='w-1/2'>
                            <Image src="/services/renewable_energy_trading.png" alt="Renewable Energy Trading" width={400} height={400} className='mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
            <section id='renewable_energy_project' className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">Renewable Energy Project Development</h2>
                    <div className='flex flex-col md:flex-row items-center justify-between mx-auto gap-8'>
                        <div className='w-1/2'>
                            <Image src="/services/renewable_energy_trading.png" alt="Renewable Energy Trading" width={400} height={400} className='mx-auto' />
                        </div>
                        <div className='w-1/2'>
                            <p>
                                From Watts in Motion, we are committed to driving the growth of renewable energy in Bangladesh. Our project on Renewable Energy will focus on creating sustainable energy solutions through solar, wind, and other clean technologies. The designs we are crafting will reduce carbon footprints, lower energy costs, and provide reliable power to communities and businesses. By harnessing the power of nature, we aim to build a greener, more energy-efficient Bangladesh.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='green_technology_integration' className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">Green Technology Integration</h2>
                    <div className='flex flex-col md:flex-row items-center justify-between mx-auto gap-8'>
                        <div className='w-1/2'>
                            <p>
                                We are also venturing into green technologies to create more thoughtful, sustainable solutions for Bangladesh! By incorporating cutting-edge technologies like energy-efficient systems, smart grids, and eco-friendly devices, we will help businesses and communities reduce their environmental impact. We will focus on creating seamless, green integrations that drive energy savings, improve sustainability, and pave the way for a cleaner, brighter future.
                            </p>
                        </div>
                        <div className='w-1/2'>
                            <Image src="/services/renewable_energy_trading.png" alt="Renewable Energy Trading" width={400} height={400} className='mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
            <section id='energy_efficiency_consulting' className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">Energy Efficiency Consulting</h2>
                    <div className='flex flex-col md:flex-row items-center justify-between mx-auto gap-8'>
                        <div className='w-1/2'>
                            <Image src="/services/renewable_energy_trading.png" alt="Renewable Energy Trading" width={400} height={400} className='mx-auto' />
                        </div>
                        <div className='w-1/2'>
                            <p>
                                We know the power of togetherness when it comes to making a change. With that thought, Watts in Motion is also building facilities for Energy Efficiency Consulting to help businesses and organizations reduce energy consumption. Our expert team will assess energy usage, identify areas for improvement, and recommend practical solutions to optimize efficiency. We can only reduce waste, lower their carbon footprint, and achieve long-term sustainability by implementing innovative energy-saving strategies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const ServiceCard = ({ title, description, icon }) => (
    <motion.div
        className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden group hover:text-white"
        whileHover={{ y: -5 }}
    >
        <div className="relative z-10">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 group-hover:text-gray-100">{description}</p>
        </div>
        <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="absolute inset-0 bg-white transform origin-bottom-left transition-transform duration-500 ease-in-out group-hover:scale-y-0"></div>
        </div>
        <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="absolute inset-0 bg-white transform origin-bottom-left transition-transform duration-500 ease-in-out group-hover:scale-x-0"></div>
        </div>
    </motion.div>
)

const ProcessStep = ({ number, title, description }) => (
    <motion.div
        className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: Number(number) * 0.2 }}
    >
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                {number}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </motion.div>
)

const FeatureCard = ({ title, description, icon }) => (
    <motion.div
        className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden group hover:text-white"
        whileHover={{ y: -5 }}
    >
        <div className="relative z-10">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 group-hover:text-gray-100">{description}</p>
        </div>
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="absolute inset-0 bg-white transform origin-bottom-left transition-transform duration-500 ease-in-out group-hover:scale-y-0"></div>
        </div>
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="absolute inset-0 bg-white transform origin-bottom-left transition-transform duration-500 ease-in-out group-hover:scale-x-0"></div>
        </div>
    </motion.div>
)