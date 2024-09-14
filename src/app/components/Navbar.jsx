'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg text-gray-900' : 'bg-transparent text-white'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`container mx-auto px-6 py-3  ${isScrolled && 'bg-white'}`}>
                <div className={`flex items-center justify-between`}>
                    <Link href="/">
                        <motion.div
                            className="text-2xl font-bold text-green-600"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Watts in Motion
                        </motion.div>
                    </Link>
                    <div className="hidden md:flex space-x-4">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/services">Services</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>
                    <div className="md:hidden">
                        {
                            isMobileMenuOpen ? (
                                <button
                                    className={`focus:outline-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}
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
                                    className={`focus:outline-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}
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
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/services">Services</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>
                )}
            </div>
        </motion.nav>
    )
}

const NavLink = ({ href, children }) => (
    <Link href={href}>
        <p className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-green-500">
            {children}
        </p>
    </Link>
)

export default Navbar