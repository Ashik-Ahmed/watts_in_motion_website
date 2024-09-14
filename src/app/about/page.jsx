'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
    return (
        <div className="min-h-screen pt-20">
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        About Watts in Motion
                    </motion.h1>
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
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
                        <div className="w-full md:w-1/2 md:pl-12">
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
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard
                            title="Innovation"
                            description="We constantly push the boundaries of technology to provide cutting-edge solutions in the green energy sector."
                            icon="💡"
                        />
                        <ValueCard
                            title="Sustainability"
                            description="Our commitment to the environment drives everything we do, from our services to our internal operations."
                            icon="🌱"
                        />
                        <ValueCard
                            title="Customer-Centric"
                            description="We prioritize our customers' needs and strive to exceed their expectations in every interaction."
                            icon="🤝"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TeamMember
                            name="John Doe"
                            position="CEO & Founder"
                            image="/user.jpg"
                        />
                        <TeamMember
                            name="Jane Smith"
                            position="Chief Technology Officer"
                            image="/user.jpg"
                        />
                        <TeamMember
                            name="Mike Johnson"
                            position="Head of Operations"
                            image="/user.jpg"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

const ValueCard = ({ title, description, icon }) => (
    <motion.div
        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -5 }}
    >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
)

const TeamMember = ({ name, position, image }) => (
    <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden"
        whileHover={{ y: -5 }}
    >
        <div className="relative overflow-hidden">
            <Image
                src={image}
                alt={name}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/50 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <p className="text-gray-600">{position}</p>
        </div>
    </motion.div>
)