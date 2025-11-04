import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { auth } from "../Firebase/firebase.config";

const EditProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            // Update displayName and photoURL only
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL,
            });

            setSuccess("Profile updated successfully!");
            navigate("/myprofile"); // redirect to profile page
        } catch (err) {
            setError(err.message);
            
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f6e0c7] via-[#e8c7a4] to-[#d3a473] p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-[#0d0d0d]/80 p-8 rounded-3xl shadow-2xl w-full max-w-md text-white"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-orange-400">
                    Edit Profile
                </h2>

                {error && <p className="text-red-500 mb-2">{error}</p>}
                {success && <p className="text-green-500 mb-2">{success}</p>}

                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 mb-4 rounded-lg bg-[#1a1a1a]/80 border border-orange-400"
                    required
                />

                <input
                    type="text"
                    placeholder="Photo URL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="w-full p-3 mb-6 rounded-lg bg-[#1a1a1a]/80 border border-orange-400"
                />

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
