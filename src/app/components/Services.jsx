import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {

    const services = [
        {
            title: "Setup Charging Stations",
            description: "We design and install state-of-the-art charging stations for electric vehicles across Bangladesh, ensuring wide accessibility and convenience for EV owners.",
            icon: "🔌"
        },
        {
            title: "Provide Charging Solutions",
            description: "Our innovative charging solutions cater to various EV models and charging needs, offering fast, efficient, and reliable power for your electric vehicles.",
            icon: "🔋"
        },
        {
            title: "Renewable Energy Consultation",
            description: "We offer expert consultation services to businesses and communities looking to implement renewable energy solutions, helping them transition to a greener future.",
            icon: "💡"
        },
        {
            title: "Setup Charging Stations",
            description: "We design and install state-of-the-art charging stations for electric vehicles across Bangladesh, ensuring wide accessibility and convenience for EV owners.",
            icon: "🔌"
        },
        {
            title: "Provide Charging Solutions",
            description: "Our innovative charging solutions cater to various EV models and charging needs, offering fast, efficient, and reliable power for your electric vehicles.",
            icon: "🔋"
        },
        {
            title: "Renewable Energy Consultation",
            description: "We offer expert consultation services to businesses and communities looking to implement renewable energy solutions, helping them transition to a greener future.",
            icon: "💡"
        },
    ]

    return (
        <div className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {
                services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service?.title}
                        description={service?.description}
                        icon={service?.icon}
                    />
                ))
            }
        </div>
    );
};

export default Services;


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