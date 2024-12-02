import { motion } from "framer-motion";
import Image from "next/image";


const Services = () => {
    const services = [
        {
            title: "Renewable Energy Trading",
            image: "/services/renewable_energy_trading.png",
        },
        {
            title: "Charging Station Network",
            image: "/services/charging_station.png",
        },
        {
            title: "Battery Management System",
            image: "/services/battery_management_system.png",
        },
        {
            title: "Renewable Energy Project Development",
            image: "/services/renewable_energy_project_development.png",
        },
        {
            title: "Green Technology Integration",
            image: "/services/green_technology_integration.png",
        },
        {
            title: "Energy Efficiency",
            image: "/services/energy_efficiency.png",
        },
    ];

    return (
        <section className="container mx-auto py-20 px-4">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-center text-green-700">
                    What We Offer
                </h2>
                <p className="text-center text-gray-500 mt-4">
                    Leading the way in green technology solutions for a sustainable future.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service?.title}
                        image={service?.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;


const ServiceCard = ({ title, image }) => (
    <motion.div
        className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-500 hover:scale-105"
        whileHover={{ y: -5 }}
    >
        {/* Image */}
        <div className="relative">
            <Image
                src={image}
                alt={title}
                width={400}
                height={400}
                className="w-[400px] h-[280px] object-contain bg-green-400 p-4 rounded-xl group-hover:brightness-75 transition-all duration-500"
            />
        </div>

        {/* Overlay with Title */}
        <div className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center">
            <h3 className="text-white text-2xl font-semibold px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {title}
            </h3>
        </div>

        {/* Bottom Ribbon */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
);
