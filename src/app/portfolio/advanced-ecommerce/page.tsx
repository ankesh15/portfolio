import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Advanced E-commerce Website | Portfolio Project',
    description:
        'A modern full-stack e-commerce platform built using the MERN stack with AI-powered virtual try-on, responsive design, and real-time features.'
};

export default function AdvancedEcommercePage() {
    return (
        <main className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6">
                {/* Hero Section */}
                <section className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-12">
                    <Image
                        src="/images/project2.jpg"
                        alt="Advanced E-commerce Website"
                        fill
                        className="object-cover brightness-75"
                        priority
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">
                            Advanced E-commerce Website
                        </h1>
                        <p className="text-lg md:text-xl max-w-2xl">
                            A next-generation online shopping platform with AI-powered
                            virtual try-ons and seamless user experience.
                        </p>
                    </div>
                </section>

                {/* Overview */}
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                        🧩 Overview
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        The <strong>Advanced E-commerce Website</strong> is a full-stack
                        MERN-based platform designed to deliver a seamless online shopping
                        experience. It integrates modern UI design, secure user
                        authentication, intelligent product recommendations, and an
                        innovative AI-powered virtual try-on system for clothes.
                    </p>
                </section>

                {/* Core Features */}
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                        🚀 Core Features
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-gray-700">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">✅ User Features</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Secure user authentication and profile management</li>
                                <li>Browse products with category filters and search</li>
                                <li>AI-powered virtual try-on using MediaPipe and OpenCV</li>
                                <li>Responsive and interactive UI for all devices</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-4 mb-2">
                                ✅ Shopping Experience
                            </h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Real-time product updates and dynamic catalog</li>
                                <li>Add-to-cart and checkout flow with payment integration</li>
                                <li>Order tracking and purchase history</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-4 mb-2">
                                ✅ Virtual Try-On System
                            </h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Real-time virtual try-on using webcam feed</li>
                                <li>MediaPipe and OpenCV for image overlay processing</li>
                                <li>Fast and accurate rendering with AI assistance</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">✅ Admin Panel</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Product and inventory management</li>
                                <li>User role and account management</li>
                                <li>Sales analytics dashboard</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-4 mb-2">
                                ✅ Developer Tools
                            </h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Modular and reusable React components</li>
                                <li>Redux for global state management</li>
                                <li>Context API for dynamic theme and session handling</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-4 mb-2">
                                ✅ Security & Performance
                            </h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>JWT-based authentication and role validation</li>
                                <li>Helmet and CORS configuration</li>
                                <li>Optimized queries and caching strategies</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                        🛠 Tech Stack
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl p-5 shadow">
                            <h3 className="text-lg font-semibold mb-2 text-blue-600">
                                Frontend
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>React.js + Tailwind CSS</li>
                                <li>Redux & Context API</li>
                                <li>React Router for navigation</li>
                                <li>MediaPipe + OpenCV for AI try-on</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-5 shadow">
                            <h3 className="text-lg font-semibold mb-2 text-green-600">
                                Backend
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Node.js + Express.js</li>
                                <li>MongoDB + Mongoose</li>
                                <li>JWT authentication & bcryptjs</li>
                                <li>RESTful API architecture</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-5 shadow">
                            <h3 className="text-lg font-semibold mb-2 text-purple-600">
                                Tools & Utilities
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Axios, dotenv, Helmet</li>
                                <li>Express Validator & Rate Limiter</li>
                                <li>Cloudinary for media storage</li>
                                <li>Vercel for frontend deployment</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Links */}
                <section className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    <a
                        href="https://github.com/harshmriduhash/Advance-Ecommerce"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition"
                    >
                        View on GitHub
                    </a>

                    <a
                        href="https://client-azure-zeta-40.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-md transition"
                    >
                        Live Demo
                    </a>

                    <Link
                        href="/portfolio"
                        className="text-gray-700 underline hover:text-gray-900"
                    >
                        ← Back to Portfolio
                    </Link>
                </section>
            </div>
        </main>
    );
}
