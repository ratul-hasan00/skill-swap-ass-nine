import React from 'react';
import toast from 'react-hot-toast';
import { NavLink, useLoaderData, useParams } from 'react-router';

const SkillDetails = () => {
  const { id } = useParams();
  const skillId = parseInt(id);
  const idData = useLoaderData();
  const idDetails = idData.find((data) => data.skillId === skillId);

  const { skillName, category, rating, price, description, providerName, providerEmail, slotsAvailable, image } = idDetails;

const handleSubmit = (e) => {
    e.preventDefault();
    const sendMessage = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        reject();
      }, 2000);
    });
    toast.promise(
      sendMessage,
      {
        loading: 'Sending...',
        success: <b className="bg-gradient-to-r from-black via-[#1a0000] to-[#330000] bg-clip-text text-transparent">Booked Session Successfully!!</b>,
        error: <b className="text-red-500">Try Again.</b>,
      }
    );
    e.target.reset();
  };

  return (
    <section className="p-4 sm:p-6 bg-gradient-to-b from-[#f6e0c7] via-[#e8c7a4] to-[#d3a473]">
      {/* Skill Details Section */}
      <h1
        className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        Skill Details
      </h1>

      <div className="max-w-4xl mx-auto">
        <div
          className="bg-[#1a1a1a]/80 rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={image}
            alt={skillName}
            className="w-full lg:w-1/2 h-64 sm:h-96 object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
            data-aos="fade-right"
            data-aos-duration="2000"
          />

          <div className="p-6 flex flex-col justify-between lg:w-1/2">
            <div>
              <h1
                className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                {skillName}
              </h1>

              <p className="text-gray-300 mb-2" data-aos="fade-left" data-aos-duration="2000">
                Category: <span className="text-yellow-400">{category}</span>
              </p>

              <p className="text-yellow-400 mb-2" data-aos="fade-left" data-aos-duration="2000">
                {'⭐'.repeat(Math.floor(rating))} <span className="text-gray-300 ml-2">({rating})</span>
              </p>

              <p className="text-white font-semibold mb-4" data-aos="fade-left" data-aos-duration="2000">
                ${price}
              </p>

              <p className="text-gray-300 mb-4" data-aos="fade-right" data-aos-duration="2000">
                {description}
              </p>

              <div className="space-y-1" data-aos="fade-left" data-aos-duration="2000">
                <p className="text-orange-300">
                  <span className="font-semibold">Provider:</span> {providerName}
                </p>
                <p className="text-orange-300">
                  <span className="font-semibold">Email:</span> {providerEmail}
                </p>
                <p className="text-orange-300">
                  <span className="font-semibold">Slots Available:</span> {slotsAvailable}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
              <NavLink
                to="/"
                className="w-full sm:w-1/2 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold py-2 rounded-full hover:scale-105 transition-transform duration-300 text-center"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                ← Back to Courses
              </NavLink>

              <button
                className="w-full sm:w-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-2 rounded-full hover:scale-105 transition-transform duration-300"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Book Session Section */}
      <div
        className="max-w-3xl mx-auto mt-12 bg-[#1a1a1a]/80 rounded-3xl shadow-xl p-6 sm:p-8"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Book a Session
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              placeholder="Write a short message..."
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Book Session
          </button>
        </form>
      </div>
    </section>
  );
};

export default SkillDetails;
