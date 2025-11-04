import React, { useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";
import { useLocation, useNavigate } from "react-router";

const ForgotPass = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const prefilledEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefilledEmail);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(`Password reset email sent! Please check ${email}.`);
      setTimeout(() => {
        window.open("https://mail.google.com/", "_blank");
        navigate("/login");
      }, 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f6e0c7] via-[#e8c7a4] to-[#d3a473] p-6">
      <form
        onSubmit={handleReset}
        className="bg-[#0d0d0d]/80 p-8 rounded-3xl shadow-2xl w-full max-w-md text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-400">
          Reset Password
        </h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}
        {message && <p className="text-green-500 mb-2">{message}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-[#1a1a1a]/80 border border-orange-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPass;
