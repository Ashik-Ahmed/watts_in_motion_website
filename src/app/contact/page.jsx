'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
    const [formStatus, setFormStatus] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically handle the form submission, e.g., send data to a server
        // For this example, we'll just simulate a successful submission
        setFormStatus('success')
    }

    return (
        <div className="min-h-screen pt-20">
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Get in touch with us for any inquiries or to learn more about our services.
                    </motion.p>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                            <motion.form
                                onSubmit={handleSubmit}
                                className="bg-white rounded-lg shadow-lg p-8"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                                    <input type="text" id="name" name="name" required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                    <input type="email" id="email" name="email" required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                                    <textarea id="message" name="message" rows="4" required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                                {formStatus === 'success' && (
                                    <p className="text-green-500 mt-4">Thank you for your message. We'll get back to you soon!</p>
                                )}
                            </motion.form>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <motion.div
                                className="bg-white rounded-lg shadow-lg p-8"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <div className="mb-4">
                                    <h3 className="font-bold">Address</h3>
                                    <p>7 Kawran Bazar Rd, Dhaka 1215, Bangladesh</p>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-bold">Phone</h3>
                                    <p>+880 1234 567890</p>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-bold">Email</h3>
                                    <p>info@wattsinmotion.com</p>
                                </div>
                                <div>
                                    <h3 className="font-bold">Business Hours</h3>
                                    <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p>Friday: Closed</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}