import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import SwapLogo from '../../assets/logo.png';
import { BookType, CircleUser, HatGlasses, Home, Info, NotebookTabs, Phone } from 'lucide-react';
import { AuthContext } from '../../Provider/AuthContext';




const Navbar = () => {

  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
      });
  }


  const activeClass = 'flex items-center gap-1 px-2 py-1 font-semibold border-b-2 border-orange-500 group';
  const activeTextClass = 'bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent';
  const normalClass = 'flex items-center gap-1 px-2 py-1 font-semibold text-white hover:text-red-500 transition duration-200 group';

  const list = (
    <>
      <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>
        {({ isActive }) => (
          <>
            <Home className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'stroke-orange-500' : 'stroke-white group-hover:stroke-red-500'}`} />
            <span className={`transition-colors duration-200 ${isActive ? activeTextClass : ''}`}>Home</span>
          </>
        )}
      </NavLink>

      {
        user ?
          <>
            <NavLink to="/blog" className={({ isActive }) => isActive ? activeClass : normalClass}>
              {({ isActive }) => (
                <>
                  <NotebookTabs className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'stroke-orange-500' : 'stroke-white group-hover:stroke-red-500'}`} />
                  <span className={`transition-colors duration-200 ${isActive ? activeTextClass : ''}`}>Blog</span>
                </>
              )}
            </NavLink>
            <NavLink to="/myprofile" className={({ isActive }) => isActive ? activeClass : normalClass}>
              {({ isActive }) => (
                <>
                  <CircleUser className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'stroke-orange-500' : 'stroke-white group-hover:stroke-red-500'}`} />
                  <span className={`transition-colors duration-200 ${isActive ? activeTextClass : ''}`}>My Profile</span>
                </>
              )}
            </NavLink>
          </>
          :
          <>
            <NavLink to="/contactUs" className={({ isActive }) => isActive ? activeClass : normalClass}>
              {({ isActive }) => (
                <>
                  <Phone className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'stroke-orange-500' : 'stroke-white group-hover:stroke-red-500'}`} />
                  <span className={`transition-colors duration-200 ${isActive ? activeTextClass : ''}`}>Contact Us</span>
                </>
              )}
            </NavLink>
            <NavLink to="/terms" className={({ isActive }) => isActive ? activeClass : normalClass}>
              {({ isActive }) => (
                <>
                  <BookType className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'stroke-orange-500' : 'stroke-white group-hover:stroke-red-500'}`} />
                  <span className={`transition-colors duration-200 ${isActive ? activeTextClass : ''}`}>Terms</span>
                </>
              )}
            </NavLink>
            <NavLink to="/privacy" className={({ isActive }) => isActive ? activeClass : normalClass}>
              {({ isActive }) => (
                <>
                  <HatGlasses className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'stroke-orange-500' : 'stroke-white group-hover:stroke-red-500'}`} />
                  <span className={`transition-colors duration-200 ${isActive ? activeTextClass : ''}`}>Privacy</span>
                </>
              )}
            </NavLink>
          </>
      }

      <NavLink to="/aboutUs" className={({ isActive }) => isActive ? activeClass : normalClass}>
        {({ isActive }) => (
          <>
            <Info className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'stroke-orange-500' : 'stroke-white group-hover:stroke-red-500'}`} />
            <span className={`transition-colors duration-200 ${isActive ? activeTextClass : ''}`}>About Us</span>
          </>
        )}
      </NavLink>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-gradient-to-r from-black via-[#1a0000] to-[#330000] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
          >
            {list}
          </ul>
        </div>

        <NavLink to="/">
          <div className="flex items-center ">
            <img className="w-[50px]" src={SwapLogo} alt="Web Logo" />
            <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              SKILL SWAP
            </p>
          </div>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-white">{list}</ul>
      </div>

      <div className="navbar-end">
        {user ? <button onClick={handleSignOut} className="btn bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold border-none hover:scale-105 transition-transform duration-300 rounded-lg px-8">Log Out</button> : <NavLink to='/login'><button className="btn bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold border-none hover:scale-105 transition-transform duration-300 rounded-lg px-8">Log In</button></NavLink>}
      </div>
    </div>

  );
};

export default Navbar;
