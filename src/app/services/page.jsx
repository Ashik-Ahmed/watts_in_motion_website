'use client'

import Image from 'next/image'

export default function Services() {

    const service = [
        {
            title: "Renewable Energy Trading",
            description: "At Watts in Motion, we will be pioneering the future of energy by enabling seamless renewable energy trading. We are designing our system in such a way that will connect clean energy producers with forward-thinking consumers, leveraging solar, wind, and other sustainable sources. Through innovative trading solutions, we will make a framework where it will be easy to buy, sell, and track renewable energy in real-time, empowering a cleaner, more intelligent grid.",
            image: "/services/renewable_energy_trading.png",
            bgColor: "bg-gradient-to-br from-gray-50 to-white",
        },
        {
            title: "Charging Station Network",
            description: "We are developing the future of transportation in Bangladesh with a comprehensive Electric Vehicle (EV) charging station network. Our vision is to create an extensive, nationwide infrastructure that ensures EV users can access fast, reliable, and convenient charging points wherever they go. By strategically placing stations in key locations, we will help individuals and businesses seamlessly transition to electric mobility. As we pave the way for a sustainable future, our network will be the backbone of Bangladesh's green revolution, driving widespread adoption of clean, efficient transportation.",
            image: "/services/charging_station.png",
            bgColor: "bg-gradient-to-br from-gray-100 to-white",
        },
        {
            title: "Charging Solutions & Battery Management System",
            description: "We aim to revolutionize Bangladesh's EV ecosystem by developing a state-of-the-art charging infrastructure and intelligent battery management systems. Our vision includes creating a seamless network of fast, reliable, and accessible charging solutions, ensuring the widespread adoption of clean transportation. We aspire to pioneer advanced battery management systems that optimize performance, enhance safety, and extend battery life, enabling a more innovative and sustainable driving experience. Through these innovations, we seek to lead the transformation toward Bangladesh's greener, cleaner future.",
            image: "/services/battery_management_system.png",
            bgColor: "bg-gradient-to-br from-gray-50 to-white",
        },
        {
            title: "Renewable Energy Project Development",
            description: "From Watts in Motion, we are committed to driving the growth of renewable energy in Bangladesh. Our project on Renewable Energy will focus on creating sustainable energy solutions through solar, wind, and other clean technologies. The designs we are crafting will reduce carbon footprints, lower energy costs, and provide reliable power to communities and businesses. By harnessing the power of nature, we aim to build a greener, more energy-efficient Bangladesh.",
            image: "/services/renewable_energy_project_development.png",
            bgColor: "bg-gradient-to-br from-gray-100 to-white",
        },
        {
            title: "Green Technology Integration",
            description: "We are also venturing into green technologies to create more thoughtful, sustainable solutions for Bangladesh! By incorporating cutting-edge technologies like energy-efficient systems, smart grids, and eco-friendly devices, we will help businesses and communities reduce their environmental impact. We will focus on creating seamless, green integrations that drive energy savings, improve sustainability, and pave the way for a cleaner, brighter future.",
            image: "/services/green_technology_integration.png",
            bgColor: "bg-gradient-to-br from-gray-50 to-white",
        },
        {
            title: "Energy Efficiency Consulting",
            description: "We believe that impactful change is achieved through collaboration and collective effort. With this belief, Watts in Motion is actively working to develop a dedicated team for Energy Efficiency Consulting. This expert team will be equipped to assist businesses and organizations in reducing energy consumption by conducting in-depth assessments of energy usage, identifying inefficiencies, and providing tailored recommendations for improvement. By offering practical and sustainable solutions, we aim to empower industries to optimize energy efficiency, lower operational costs, and contribute to a greener, more sustainable future.",
            image: "/services/energy_efficiency.png",
            bgColor: "bg-gradient-to-br from-gray-100 to-white",
        },
    ]

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-24">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <nav className="text-sm text-white/80 mb-6">
                        <span>Home</span> <span className="mx-2">/</span> <span className="font-semibold">Our Endeavors</span>
                    </nav>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Our Endeavors
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                        To drive the future with clean energy and sustainable solutions, we have outlined our task with careful strategies.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <div className="container mx-auto px-6 max-w-6xl py-16 space-y-20">
                {
                    service.map((service, index) => (
                        <div
                            key={service.title}
                            className={`${service.bgColor} relative flex flex-col md:flex-row items-center rounded-xl overflow-hidden shadow-lg transition-transform duration-500 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Random Decorative Shapes Around the Border */}
                            {/* Star */}
                            <div className="absolute top-[-20px] left-[-10px] opacity-70">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L14.09 8.26H20.66L15.77 11.74L17.86 18L12 14.27L6.14 18L8.23 11.74L3.34 8.26H9.91L12 2Z" fill="#FF7F50" className="drop-shadow-md" />
                                </svg>
                            </div>
                            {/* Wave */}
                            <div className="absolute top-[-10px] right-[10px] opacity-60">
                                <svg width="100" height="50" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0,160L48,133.3C96,107,192,53,288,48C384,43,480,85,576,122.7C672,160,768,192,864,197.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="#FFD700" className="drop-shadow-md" />
                                </svg>
                            </div>
                            {/* Zigzag */}
                            <div className="absolute bottom-[-20px] left-[-10px] opacity-75">
                                <svg width="70" height="70" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 30L15 0L30 30L45 0L60 30" stroke="#4CAF50" strokeWidth="4" className="drop-shadow-md" />
                                </svg>
                            </div>
                            {/* Blob */}
                            <div className="absolute bottom-[-30px] right-[-20px] opacity-65">
                                <svg width="120" height="120" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#149151" d="M40.2,-57.4C50.8,-50.2,54.2,-34.8,61.3,-21.9C68.4,-9,79.1,1.4,79.7,12.5C80.2,23.5,70.6,35.3,60.1,45.3C49.5,55.3,37.9,63.4,26.1,66.9C14.3,70.4,7.1,69.1,-3.8,75.6C-14.6,82.1,-29.1,96.3,-40.1,95.6C-51.1,94.8,-58.5,79.2,-61.4,64.4C-64.2,49.6,-62.5,35.5,-64.3,24C-66,12.6,-71.2,3.7,-73.4,-8.6C-75.6,-20.9,-74.7,-36.6,-67.5,-44.4C-60.3,-52.1,-46.8,-52,-35.6,-55.5C-24.4,-59,-15.3,-66.1,-2,-69.8C11.3,-73.4,22.6,-73.5,40.2,-57.4Z" transform="translate(100 100)" className="drop-shadow-md" />
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="md:w-1/2 p-8 flex flex-col justify-center z-10">
                                <h2 className="text-3xl font-bold mb-4 text-secondary">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Vertical Line Separator */}
                            <div className="hidden md:flex justify-center items-center h-full">
                                <div className="h-full w-[20px] bg-gray-900 mx-4"></div>
                            </div>

                            {/* Image */}
                            <div className="md:w-1/2 flex justify-center items-center p-4 z-10">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={600}
                                        height={450}
                                        className="w-[600px] h-[400px] object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}
