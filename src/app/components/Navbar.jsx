'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg text-gray-900' : 'bg-transparent text-white'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
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
                </div>
            </div>
        </motion.nav>
    )
}

const NavLink = ({ href, children }) => (
    <Link href={href}>
        <motion.span
            className="hover:text-green-600 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {children}
        </motion.span>
    </Link>
)

export default Navbar