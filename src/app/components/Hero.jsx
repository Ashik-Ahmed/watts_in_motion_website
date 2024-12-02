import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen">
            <div className="absolute inset-0">
                <Image
                    src="/watts_in_motion_banner.png"
                    alt="Solar panels and wind turbines"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-7xl font-bold text-green-400 mb-6">
                        The Green Idea
                        <p className="text-white">For A Clean Tomorrow</p>
                    </h1>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl">
                        Charge Forward with Watts in Motion
                    </p>
                    <div className="flex gap-4">
                        <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                            Get Started
                        </Link>
                        <Link href="/services" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-colors">
                            Our Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;