import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "react-hot-toast";

const ContactUs = () => {

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
        success: <b className="bg-gradient-to-r from-black via-[#1a0000] to-[#330000] bg-clip-text text-transparent">Message sent succesfully! We will contact you later.</b>,
        error: <b className="text-red-500">Could not save.</b>,
      }
    );
    e.target.reset();
  };

  return (
    <section className="bg-gradient-to-b from-[#f6e0c7] via-[#e8c7a4] to-[#d3a473] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">

{/* main div for flex  */}

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10">

{/* text dive here  */}

        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent" data-aos="fade-left" data-aos-duration="1000">
            Get in Touch
          </h2>
          <p className="text-black font-semibold text-sm sm:text-base" data-aos="fade-right" data-aos-duration="1000">
            Have a question or want to collaborate? We'd love to hear from you.
            Fill out the form or reach us using the info below.
          </p>

          <div className="space-y-3 sm:space-y-4 text-black font-semibold text-sm sm:text-base">
            <p className="flex items-center gap-2 sm:gap-3" data-aos="fade-left" data-aos-duration="1000">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              +8801234567890
            </p>
            <p className="flex items-center gap-2 sm:gap-3" data-aos="fade-right" data-aos-duration="1000">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              hayena@skillswap.com
            </p>
            <p className="flex items-center gap-2 sm:gap-3" data-aos="fade-left" data-aos-duration="1000">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

{/* contact form here  */}

          <div className="w-full md:w-1/2 bg-[#0d0d0d]/80 p-6 sm:p-8 rounded-2xl shadow-xl border-0" data-aos="fade-left" data-aos-duration="1000">
            <h3 className="text-xl sm:text-2xl font-semibold text-orange-400 mb-4 sm:mb-6 text-center" data-aos="fade-right" data-aos-duration="2000">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div data-aos="fade-left" data-aos-duration="2000">
                <label className="block text-sm sm:text-base font-medium mb-1 sm:mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-transparent border border-gray-500 focus:border-orange-500 outline-none transition text-sm sm:text-base"
                  placeholder="Enter your name"
                />
              </div>

              <div data-aos="fade-right" data-aos-duration="2000">
                <label className="block text-sm sm:text-base font-medium mb-1 sm:mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-transparent border border-gray-500 focus:border-orange-500 outline-none transition text-sm sm:text-base"
                  placeholder="Enter your email"
                />
              </div>

              <div data-aos="fade-left" data-aos-duration="2000">
                <label className="block text-sm sm:text-base font-medium mb-1 sm:mb-2">Message</label>
                <textarea
                  rows="5"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-transparent border border-gray-500 focus:border-orange-500 outline-none transition resize-none text-sm sm:text-base"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 py-2 sm:py-2.5 rounded-lg font-semibold text-white hover:from-orange-600 hover:to-red-700 transition duration-300 shadow-md text-sm sm:text-base" data-aos="fade-right" data-aos-duration="2000">
                Send Message
              </button>
            </form>
          </div>

      </div>
    </section>

  );
};

export default ContactUs;
