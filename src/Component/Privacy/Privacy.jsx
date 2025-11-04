import React from "react";
import { Link } from "react-router";

const Privacy = () => {
    return (
        <section className="bg-gradient-to-b from-[#f6e0c7] via-[#e8c7a4] to-[#d3a473] py-12 xs:py-14 sm:py-16 px-4 xs:px-6 sm:px-10 lg:px-20">

{/* privacy black bg  */}

            <div className="max-w-5xl mx-auto bg-[#0d0d0d]/80 rounded-3xl shadow-2xl p-6 xs:p-8 sm:p-12" data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent" data-aos="fade-right" data-aos-duration="2000">
                    Privacy Policy
                </h1>

                <p className="text-white text-xs xs:text-sm sm:text-base mb-6 leading-relaxed" data-aos="fade-left" data-aos-duration="2000">
                    At SkillSwap, we take your privacy seriously. This privacy policy explains what information we collect, how we use it, and your rights regarding your data while using our platform.
                </p>

                <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                    <div>
                        <h2 className="text-xl xs:text-2xl sm:text-2xl font-semibold mb-2 text-orange-400" data-aos="fade-right" data-aos-duration="2000">
                            Information We Collect
                        </h2>
                        <ul className="list-disc list-inside text-white text-xs xs:text-sm sm:text-base leading-relaxed">
                            <li data-aos="fade-left" data-aos-duration="2000">Personal details like Name, Email, and Profile Photo.</li>
                            <li data-aos="fade-left" data-aos-duration="2000">Booking information and skill exchange history.</li>
                            <li data-aos="fade-left" data-aos-duration="2000">Device and browser information for improving user experience.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl xs:text-2xl sm:text-2xl font-semibold mb-2 text-orange-400" data-aos="fade-right" data-aos-duration="2000">
                            How We Use Your Data
                        </h2>
                        <ul className="list-disc list-inside text-white text-xs xs:text-sm sm:text-base leading-relaxed">
                            <li data-aos="fade-left" data-aos-duration="2000">To provide skill exchange services and connect users.</li>
                            <li data-aos="fade-left" data-aos-duration="2000">To communicate with users via email for notifications.</li>
                            <li data-aos="fade-left" data-aos-duration="2000">To improve the platform and maintain security.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl xs:text-2xl sm:text-2xl font-semibold mb-2 text-orange-400" data-aos="fade-right" data-aos-duration="2000">
                            Data Security
                        </h2>
                        <p className="text-white text-xs xs:text-sm sm:text-base leading-relaxed" data-aos="fade-left" data-aos-duration="2000">
                            All user data is securely stored in Firebase. We do not share your personal information with third parties without consent.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl xs:text-2xl sm:text-2xl font-semibold mb-2 text-orange-400" data-aos="fade-right" data-aos-duration="2000">
                            Your Rights
                        </h2>
                        <ul className="list-disc list-inside text-white text-xs xs:text-sm sm:text-base leading-relaxed">
                            <li data-aos="fade-left" data-aos-duration="2000">Access and update your profile information anytime.</li>
                            <li data-aos="fade-left" data-aos-duration="2000">Request deletion of your account and personal data.</li>
                            <li data-aos="fade-left" data-aos-duration="2000">Opt out of promotional emails.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl xs:text-2xl sm:text-2xl font-semibold mb-2 text-orange-400" data-aos="fade-right" data-aos-duration="2000">
                            Contact Us
                        </h2>
                        <p className="text-white text-xs xs:text-sm sm:text-base leading-relaxed" data-aos="fade-left" data-aos-duration="2000">
                            If you have questions about our privacy policy, reach out to us at <span className="font-semibold text-orange-500">hayena@skillswap.com</span> or <span className="font-semibold text-orange-500"><Link to='/contactUs'>Contact Us</Link></span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
