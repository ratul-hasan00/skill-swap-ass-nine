import React from 'react';
import { NavLink } from 'react-router';

const Allcourse = ({ courses }) => {


    return (
        <div className="bg-[#1a1a1a]/80 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col" data-aos="zoom-in" data-aos-duration="2000" >

            <img
                src={courses.image}
                alt={courses.skillName}
                className="w-full h-40 sm:h-48 md:h-56 object-cover" />

            <div className="p-4 flex flex-col flex-1 justify-between">

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{courses.skillName}</h3>

                <p className="text-yellow-400 mb-2">
                    {'⭐'.repeat(courses.rating)} <span className="text-gray-300 ml-2">({courses.rating})</span>
                </p>

                <p className="text-white font-semibold mb-4">${courses.price}</p>


                <NavLink to={`/skilldetails/${courses.skillId}`} className="mt-auto w-full">
                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-2 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                        View Details
                    </button>
                </NavLink>


            </div>
        </div>
    );
};

export default Allcourse;
