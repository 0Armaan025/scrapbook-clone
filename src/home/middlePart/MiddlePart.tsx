import React from "react";
import "./middlepart.css";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <div className="middlePartDiv bg-gray-800 p-8 text-white">
      <center>
        <h4 className="titleHeading text-3xl mb-4 font-bold font-poppins">
          Share your made projects easily
        </h4>

        <p className="titleParaText mb-6 text-lg font-poppins">
          The best place for you to share your projects.
        </p>

        <div className="buttonsDiv mb-8">
          <input
            type="button"
            value="Scrapbook"
            className="scrapbookButton bg-green-500 text-white py-2 px-4 rounded-lg mx-2 hover:bg-green-600 transition duration-300"
          />
          <input
            type="button"
            value="Know more!"
            className="knowMoreButton bg-blue-500 text-white py-2 px-4 rounded-lg mx-2 hover:bg-blue-600 transition duration-300"
          />
        </div>
      </center>

      {/* Features Section */}
      <div className="featuresSection my-12">
        <h5 className="sectionHeading text-2xl mb-6 font-bold text-center font-poppins">
          Why Choose Us?
        </h5>
        <div className="featuresList flex justify-around flex-wrap gap-6">
          <div className="featureItem bg-gray-700 p-6 rounded-lg text-center w-full sm:w-1/3 lg:w-1/4">
            <img
              src="https://via.placeholder.com/100"
              alt="Feature 1"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h6 className="text-xl font-semibold mb-2 font-poppins">
              Easy to Use
            </h6>
            <p className="font-poppins">
              Our platform is user-friendly and easy to navigate.
            </p>
          </div>
          <div className="featureItem bg-gray-700 p-6 rounded-lg text-center w-full sm:w-1/3 lg:w-1/4">
            <img
              src="https://via.placeholder.com/100"
              alt="Feature 2"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h6 className="text-xl font-semibold mb-2 font-poppins">Secure</h6>
            <p className="font-poppins">
              Your projects are safe and secure with us.
            </p>
          </div>
          <div className="featureItem bg-gray-700 p-6 rounded-lg text-center w-full sm:w-1/3 lg:w-1/4">
            <img
              src="https://via.placeholder.com/100"
              alt="Feature 3"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h6 className="text-xl font-semibold mb-2 font-poppins">
              Community Support
            </h6>
            <p className="font-poppins">
              Join a community of like-minded individuals.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="ctaSection my-12 text-center">
        <h5 className="sectionHeading text-2xl mb-4 font-bold font-poppins">
          Get Started Today
        </h5>
        <p className="mb-6 text-lg font-poppins">
          Join us and start sharing your projects with the world.
        </p>
        <input
          type="button"
          value="Sign Up"
          className="signUpButton bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
        />
      </div>
    </div>
  );
};

export default MiddlePart;
