'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiTarget } from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import './styles.css';

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section id="services_hero" className="pt-20 pb-16">
                <div className="container mx-auto px-6">
                    <p className="text-green-400">{`Home > About`}</p>
                </div>
            </section>

            {/* About Section */}
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    <div className="md:flex items-center gap-16">
                        {/* Left Content */}
                        <motion.div
                            className="w-full md:pl-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-8">What Defines Us</h1>
                            <p className="text-gray-600 mb-6">
                                Watts in Motion was established with a vision to revolutionize the green energy
                                ecosystem in Bangladesh. As pioneers in the electric vehicle industry, we are
                                committed to building a sustainable future for our nation.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Our mission is to become the market leader in e-vehicles by providing innovative
                                charging solutions and expert consultancy in renewable energy. We believe that by
                                facilitating the adoption of electric vehicles, we can significantly reduce carbon
                                emissions and create a cleaner, greener Bangladesh.
                            </p>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            className="w-full mb-8 md:mb-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="/green-energy-ecosystem.jpg"
                                    alt="Watts in Motion team"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Goal & Focus Section */}
            <section className="w-full py-36 bg-gray-100">
                <div className="container px-4 max-w-7xl mx-auto">
                    <div className="grid gap-16 md:grid-cols-2">
                        {/* Mission */}
                        <div className="relative flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg border-l-8 border-[#FF4B2B]">
                            <div className="mb-4">
                                <FiTarget className="w-12 h-12 text-[#FF4B2B]" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase">Our Goal</h3>
                            <p className="text-sm text-gray-600 mt-4">
                                We aim to drive Bangladesh’s transition to a greener future by advancing sustainable
                                energy solutions and promoting electric vehicles. Through innovation and
                                infrastructure development, we strive to shape a cleaner tomorrow.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="relative flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg border-l-8 border-[#00BFB3]">
                            <div className="mb-4">
                                <HiOutlineLightBulb className="w-12 h-12 text-[#00BFB3]" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase">Our Focus</h3>
                            <p className="text-sm text-gray-600 mt-4">
                                Watts in Motion envisions a Bangladesh where clean energy is the norm, electric
                                vehicles are the primary mode of transportation, and sustainable practices are
                                deeply ingrained in society. We aspire to drive this transformation, empowering
                                individuals and businesses to embrace renewable energy and contribute to a healthier
                                planet for future generations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
