'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Services() {
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
                        Our Endeavors
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Watts in Motion offers comprehensive solutions for the electric vehicle ecosystem in Bangladesh.
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Setup Charging Stations"
                            description="We design and install state-of-the-art charging stations for electric vehicles across Bangladesh, ensuring wide accessibility and convenience for EV owners."
                            icon="🔌"
                        />
                        <ServiceCard
                            title="Provide Charging Solutions"
                            description="Our innovative charging solutions cater to various EV models and charging needs, offering fast, efficient, and reliable power for your electric vehicles."
                            icon="🔋"
                        />
                        <ServiceCard
                            title="Renewable Energy Consultation"
                            description="We offer expert consultation services to businesses and communities looking to implement renewable energy solutions, helping them transition to a greener future."
                            icon="💡"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
                    <div className="flex flex-wrap justify-center">
                        <ProcessStep
                            number="1"
                            title="Consultation"
                            description="We begin with a thorough consultation to understand your specific needs and requirements."
                        />
                        <ProcessStep
                            number="2"
                            title="Planning"
                            description="Our team develops a comprehensive plan tailored to your situation and goals."
                        />
                        <ProcessStep
                            number="3"
                            title="Implementation"
                            description="We execute the plan with precision, ensuring high-quality results and minimal disruption."
                        />
                        <ProcessStep
                            number="4"
                            title="Support"
                            description="We provide ongoing support and maintenance to ensure long-term success and satisfaction."
                        />
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FeatureCard
                            title="Expertise"
                            description="Our team consists of industry experts with years of experience in renewable energy and electric vehicle technology."
                            icon="👨‍🔬"
                        />
                        <FeatureCard
                            title="Innovation"
                            description="We stay at the forefront of technological advancements, constantly improving our solutions to meet evolving needs."
                            icon="🚀"
                        />
                        <FeatureCard
                            title="Sustainability"
                            description="Our commitment to environmental sustainability is at the core of everything we do, helping to create a greener future."
                            icon="🌿"
                        />
                        <FeatureCard
                            title="Customer-Centric"
                            description="We prioritize customer satisfaction, offering personalized solutions and responsive support throughout our engagement."
                            icon="🤝"
                        />
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