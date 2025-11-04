import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black via-[#1a0000] to-[#330000] text-white py-10">
            <div className="w-11/12 mx-auto px-6 flex flex-col md:flex-row md:justify-around md:items-start items-center text-center md:text-left gap-10">


                <div className="w-full md:w-1/3">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                        SkillSwap
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Connect. Learn. Grow. SkillSwap helps you share your skills and
                        learn from others in a growing tech community.
                    </p>
                    <div className="mt-4 text-gray-400 text-sm space-y-1">
                        <p>+8801234567890</p>
                        <p>hayena@skillswap.com</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>


                <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-semibold mb-4 text-orange-400">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-5">
                        <a href="#" className="hover:text-orange-500 transition duration-300">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-red-500 transition duration-300">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-orange-400 transition duration-300">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-red-500 transition duration-300">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>


                <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="hover:text-red-400 cursor-pointer transition duration-300">
                            <Link to='/privacy'>Privacy Policy</Link>
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer transition duration-300">
                            <Link to='/terms'>Terms & Service</Link>
                        </li>
                        <li className="hover:text-red-400 cursor-pointer transition duration-300">
                            <Link to='/contactUs'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="border-t border-gray-800 mt-10 pt-10 text-center text-sm text-gray-400 w-11/12 mx-auto">
                <p className="flex justify-center items-center text-center">
                    © 2025 SkillSwap. All rights reserved.
                </p>
            </div>
        </footer>

    );
};

export default Footer;