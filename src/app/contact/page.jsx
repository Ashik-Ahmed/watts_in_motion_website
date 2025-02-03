'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'



export default function Contact() {
    const [formStatus, setFormStatus] = useState(null)
    const [emailLoading, setEmailLoading] = useState(false)


    async function sendEmail(formData) {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Error:', error.message);
            return { error: error.message };
        }
    }

    const handleSubmit = async (e) => {
        setEmailLoading(true)
        e.preventDefault()

        const form = e.target;
        const data = new FormData(e.target)
        const formData = Object.fromEntries(data)

        const email = await sendEmail(formData)

        if (email.success) {
            setFormStatus('success')
            form.reset();
        }

        if (email.error) {
            setFormStatus('error')
        }
        setEmailLoading(false)
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-24">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <nav className="text-sm text-white/80 mb-6">
                        <span>Home</span> <span className="mx-2">/</span> <span className="font-semibold">Let’s Connect</span>
                    </nav>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Let’s Connect
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                        Contact us to learn more about our services and how we can help you transition to sustainable energy solutions.
                    </p>
                </div>
            </section>
            <section className="md:py-20 py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                            <motion.form
                                onSubmit={handleSubmit}
                                className="bg-secondary rounded-lg shadow-lg p-8"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <h3 className='text-2xl text-white font-bold mb-4'>Send us a message</h3>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
                                    <input type="text" id="name" name="name" required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
                                    <input type="email" id="email" name="email" required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-white font-bold mb-2">Subject</label>
                                    <input type="subject" id="subject" name="subject" required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
                                    <textarea id="message" name="message" rows="4" required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className={`bg-yellow-400 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors duration-300 ${emailLoading ? 'disabled' : ''}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                                {formStatus === 'success' &&
                                    (
                                        <p className="text-yellow-500 mt-4">Thank you for your message. We will get back to you soon!</p>
                                    )
                                }
                                {
                                    formStatus === 'error' &&
                                    (
                                        <p className="text-white bg-red-500 mt-4">Something went wrong. Please try again later.</p>
                                    )
                                }
                            </motion.form>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <motion.div
                                className="bg-white rounded-lg shadow-lg p-8"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <h2 className="text-2xl text-primary font-bold mb-6">Contact Information</h2>
                                <div className="mb-4">
                                    <h3 className="font-bold">Address</h3>
                                    <p>BTMC Bhaban (7th Floor), 7-9 Kawran Bazar, Dhaka- 1217, Bangladesh</p>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-bold">Phone</h3>
                                    <p>+880-2-55013775, +880-2-55013830</p>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-bold">Email</h3>
                                    <p>info@wattsinmotion.com</p>
                                </div>
                                <div>
                                    <h3 className="font-bold">Business Hours</h3>
                                    <p>Sunday - Thursday: 9:30 AM - 5:30 PM</p>
                                    <p>Friday - Saturday: Closed</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}