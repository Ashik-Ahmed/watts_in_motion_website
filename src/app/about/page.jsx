import Image from 'next/image';
import { FiTarget } from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import './styles.css';

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            {/* <section id="services_hero" className="pt-20 pb-16">
                <div className="container mx-auto px-6">
                    <p className="text-green-400">{`Home > About`}</p>
                </div>
            </section> */}

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-24">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <nav className="text-sm text-white/80 mb-6">
                        <span>Home</span> <span className="mx-2">/</span> <span className="font-semibold">About</span>
                    </nav>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        About Us
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                        Discover the story behind Watts in Motion, our mission to shape a greener future for Bangladesh.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="md:flex items-center gap-16">
                        {/* Left Content */}
                        <div className="w-full md:pl-12">
                            <h1 className="text-secondary text-4xl md:text-5xl font-bold mb-8">What Defines Us</h1>
                            <p className="text-gray-600 mb-6">
                                Watts in Motion envisions a transformative future for Bangladesh through renewable energy solutions. With a commitment to shaping a sustainable energy landscape, we are building ourselves to drive innovation and nurture a greener ecosystem.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Positioning ourselves as a critical player in the Electric Vehicle (EV) market, we are working to lay the groundwork for an extensive EV infrastructure. Our goal is to establish a robust network of charging stations nationwide, ensuring convenient and accessible solutions for EV users. By spearheading this transformation, we aspire to lead the evolution of sustainable transportation in Bangladesh, empowering individuals and businesses to embrace a cleaner, greener future.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="w-full mb-8 md:mb-0" >
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="/green-energy-ecosystem.jpg"
                                    alt="Watts in Motion team"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                            </div>
                        </div>
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
                            <p className="text-sm md:text-base  text-gray-600 mt-4">
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
                            <p className="text-sm md:text-base  text-gray-600 mt-4">
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
