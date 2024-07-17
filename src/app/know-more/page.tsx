import React from "react";
import "./knowmorepage.css";
import Navbar from "@/components/navbar/Navbar";

const KnowMorePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white p-10">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl font-extrabold mb-6 text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Know More About Our Scrapbook Clone
          </h1>
          <p className="text-xl mb-4">
            Welcome to our Scrapbook Clone! This platform allows you to upload
            and showcase your projects in a creative and engaging way. Here, you
            can share your journey, document your achievements, and inspire
            others with your work. Our user-friendly interface and customizable
            options ensure that your scrapbook reflects your unique style and
            personality.
          </p>
          <div className="flex flex-wrap justify-around mt-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black m-4 p-6 hover:scale-105 transition-all cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">Upload Your Projects</h2>
              <p className="text-base mb-4">
                Easily upload your projects, including descriptions, images, and
                any other relevant information. Showcase your work and let
                others see what you've been working on.
              </p>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black m-4 p-6 hover:scale-105 transition-all cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">
                Create Stunning Visuals (Coming soon)
              </h2>
              <p className="text-base mb-4">
                Customize your scrapbook with various visual elements. Add
                backgrounds, stickers, and other embellishments to make your
                projects stand out.
              </p>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black m-4 p-6 hover:scale-105 transition-all cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">
                Share with the Community
              </h2>
              <p className="text-base mb-4">
                Connect with like-minded individuals by sharing your scrapbook
                with the community. Explore projects from other users and get
                inspired.
              </p>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black m-4 p-6 hover:scale-105 transition-all cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">
                Keep Your Memories Alive
              </h2>
              <p className="text-base mb-4">
                Preserve your memories by keeping a digital scrapbook. Look back
                on your progress and cherish the moments that made your projects
                special.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowMorePage;
