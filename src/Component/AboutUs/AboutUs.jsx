import React from "react";

const AboutUs = () => {
    const teamCards = [
        {
            id: 1,
            title: "SkillSwap Platform",
            description: "Connecting local talent with learners in a seamless and fun way.",
            icon: "🎯",
            gradient: "bg-gradient-to-r from-orange-400 to-red-500",
        },
        {
            id: 2,
            title: "Expert Providers",
            description: "High-quality skill providers vetted for trust and expertise.",
            icon: "👩‍🏫",
            gradient: "bg-gradient-to-r from-red-400 to-pink-500",
        },
        {
            id: 3,
            title: "User-Friendly UI",
            description: "Modern, minimalistic, and responsive design for all devices.",
            icon: "🖥️",
            gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
        },
        {
            id: 4,
            title: "Secure & Private",
            description: "Your data is safely stored and privacy is our priority.",
            icon: "🔒",
            gradient: "bg-gradient-to-r from-green-400 to-teal-500",
        },
        {
            id: 5,
            title: "Community Driven",
            description: "Learn, teach, and grow within your local community.",
            icon: "🌐",
            gradient: "bg-gradient-to-r from-purple-400 to-pink-500",
        },
        {
            id: 6,
            title: "24/7 Support",
            description: "Our support team is always ready to help you succeed.",
            icon: "💬",
            gradient: "bg-gradient-to-r from-indigo-400 to-purple-500",
        },
    ];

    const features = [
        "Browse and book local skill sessions easily",
        "Rate and review your experiences",
        "Connect directly with providers",
        "Top-rated providers for each skill category",
        "Track your bookings and history",
    ];

    return (
        <section className="bg-gradient-to-b from-[#f6e0c7] via-[#e8c7a4] to-[#d3a473] py-12 xs:py-14 sm:py-16 px-4 xs:px-6 sm:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent" data-aos="zoom-in" data-aos-duration="1000">
                    About SkillSwap
                </h1>
                <p className="text-black font-semibold text-xs xs:text-sm sm:text-base mb-12 leading-relaxed max-w-3xl mx-auto" data-aos="zoom-in" data-aos-duration="2000">
                    SkillSwap is a local skill exchange platform where individuals can offer, learn, and trade skills within their community. Whether it's music, coding, yoga, or languages, SkillSwap brings learners and providers together in a fun, safe, and engaging environment.
                </p>

                <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-6 sm:gap-8 mb-12" data-aos="zoom-in" data-aos-duration="1000">
                    {teamCards.map((card) => (
                        <div
                            key={card.id}
                            className={`p-5 xs:p-6 sm:p-6 lg:p-6 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 ${card.gradient} text-white`}
                        >
                            <div className="text-3xl xs:text-4xl sm:text-4xl lg:text-4xl mb-3 xs:mb-4 sm:mb-4 lg:mb-4">{card.icon}</div>
                            <h3 className="text-lg xs:text-xl sm:text-xl lg:text-xl font-bold mb-2 bg-gradient-to-r from-black via-[#1a0000] to-[#330000] bg-clip-text text-transparent">
                                {card.title}
                            </h3>
                            <p className="text-xs xs:text-sm sm:text-base">{card.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#0d0d0d]/80 p-6 xs:p-8 sm:p-12 rounded-3xl shadow-2xl" data-aos="zoom-in" data-aos-duration="2000">
                    <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-4 xs:mb-5 sm:mb-6 text-orange-400 text-center">
                        What Makes Us Different
                    </h2>
                    <ul className="list-disc list-inside text-white text-xs xs:text-sm sm:text-base space-y-1 xs:space-y-2 sm:space-y-3 leading-relaxed max-w-3xl mx-auto">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
