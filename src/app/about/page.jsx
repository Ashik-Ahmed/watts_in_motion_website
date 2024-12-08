'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiTarget } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import './styles.css';



export default function About() {
    return (
        <div className="min-h-screen">
            <section id='services_hero' className="py-20">
                <div className="container mx-auto px-6">
                    <div>
                        <p className='text-green-400'>{`Home > About`}</p>
                    </div>
                    {/* <motion.h1
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
                    </motion.p> */}
                </div>
            </section>
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    <div className="md:flex items-center md:gap-x-16">
                        <div className="w-full  md:pl-12">
                            <motion.h1
                                className="text-4xl md:text-5xl font-bold mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                What Defines Us
                            </motion.h1>
                            <motion.p
                                className="text-gray-600 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Watts in Motion was established with a vision to revolutionize the green energy ecosystem in Bangladesh. As pioneers in the electric vehicle industry, we are committed to building a sustainable future for our nation.
                            </motion.p>
                            <motion.p
                                className="text-gray-600 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Our mission is to become the market leader in e-vehicles by providing innovative charging solutions and expert consultancy in renewable energy. We believe that by facilitating the adoption of electric vehicles, we can significantly reduce carbon emissions and create a cleaner, greener Bangladesh.
                            </motion.p>
                        </div>
                        <div className="w-full  mb-8 md:mb-0">
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="/green-energy-ecosystem.jpg"
                                    alt="Watts in Motion team"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-green-500/50 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-36 bg-gray-100">
                <div className="container px-4 max-w-7xl mx-auto">
                    <div className="grid gap-40 md:grid-cols-2">
                        {/* Mission */}
                        <div className="relative mission-vision-card">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF4B2B] to-[#FF4B2B]/50 rotate-[135deg] transform origin-center" />
                            <div className="relative p-12 bg-white rounded-full shadow-lg">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 bg-white rounded-full shadow-sm">
                                        <FiTarget className="w-8 h-8 text-[#FF4B2B]" />
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase">Our Goal</h3>
                                    <p className="text-sm text-gray-600">
                                        We aim to drive Bangladesh’s transition to a greener future by advancing sustainable energy solutions and promoting electric vehicles. Through innovation and infrastructure development, we strive to shape a cleaner tomorrow.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="relative mission-vision-card">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00BFB3] to-[#00BFB3]/50 rotate-[135deg] transform origin-center" />
                            <div className="relative p-12 bg-white rounded-full shadow-lg">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 bg-white rounded-full shadow-sm">
                                        <HiOutlineLightBulb className="w-8 h-8 text-[#00BFB3]" />
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase">Our Focus</h3>
                                    <p className="text-sm text-gray-600">
                                        Watts in Motion envisions a Bangladesh where clean energy is the norm, electric vehicles are the primary mode of transportation, and sustainable practices are deeply ingrained in society. We aspire to drive this transformation, empowering individuals and businesses to embrace renewable energy and contribute to a healthier planet for future generations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}