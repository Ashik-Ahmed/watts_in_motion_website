'use client'

import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-10">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Watts in Motion</h3>
                        <p className="text-gray-400">Innovating green energy ecosystem in Bangladesh</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-green-400 transition-colors duration-300">Home</a></li>
                            <li><a href="/about" className="hover:text-green-400 transition-colors duration-300">About</a></li>
                            <li><a href="/services" className="hover:text-green-400 transition-colors duration-300">Services</a></li>
                            <li><a href="/contact" className="hover:text-green-400 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <SocialIcon icon={<FaFacebook />} />
                            <SocialIcon icon={<FaTwitter />} />
                            <SocialIcon icon={<FaInstagram />} />
                            <SocialIcon icon={<FaLinkedin />} />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Watts in Motion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

const SocialIcon = ({ icon }) => (
    <motion.a
        href="#"
        className="text-gray-400 hover:text-green-400 transition-colors duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
    >
        {icon}
    </motion.a>
)

export default Footer