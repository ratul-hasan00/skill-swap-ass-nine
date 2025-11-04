import React, { Suspense } from 'react';
import finance from '../../assets/finance.png';
import js from '../../assets/js.png';
import meditation from '../../assets/meditation.png';
import paint from '../../assets/paint.png';
import watercolor from '../../assets/watercolor.png';
import wood from '../../assets/wood.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import AllCourses from '../AllCourses';
import Loading from '../Loading';

const fetchCard = async () => {
    const res = await fetch("/swapData.json")
    return res.json()
}
const allCourses = fetchCard();

const skillProvider = [
    {
        "id": 1,
        "name": "Alex Martin",
        "photo": "https://i.postimg.cc/nrnH9GwS/alex.jpg",
        "skill": "Guitar Lessons",
        "rating": 4.9,
        "experience": "5 years",
        "students": 120,
        "description": "Passionate musician helping beginners master chords, rhythm, and melody through fun, hands-on sessions."
    },
    {
        "id": 2,
        "name": "Sara Hossain",
        "photo": "https://i.postimg.cc/BnjJF6M9/sara.jpg",
        "skill": "Spoken English Coach",
        "rating": 4.8,
        "experience": "4 years",
        "students": 150,
        "description": "Helping non-native speakers build confidence and fluency through practical conversation-based learning."
    },
    {
        "id": 3,
        "name": "David Kim",
        "photo": "https://i.postimg.cc/PxQHH8rb/devid.webp",
        "skill": "Web Development",
        "rating": 5.0,
        "experience": "6 years",
        "students": 200,
        "description": "Full-stack developer teaching HTML, CSS, JavaScript, and React to beginners looking to enter the tech world."
    },
    {
        "id": 4,
        "name": "Lina Ahmed",
        "photo": "https://i.postimg.cc/KvzbXjXb/lina.jpg",
        "skill": "Watercolor Painting",
        "rating": 4.7,
        "experience": "3 years",
        "students": 95,
        "description": "Creative artist guiding learners in exploring texture, color, and brush techniques in watercolor art."
    },
    {
        "id": 5,
        "name": "John Carter",
        "photo": "https://i.postimg.cc/6p4N3Ppq/jhon.avif",
        "skill": "Fitness Training",
        "rating": 4.9,
        "experience": "7 years",
        "students": 180,
        "description": "Certified fitness instructor offering customized strength and cardio sessions for all fitness levels."
    },
    {
        "id": 6,
        "name": "Maya Kapoor",
        "photo": "https://i.postimg.cc/3RBsV5ng/maya.jpg",
        "skill": "Yoga & Meditation",
        "rating": 5.0,
        "experience": "5 years",
        "students": 210,
        "description": "Helping learners achieve balance and calm through guided yoga postures and mindfulness practices."
    },
    {
        "id": 7,
        "name": "Tom Schneider",
        "photo": "https://i.postimg.cc/QxV24z5K/tom.webp",
        "skill": "Woodworking",
        "rating": 4.8,
        "experience": "8 years",
        "students": 70,
        "description": "Experienced craftsman teaching furniture design, carving, and safe tool handling in beginner workshops."
    },
    {
        "id": 8,
        "name": "Emily Zhang",
        "photo": "https://i.postimg.cc/BnKds1mH/emily.jpg",
        "skill": "Digital Art & Illustration",
        "rating": 4.9,
        "experience": "6 years",
        "students": 160,
        "description": "Digital artist helping aspiring illustrators create stylized art using modern design tools and techniques."
    }
]


const Home = () => {
    return (
        <main className="bg-gradient-to-b from-[#f6e0c7] via-[#e8c7a4] to-[#d3a473] py-12 sm:py-16 px-4 xs:px-6 sm:px-10 lg:px-20">
            {/* banner section here  */}

            <section>
                <div
                    className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-6 xs:gap-8 sm:gap-10 bg-[#0d0d0d]/80 rounded-3xl shadow-2xl p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >

                    {/* Left Side */}
                    <div
                        className="flex-1 text-center lg:text-left space-y-3 xs:space-y-4 sm:space-y-5"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent leading-tight">
                            Learn. Share. Grow with SkillSwap
                        </h1>

                        <p
                            className="text-white text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed max-w-full sm:max-w-md mx-auto lg:mx-0"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            Exchange your skills with passionate learners and discover new talents in your local area. From coding and music to fitness and language — SkillSwap connects you with people who inspire.
                        </p>

                        <button
                            className="mt-3 xs:mt-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold px-4 xs:px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg text-sm sm:text-base"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            Explore Skills
                        </button>
                    </div>

                    {/* Right Side */}
                    <div
                        className="flex-1 w-full flex justify-center lg:justify-end mt-6 lg:mt-0"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <div className="w-full flex justify-center lg:justify-end">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                speed={1200}
                                loop={true}
                                modules={[Autoplay]}
                                className="mySwiper w-full max-w-md"
                            >
                                <SwiperSlide>
                                    <img
                                        className="rounded-xl object-cover w-[320px] h-[220px] xs:w-[360px] xs:h-[240px] sm:w-[400px] sm:h-[280px] lg:w-[460px] lg:h-[320px] shadow-lg mx-auto"
                                        src={finance}
                                        alt="Finance"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="rounded-xl object-cover w-[320px] h-[220px] xs:w-[360px] xs:h-[240px] sm:w-[400px] sm:h-[280px] lg:w-[460px] lg:h-[320px] shadow-lg mx-auto"
                                        src={js}
                                        alt="JavaScript"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="rounded-xl object-cover w-[320px] h-[220px] xs:w-[360px] xs:h-[240px] sm:w-[400px] sm:h-[280px] lg:w-[460px] lg:h-[320px] shadow-lg mx-auto"
                                        src={meditation}
                                        alt="Meditation"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="rounded-xl object-cover w-[320px] h-[220px] xs:w-[360px] xs:h-[240px] sm:w-[400px] sm:h-[280px] lg:w-[460px] lg:h-[320px] shadow-lg mx-auto"
                                        src={paint}
                                        alt="Paint"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="rounded-xl object-cover w-[320px] h-[220px] xs:w-[360px] xs:h-[240px] sm:w-[400px] sm:h-[280px] lg:w-[460px] lg:h-[320px] shadow-lg mx-auto"
                                        src={watercolor}
                                        alt="Watercolor"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="rounded-xl object-cover w-[320px] h-[220px] xs:w-[360px] xs:h-[240px] sm:w-[400px] sm:h-[280px] lg:w-[460px] lg:h-[320px] shadow-lg mx-auto"
                                        src={wood}
                                        alt="Wood"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>
            </section>

            {/* mapping the json data section here*/}

            <section className="mt-10 px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent pb-10"
                    data-aos="zoom-in"
                    data-aos-duration="1000">
                    Popular Skills
                </h2>
                <Suspense fallback={<Loading></Loading>}>
                    <AllCourses allCourses={allCourses} />
                </Suspense>
            </section>


            {/* stats section here */}

            <section className="py-12 bg-[#0d0d0d]/80 rounded-3xl mt-20 " data-aos="zoom-in" data-aos-duration="1000">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-center mb-12" data-aos="zoom-in" data-aos-duration="1500">
                        Our Achievements
                    </h2>

                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10">

                        <div className="bg-[#1a1a1a] rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" data-aos="zoom-in" data-aos-duration="2000">
                            <h3 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl font-bold text-white">150+</h3>
                            <p className="text-sm xs:text-base sm:text-base md:text-lg text-gray-300 mt-2">Skills Shared</p>
                        </div>

                        <div className="bg-[#1a1a1a] rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" data-aos="zoom-in" data-aos-duration="2000">
                            <h3 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl font-bold text-white">1200+</h3>
                            <p className="text-sm xs:text-base sm:text-base md:text-lg text-gray-300 mt-2">Active Learners</p>
                        </div>

                        <div className="bg-[#1a1a1a] rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" data-aos="zoom-in" data-aos-duration="2000">
                            <h3 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl font-bold text-white">350+</h3>
                            <p className="text-sm xs:text-base sm:text-base md:text-lg text-gray-300 mt-2">Local Connections</p>
                        </div>

                        <div className="bg-[#1a1a1a] rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" data-aos="zoom-in" data-aos-duration="2000">
                            <h3 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl font-bold text-white">95%</h3>
                            <p className="text-sm xs:text-base sm:text-base md:text-lg text-gray-300 mt-2">Satisfied Users</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* mapping top rated skill provider data here  */}

            <section className="mt-10 py-10 " data-aos="zoom-in" data-aos-duration="1000">

                <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent pb-10"
                    data-aos="zoom-in"
                    data-aos-duration="1000">
                    Top Rated Providers
                </h2>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6">
                    {skillProvider.map((provider) => (
                        <div
                            key={provider.id}
                            className="group relative bg-[#0d0d0d]/80 rounded-3xl shadow-2xl p-6 overflow-hidden hover:scale-105 transition-transform  duration-300 cursor-pointer"
                            data-aos="zoom-in"
                            data-aos-duration="2000">
                            <div className="overflow-hidden rounded-2xl mb-5">
                                <img
                                    src={provider.photo}
                                    alt={provider.name}
                                    className="w-full h-56 object-cover rounded-2xl hover:scale-105 transform transition duration-300" />
                            </div>

                            <h3 className="text-xl font-semibold text-orange-400 mb-1">{provider.name}</h3>
                            <p className="text-sm text-gray-300 mb-2">{provider.skill}</p>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{provider.description}</p>

                            <div className="flex justify-between items-center text-sm text-gray-300 mt-auto">
                                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                                    {provider.rating}
                                </span>
                                <span>{provider.experience}</span>
                            </div>
                            <p className="text-gray-400 text-sm mt-1">{provider.students} students</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* how it works section */}

            <section className="py-16 bg-[#0d0d0d]/80 mt-10 rounded-3xl" data-aos="zoom-in" data-aos-duration="1000">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-center mb-12" data-aos="zoom-in" data-aos-duration="1500">
                        How It Works
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

                        <div className="bg-[#1a1a1a] rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" data-aos="zoom-in" data-aos-duration="2000">
                            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-full mb-4">
                                <span className="text-white text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-white mb-2">Sign Up</h3>
                            <p className="text-gray-300 text-sm xs:text-base sm:text-base md:text-lg">
                                Create your SkillSwap account and set up your profile to start exchanging skills.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" data-aos="zoom-in" data-aos-duration="2000">
                            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-full mb-4">
                                <span className="text-white text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-white mb-2">Browse Skills</h3>
                            <p className="text-gray-300 text-sm xs:text-base sm:text-base md:text-lg">
                                Explore a wide variety of skills shared by others and find the ones you want to learn or teach.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" data-aos="zoom-in" data-aos-duration="2000">
                            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-full mb-4">
                                <span className="text-white text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-white mb-2">Connect & Learn</h3>
                            <p className="text-gray-300 text-sm xs:text-base sm:text-base md:text-lg">
                                Connect with skill providers, schedule sessions, and start learning or sharing your expertise.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


        </main>
    );
};

export default Home;
