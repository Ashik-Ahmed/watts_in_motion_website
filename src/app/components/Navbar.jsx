'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const menus = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Our Endeavors', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md text-gray-900
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`container mx-auto px-6 py-3`}>
                <div className={`flex items-center justify-between`}>
                    <Link href="/">
                        <Image src="/watts_in_motion_logo.png" alt="Logo" width={60} height={60} />
                    </Link>
                    <div className="hidden flex-grow-1 mx-auto md:flex space-x-4">
                        {
                            menus.map((menu, index) => (
                                <Link key={index} href={menu?.href} className={`block px-3 py-2 rounded-md text-base font-medium text-green-600 hover:text-white hover:bg-green-500`}>
                                    {menu?.name}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="md:hidden">
                        {
                            isMobileMenuOpen ? (
                                <button
                                    className={`focus:outline-none text-gray-900`}
                                    onClick={toggleMobileMenu}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            ) : (
                                <button
                                    className={`focus:outline-none text-gray-900`}
                                    onClick={toggleMobileMenu}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            )
                        }
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="absolute md:hidden mt-2 space-y-2 bg-green-500 w-40 right-2">
                        {
                            menus.map((menu, index) => (
                                <Link onClick={toggleMobileMenu} key={index} href={menu?.href} className="block px-3 py-2 rounded-md text-base font-medium text-white">
                                    {menu?.name}
                                </Link>
                            ))
                        }
                    </div>
                )}
            </div>
        </motion.nav>
    )
}


export default Navbar