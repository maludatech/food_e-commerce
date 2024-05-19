"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blog");
      const data = await response.json();
      if (response.ok) {
        setBlogs(data);
      } else {
        console.error("Failed to fetch blogs:", data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="flex flex-col py-20 sm:py-24 gap-2 justify-center p-3">
      <div className="flex sm:flex-row flex-col sm:gap-4 glassmorphism">
        <div className="h-fit w-full sm:w-2/5">
          <Image
            src={"/assets/images/jollof-rice.webp"}
            width={400}
            height={400}
            alt="Picture of Jollof rice"
            className="rounded-md w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-bold text-xl">
            Your Favorite Jollof
          </h1>
          <p>
            This is our new delicacy for this week. Spicy Jollof rice with veggies and plantain at its best. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quaerat neque sint enim velit accusamus in animi! Temporibus in, aperiam optio, animi eligendi hic, voluptatum officiis quibusdam non eos cumque.
          </p>
        </div>
      </div>

      <div className="mt-4">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="flex sm:flex-row flex-col sm:gap-4 glassmorphism mb-4">
              <div className="h-fit w-full sm:w-2/5">
                <Image
                  src={blog.imageUrl}
                  width={400}
                  height={400}
                  alt="Picture here"
                  className="rounded-md w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h1 className="font-bold text-xl">
                  {blog.title}
                </h1>
                <p>
                  {blog.content}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="hidden"></p>
        )}
      </div>
    </section>
  );
}
