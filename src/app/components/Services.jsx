import Image from "next/image";
import Link from "next/link";


const Services = () => {
    const services = [
        {
            title: "Renewable Energy Trading",
            image: "/services/renewable_energy_trading.png",
            link: "/services#renewable_energy_trading"
        },
        {
            title: "Charging Station Network",
            image: "/services/charging_station.png",
            link: "/services#charging_station_network"
        },
        {
            title: "Charging Solutions & Battery Management System",
            image: "/services/battery_management_system.png",
            link: "/services#charging_solutions"
        },
        {
            title: "Renewable Energy Project Development",
            image: "/services/renewable_energy_project_development.png",
            link: "/services#renewable_energy_project"
        },
        {
            title: "Green Technology Integration",
            image: "/services/green_technology_integration.png",
            link: "/services#green_technology_integration"
        },
        {
            title: "Energy Efficiency Consulting",
            image: "/services/energy_efficiency.png",
            link: "/services#energy_efficiency_consulting"
        },
    ];

    return (
        <section className="container mx-auto py-20 px-4">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-center text-primary">
                    What We Offer
                </h2>
                <p className="text-center text-gray-500 mt-4">
                    Leading the way in green technology solutions for a sustainable future.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service?.title}
                        image={service?.image}
                        link={service?.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;


const ServiceCard = ({ title, image, link }) => (
    <Link
        href={link}
        className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-500 hover:scale-105"
        whileHover={{ y: -5 }}
    >
        {/* Image */}
        <div className="relative bg-secondary p-2 md:p-4">
            <Image
                src={image}
                alt={title}
                width={400}
                height={400}
                className="md:w-[400px] md:h-[280px] object-contain mx-auto rounded-xl group-hover:brightness-75 transition-all duration-500"
            />
        </div>

        {/* Overlay with Title */}
        <div className="absolute inset-0 bg-green-700 bg-opacity-60 md:bg-opacity-0 md:group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center">
            <h3 className="text-white text-center text-lg md:text-2xl font-semibold px-2 md:px-8 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                {title}
            </h3>
        </div>

        {/* Bottom Ribbon */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </Link>
);
