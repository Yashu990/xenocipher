import React from "react";
import { Link } from "react-router-dom";


const Cart = () => {
    return (
        <div className="bg-blue-950 text-white font-sans">
            {/* Header */}
            <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="h-20 flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <img src="/src\assets\xeno.svg" alt="Xenocipher" className="h-20 w-auto" />
                        </Link>

                        {/* Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {/* Products Dropdown */}
                            <div className="relative group">
                                <button className="text-gray-800/90 hover:text-gray-900 font-medium py-2">
                                    Products
                                </button>

                                {/* Dropdown */}
                                <div className="absolute left-0 top-full z-50 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl opacity-0 scale-95 translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                                    <div className="p-3">
                                        <Link to="/dfmd" className="block rounded-xl px-4 py-3 hover:bg-gray-50">
                                            <div className="font-semibold text-gray-900">Door Frame Metal Detectors</div>
                                            <div className="text-sm text-gray-500">Walk-through detection systems</div>
                                        </Link>
                                        <Link to="/handheld" className="block rounded-xl px-4 py-3 hover:bg-gray-50">
                                            <div className="font-semibold text-gray-900">Hand-Held Metal Detectors</div>
                                            <div className="text-sm text-gray-500">Portable screening devices</div>
                                        </Link>
                                        <Link to="/shoepage" className="block rounded-xl px-4 py-3 hover:bg-gray-50">
                                            <div className="font-semibold text-gray-900">Shoe Metal Scanner</div>
                                            <div className="text-sm text-gray-500">Footwear security scanning</div>
                                        </Link>
                                        <Link to="/smart-dfmd" className="block rounded-xl px-4 py-3 hover:bg-gray-50">
                                            <div className="font-semibold text-gray-900">Smart DFMD</div>
                                            <div className="text-sm text-gray-500">Touch LCD interface systems</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex items-center gap-3">
                                <button className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50">
                                    Request Quote
                                </button>
                                <a
                                    href="#cta"
                                    className="px-5 py-2.5 rounded-full text-white font-medium bg-gradient-to-r from-sky-500 to-indigo-600 hover:shadow-md"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Breadcrumb */}
            <section className="pt-24 pb-8">
                <div className="container mx-auto px-6">
                    <nav className="text-sm text-gray-400">
                        <span className="hover:text-neonBlue cursor-pointer">Home</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-neonBlue cursor-pointer">Products</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-neonBlue cursor-pointer">HHMD</span>
                        <span className="mx-2">/</span>
                        <span className="text-neonBlue">CipherX-800115</span>
                    </nav>
                </div>
            </section>

            {/* Product Hero */}
            <section className="pb-24 relative">
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-gradient-to-b from-neonBlue/10 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/20 to-deepBlue/20 rounded-3xl blur-3xl"></div>
                            <img
                                className="relative w-full rounded-3xl shadow-2xl shadow-neonBlue/20"
                                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8566c9d1fc-aae3d6431ab1dc5e73f9.png"
                                alt="CipherX-800115"
                            />
                        </div>
                        <div>
                            <span className="text-neonBlue mb-4 inline-block">Hand-Held Metal Detector</span>
                            <h1 className="text-5xl font-bold mb-6">CipherX-800115</h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Advanced handheld detection system with precision scanning and ergonomic design.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="/src/file-sample_150kB.pdf"
                                    download
                                    className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-lg shadow-cyan-400/30 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 active:scale-95"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity"></span>
                                    <i className="fas fa-download text-xl group-hover:animate-bounce"></i>
                                    <span>Download Specs</span>
                                    <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full group-hover:bg-white/30">PDF • 2MB</span>
                                </a>

                                <button className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/70 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-400 active:scale-95"><span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-10 transition-opacity"></span><i className="fas fa-info-circle text-lg group-hover:animate-pulse"></i><span>Request Info</span></button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* You can keep adding the Highlights, Specifications, Support, Related Products sections the same way */}
        </div>
    );
};

export default Cart;
