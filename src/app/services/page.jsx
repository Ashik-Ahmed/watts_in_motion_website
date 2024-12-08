import Image from 'next/image'

export default function Services() {

    const service = [
        {
            title: "Renewable Energy Trading",
            description: "At Watts in Motion, we will be pioneering the future of energy by enabling seamless renewable energy trading. We are designing our system in such a way that will connect clean energy producers with forward-thinking consumers, leveraging solar, wind, and other sustainable sources. Through innovative trading solutions, we will make a framework where it will be easy to buy, sell, and track renewable energy in real-time, empowering a cleaner, more intelligent grid.",
            image: "/services/renewable_energy_trading.png",
            bgColor: "bg-gradient-to-br from-gray-50 to-white",
            sectionId: "renewable_energy_trading"
        },
        {
            title: "Charging Station Network",
            description: "We are developing the future of transportation in Bangladesh with a comprehensive Electric Vehicle (EV) charging station network. Our vision is to create an extensive, nationwide infrastructure that ensures EV users can access fast, reliable, and convenient charging points wherever they go. By strategically placing stations in key locations, we will help individuals and businesses seamlessly transition to electric mobility. As we pave the way for a sustainable future, our network will be the backbone of Bangladesh's green revolution, driving widespread adoption of clean, efficient transportation.",
            image: "/services/charging_station.png",
            bgColor: "bg-gradient-to-br from-gray-100 to-white",
            sectionId: "charging_station_network"
        },
        {
            title: "Charging Solutions & Battery Management System",
            description: "We aim to revolutionize Bangladesh's EV ecosystem by developing a state-of-the-art charging infrastructure and intelligent battery management systems. Our vision includes creating a seamless network of fast, reliable, and accessible charging solutions, ensuring the widespread adoption of clean transportation. We aspire to pioneer advanced battery management systems that optimize performance, enhance safety, and extend battery life, enabling a more innovative and sustainable driving experience. Through these innovations, we seek to lead the transformation toward Bangladesh's greener, cleaner future.",
            image: "/services/battery_management_system.png",
            bgColor: "bg-gradient-to-br from-gray-50 to-white",
            sectionId: "charging_solutions"
        },
        {
            title: "Renewable Energy Project Development",
            description: "From Watts in Motion, we are committed to driving the growth of renewable energy in Bangladesh. Our project on Renewable Energy will focus on creating sustainable energy solutions through solar, wind, and other clean technologies. The designs we are crafting will reduce carbon footprints, lower energy costs, and provide reliable power to communities and businesses. By harnessing the power of nature, we aim to build a greener, more energy-efficient Bangladesh.",
            image: "/services/renewable_energy_project_development.png",
            bgColor: "bg-gradient-to-br from-gray-100 to-white",
            sectionId: "renewable_energy_project"
        },
        {
            title: "Green Technology Integration",
            description: "We are also venturing into green technologies to create more thoughtful, sustainable solutions for Bangladesh! By incorporating cutting-edge technologies like energy-efficient systems, smart grids, and eco-friendly devices, we will help businesses and communities reduce their environmental impact. We will focus on creating seamless, green integrations that drive energy savings, improve sustainability, and pave the way for a cleaner, brighter future.",
            image: "/services/green_technology_integration.png",
            bgColor: "bg-gradient-to-br from-gray-50 to-white",
            sectionId: "green_technology_integration"
        },
        {
            title: "Energy Efficiency Consulting",
            description: "We believe that impactful change is achieved through collaboration and collective effort. With this belief, Watts in Motion is actively working to develop a dedicated team for Energy Efficiency Consulting. This expert team will be equipped to assist businesses and organizations in reducing energy consumption by conducting in-depth assessments of energy usage, identifying inefficiencies, and providing tailored recommendations for improvement. By offering practical and sustainable solutions, we aim to empower industries to optimize energy efficiency, lower operational costs, and contribute to a greener, more sustainable future.",
            image: "/services/energy_efficiency.png",
            bgColor: "bg-gradient-to-br from-gray-100 to-white",
            sectionId: "energy_efficiency_consulting"
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
                            id={service.sectionId}
                            key={service.title}
                            className={`${service.bgColor} relative flex flex-col md:flex-row items-center rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-500 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Modern Decorative Shapes Around the Border */}

                            {/* Rounded Rectangle */}
                            <div className="absolute top-[-20px] left-[-20px]">
                                <svg width="80" height="40" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0" y="0" width="80" height="40" rx="20" fill="#FF7F50" opacity="0.5" />
                                </svg>
                            </div>

                            {/* Diagonal Line */}
                            <div className="absolute top-[10px] right-[-30px]">
                                <svg width="100" height="2" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0" y1="1" x2="100" y2="1" stroke="#4CAF50" strokeWidth="4" strokeDasharray="10,5" />
                                </svg>
                            </div>

                            {/* Dotted Circle */}
                            <div className="absolute bottom-[-50px] left-[10px]">
                                <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="40" cy="40" r="35" stroke="#FFD700" strokeWidth="4" fill="none" strokeDasharray="5,5" />
                                </svg>
                            </div>

                            {/* Arc */}
                            <div className="absolute bottom-[-20px] right-[-20px]">
                                <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0,50 A50,50 0 0,1 100,50" fill="none" stroke="#FF69B4" strokeWidth="4" />
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="md:w-2/3 p-8 flex flex-col justify-center z-10">
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
                            <div className="md:w-1/3 flex justify-center items-center p-4 z-10">
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
