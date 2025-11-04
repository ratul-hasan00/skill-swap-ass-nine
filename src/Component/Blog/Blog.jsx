import React from "react";

const Blog = () => {

    const blogs = [
        {
            id: 1,
            title: "How Skill Exchange is Changing the Way We Learn",
            author: "Ava Thompson",
            date: "October 25, 2025",
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            description:
                "Discover how local skill-sharing platforms are transforming education by connecting learners and mentors in meaningful ways.",
        },
        {
            id: 2,
            title: "Top 5 Soft Skills to Boost Your Career in 2025",
            author: "Liam Carter",
            date: "November 3, 2025",
            image:
                "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
            description:
                "From communication to adaptability, learn the essential skills that will help you stand out in today’s job market.",
        },
        {
            id: 3,
            title: "Why Teaching Others Improves Your Own Skills",
            author: "Sophia Brown",
            date: "September 18, 2025",
            image:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
            description:
                "Learn how sharing your knowledge not only helps others but also deepens your own understanding and mastery.",
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#f6e0c7] via-[#e8c7a4] to-[#d3a473] py-12 px-6 sm:px-10">
            <div className="max-w-7xl mx-auto">

                <h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                >
                    Our Latest Blogs
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-[#1a1a1a]/80 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col cursor-pointer"
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-56 object-cover rounded-t-3xl"
                            />

                            <div className="p-6 flex flex-col justify-between flex-grow">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                                        {blog.title}
                                    </h2>
                                    <p className="text-gray-300 text-sm mb-3">
                                        By <span className="text-orange-400">{blog.author}</span> •{" "}
                                        {blog.date}
                                    </p>
                                    <p className="text-gray-400 mb-4">{blog.description}</p>
                                </div>

                                <button className="mt-auto cursor-pointer bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-2 rounded-full hover:scale-105 transition-transform duration-300">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
