import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { Edit3, Mail, Award, User } from "lucide-react";
import { Link } from "react-router";

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <section className="bg-gradient-to-b from-[#f6e0c7] via-[#e8c7a4] to-[#d3a473] min-h-screen flex items-center justify-center py-12 px-6 sm:px-10 lg:px-20">
            <div
                className="max-w-4xl w-full bg-[#0d0d0d]/80 rounded-3xl shadow-2xl p-8 sm:p-12 text-white backdrop-blur-md"
                data-aos="zoom-in"
                data-aos-duration="1200"
            >
                {/* Header */}
                <h1
                    className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                >
                    My Profile
                </h1>

                {/* Profile Card */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                    {/* Profile Picture */}
                    <div
                        className="relative group"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <img
                            src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/no-avatar.png"}
                            alt="Profile"
                            className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-orange-500 shadow-lg object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-2 right-2 bg-orange-500 p-2 rounded-full shadow-lg cursor-pointer hover:bg-orange-600 transition-colors">
                            <Edit3 size={18} />
                        </div>
                    </div>

                    {/* User Info */}
                    <div
                        className="flex-1 space-y-4"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <div className="flex items-center gap-2">
                            <User size={20} className="text-orange-400" />
                            <p className="text-lg sm:text-xl font-semibold">
                                {user?.displayName || "Anonymous User"}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Mail size={20} className="text-orange-400" />
                            <p className="text-sm sm:text-base">{user?.email}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Award size={20} className="text-orange-400" />
                            <p className="text-sm sm:text-base">
                                Skill Points:{" "}
                                <span className="text-orange-400 font-semibold">120</span>
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-4">
                            <Link
                                to="/editProfile"
                                className="bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg hover:scale-105 transition-transform"
                            >
                                Edit Profile
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div
                    className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <div className="bg-[#1a1a1a]/70 rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
                        <p className="text-2xl font-bold text-orange-400">8</p>
                        <p className="text-sm mt-1 text-gray-300">Skills Shared</p>
                    </div>
                    <div className="bg-[#1a1a1a]/70 rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
                        <p className="text-2xl font-bold text-orange-400">5</p>
                        <p className="text-sm mt-1 text-gray-300">Skills Learned</p>
                    </div>
                    <div className="bg-[#1a1a1a]/70 rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
                        <p className="text-2xl font-bold text-orange-400">4.8 ★</p>
                        <p className="text-sm mt-1 text-gray-300">Average Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;
