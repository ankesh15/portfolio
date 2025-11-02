import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Food Distribution Platform | Portfolio Project',
    description:
        'A full-stack platform connecting food donors and recipients with real-time tracking, dashboards, and advanced admin tools.'
};

export default function FoodDistributionPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6">
                {/* Hero Section */}
                <section className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-12">
                    <Image
                        src="/images/project2.jpg"
                        alt="Food Distribution Platform"
                        fill
                        className="object-cover brightness-75"
                        priority
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">
                            Food Distribution Platform
                        </h1>
                        <p className="text-lg md:text-xl max-w-2xl">
                            Empowering communities to reduce food waste and ensure equitable
                            distribution.
                        </p>
                    </div>
                </section>

                {/* Overview */}
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                        🧩 Overview
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        The <strong>Food Distribution Platform</strong> is a full-stack
                        web application that bridges the gap between food donors,
                        recipients, and administrators. It enables seamless food donation
                        creation, pickup scheduling, recipient claims, and real-time
                        analytics — all under one secure platform.
                    </p>
                </section>

                {/* Core Features */}
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                        🚀 Core Features
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-gray-700">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">✅ User Authentication</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>JWT-based secure login and registration</li>
                                <li>Role-based access: Donor, Recipient, Admin</li>
                                <li>Profile management and password change</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-4 mb-2">✅ Donor Portal</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Create and manage donations with detailed forms</li>
                                <li>Pickup scheduling and location management</li>
                                <li>Donation dashboard with analytics & status tracking</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-4 mb-2">
                                ✅ Recipient Dashboard
                            </h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Browse and claim nearby donations</li>
                                <li>Advanced search and filtering</li>
                                <li>Personal dashboard and recommendations</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">✅ Admin Panel</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>User management and role assignment</li>
                                <li>Donation oversight and moderation tools</li>
                                <li>Analytics dashboard and system settings</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-4 mb-2">✅ Real-Time Features</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Live updates with Socket.io</li>
                                <li>Email & SMS notifications (Twilio)</li>
                                <li>Real-time donation status and activity tracking</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-4 mb-2">
                                ✅ Advanced Functionality
                            </h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Geospatial queries for location-based matching</li>
                                <li>Responsive design with Material-UI</li>
                                <li>Export, reporting, and validation tools</li>
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
                                <li>React 19.1.1 + Hooks</li>
                                <li>Material-UI 7.3.1</li>
                                <li>React Router 7.7.1</li>
                                <li>Axios, Date-fns</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-5 shadow">
                            <h3 className="text-lg font-semibold mb-2 text-green-600">
                                Backend
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Node.js + Express 4.18.2</li>
                                <li>MongoDB + Mongoose 7.5.0</li>
                                <li>JWT, bcryptjs, dotenv</li>
                                <li>Socket.io for real-time updates</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-5 shadow">
                            <h3 className="text-lg font-semibold mb-2 text-purple-600">
                                Utilities & Services
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Nodemailer & Twilio</li>
                                <li>Multer (file uploads)</li>
                                <li>Helmet, Rate Limit, Express Validator</li>
                                <li>Node-Geocoder for maps</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Links */}
                <section className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    <a
                        href="https://github.com/ankesh15/Food-Distribution-Platform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition"
                    >
                        View on GitHub
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-md transition"
                    >
                        Live Demo (coming soon)
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
