'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const currentPath = usePathname();

    const menus = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Our Endeavors', href: '/services' },
        { name: 'Let’s Connect', href: '/contact' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md text-gray-900`}>
            <div className="container mx-auto px-4 md:px-2 py-1 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/watts_in_motion_logo.png"
                        alt="Watts in Motion Logo"
                        width={80}
                        height={80}
                        className="cursor-pointer"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="w-full justify-center hidden md:flex items-center space-x-6">
                    {menus.map((menu, index) => (
                        <Link
                            key={index}
                            href={menu.href}
                            className={`text-base font-medium hover:bg-primary hover:text-white px-3 py-2 rounded transition-all ${currentPath === menu.href ? 'bg-primary text-white' : 'text-primary'}`}
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu">
                    {isMobileMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#16a34a"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#16a34a"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-16 right-4 bg-secondary text-white rounded-lg shadow-lg py-2 w-48">
                        {menus.map((menu, index) => (
                            <Link
                                key={index}
                                href={menu.href}
                                className={`block px-4 py-2 text-base hover:bg-green-600 transition-all rounded ${currentPath === menu.href ? 'bg-white text-green-600' : ''}`}
                                onClick={toggleMobileMenu}
                            >
                                {menu.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
