'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-green-600">
            <div className="container mx-auto px-6 py-10">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <Image src="/watts_in_motion_logo.png" alt="Watts in Motion Logo" width={200} height={200} className="w-48 mb-4" />
                        <p className="text-green-500">The Green Idea For A Clean Tomorrow</p>
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
                            <SocialIcon icon={<FaFacebook color='#1877F2' />} />
                            <SocialIcon icon={<FaInstagram color='#E1306C' />} />
                            <SocialIcon icon={<FaLinkedin color='#0077B5' />} />
                        </div>
                    </div>
                </div>
                <div className="border-t border-green-600 mt-8 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Watts in Motion. All rights reserved.</p>
                </div>
                <div className='text-center mt-2'>
                    <p className='text-xs text-gray-400 italic'>Developed by <Link href="https://ashik-ahmed.vercel.app" className='text-green-600 hover:text-green-700 transition-colors duration-300'>Ashik Ahmed</Link></p>
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