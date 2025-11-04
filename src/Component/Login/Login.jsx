import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-hot-toast";


const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // <-- new state
  const { signInUser,signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signInUser(email, password)
      .then(() => {
        form.reset();
        toast.success("Successfully logged in!");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.code);

        switch (error.code) {
          case "auth/invalid-email":
            setError("Invalid email address format.");
            break;
          case "auth/user-not-found":
            setError("No account found with this email.");
            break;
          case "auth/wrong-password":
            setError("Incorrect password. Please try again.");
            break;
          case "auth/too-many-requests":
            setError(
              "Too many failed attempts. Please try again later or reset your password."
            );
            break;
          default:
            setError("Login failed. Please check your credentials.");
            break;
        }
      });
  };

  const handleGoogleLogin = () => {
  signInWithGoogle()
    .then(() => {
      toast.success("Logged in with Google!");
      navigate(location.state ? location.state : "/");
    })
    .catch(() => {
      toast.error("Google login failed!");
    });
};


  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-[#f6e0c7] via-[#e8c7a4] to-[#d3a473] px-6 sm:px-10 py-12 relative">
      <Link
        to="/registration"
        className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Register
      </Link>

      <div
        className="w-full md:w-1/2 bg-[#0d0d0d]/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-10 max-w-md mx-auto order-1 md:order-none"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Login Here !!
        </h2>

        <form onSubmit={handleLogIn} className="space-y-5">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-transparent focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-transparent focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition duration-200"
                required
              />
              <span
                className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer hover:text-orange-400"
                onClick={() => setShowPassword(!showPassword)} 
              >
                {showPassword ? <EyeOff></EyeOff> : <Eye></Eye>}
              </span>
            </div>

            <div className="text-right mt-2 flex justify-between items-center">
              {error && <p className="text-red-500 text-xs">{error}</p>}
              <Link
                to='/forgetpass'
                className="text-sm text-orange-400 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="btn border-none w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>

          <p className="text-center text-white/70 text-sm">
            Don't have an account?
            <Link
              to="/registration"
              className="text-orange-400 font-semibold hover:underline"
            >
              {" "}
              Register here
            </Link>
          </p>

          <div className="flex items-center justify-center my-4">
            <div className="h-px w-1/3 bg-white/30"></div>
            <span className="text-white/60 text-sm px-2">or</span>
            <div className="h-px w-1/3 bg-white/30"></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full py-3 rounded-xl bg-white text-black font-semibold shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-300 border border-gray-200 gap-2"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="inline-block"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Log In with Google
          </button>

        </form>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left md:pl-12">
        <h1
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Welcome Back to SkillSwap
        </h1>
        <p
          className="text-black text-base sm:text-lg font-semibold max-w-md mx-auto md:mx-0"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Log in to continue your journey of learning, sharing, and growing with
          your local community. Discover new talents or share your own with
          others today!
        </p>
      </div>
    </section>
  );
};

export default Login;
