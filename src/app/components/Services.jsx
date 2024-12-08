import Image from "next/image";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";


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
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        image={service.image}
                        link={service.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;

function ServiceCard({ title, image, link }) {
    return (
        <Link href={link} className={`relative group cursor-pointer`}>
            <div className="relative overflow-hidden rounded-lg">
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-full h-[350px] object-contain transition-transform duration-300 group-hover:scale-110 bg-teal-600/30"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/80" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <span className="text-white text-xl font-medium">{title}</span>
                <div className="bg-yellow-400 p-1 rounded-full transform transition-transform duration-300 group-hover:rotate-45">
                    <RxArrowTopRight size={30} className="w-6 h-6 text-black" />
                </div>
            </div>
        </Link>
    );
}
