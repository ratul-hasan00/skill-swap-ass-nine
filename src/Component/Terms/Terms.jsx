import React from "react";
import { Link } from "react-router";

const Terms = () => {
  return (
    <section className="bg-gradient-to-b from-[#f6e0c7] via-[#e8c7a4] to-[#d3a473] py-12 sm:py-16 px-4 xs:px-6 sm:px-10 lg:px-20">

{/* terms black bg  */}

      <div className="max-w-5xl mx-auto bg-[#0d0d0d]/80 rounded-3xl shadow-2xl p-6 xs:p-8 sm:p-12" data-aos="zoom-in" data-aos-duration="1000">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent" data-aos="fade-right" data-aos-duration="2000">
          Terms & Privacy
        </h1>

        <p className="text-white text-xs xs:text-sm sm:text-base mb-4 leading-relaxed" data-aos="fade-left" data-aos-duration="2000">
          Welcome to SkillSwap! By using our platform, you agree to the following terms and privacy policies. Please read them carefully to understand your rights and responsibilities.
        </p>

        <div className="space-y-4 xs:space-y-5 sm:space-y-6">
          <div>
            <h2 className="text-xl xs:text-2xl font-semibold mb-2 text-orange-400" data-aos="fade-right" data-aos-duration="2000">
              Terms of Service
            </h2>
            <ul className="list-disc list-inside text-white text-xs xs:text-sm sm:text-base leading-relaxed">
              <li data-aos="fade-left" data-aos-duration="2000">Users must provide accurate information when registering.</li>
              <li data-aos="fade-left" data-aos-duration="2000">All skills offered must be genuine and safe for learners.</li>
              <li data-aos="fade-left" data-aos-duration="2000">Respect other users; harassment or inappropriate behavior is prohibited.</li>
              <li data-aos="fade-left" data-aos-duration="2000">Bookings are final; cancellations must follow provider guidelines.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl xs:text-2xl font-semibold mb-2 text-orange-400" data-aos="fade-right" data-aos-duration="2000">
              Privacy Policy
            </h2>
            <ul className="list-disc list-inside text-white text-xs xs:text-sm sm:text-base leading-relaxed">
              <li data-aos="fade-left" data-aos-duration="2000">We collect minimal data to provide services (name, email, profile photo).</li>
              <li data-aos="fade-left" data-aos-duration="2000">Data is securely stored in Firebase and not shared with third parties.</li>
              <li data-aos="fade-left" data-aos-duration="2000">Users can update their profile information anytime.</li>
              <li data-aos="fade-left" data-aos-duration="2000">Cookies may be used to improve your experience on the platform.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl xs:text-2xl font-semibold mb-2 text-orange-400" data-aos="fade-right" data-aos-duration="2000">
              Contact Us
            </h2>
            <p className="text-white text-xs xs:text-sm sm:text-base leading-relaxed" data-aos="fade-left" data-aos-duration="2000">
              If you have any questions about our terms or privacy, you can reach us at <span className="font-semibold text-orange-500">hayena@skillswap.com</span> or <span className="font-semibold text-orange-500"><Link to='/contactUs'>Contact Us</Link></span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
