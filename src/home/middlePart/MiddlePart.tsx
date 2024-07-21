import React from "react";
import "./middlepart.css";
import Link from "next/link";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <div className="middlePartDiv bg-gray-800 p-8 text-white">
      <center>
        <h4 className="titleHeading text-3xl mb-4 p-2  font-bold font-poppins">
          Share your made projects easily
        </h4>

        <p className="titleParaText mb-6 text-lg font-poppins">
          The best place for you to share your projects.
        </p>

        <div className="buttonsDiv mb-8">
          <Link href="/scrapbook">
            <input
              type="button"
              value="Scrapbook"
              className="scrapbookButton bg-green-500 text-white py-2 px-4 rounded-lg mx-2 hover:bg-green-600 transition duration-300"
            />
          </Link>
          <input
            type="button"
            value="Know more!"
            className="knowMoreButton bg-blue-500 text-white py-2 px-4 rounded-lg mx-2 hover:bg-blue-600 transition duration-300"
          />
        </div>
      </center>

      {/* features section here
       */}

      <center>
        <br />

        <h3 style={{ fontFamily: "Poppins", color: "white", fontSize: "25px" }}>
          Features
        </h3>
        <br />
        <div className="featuresDiv flex flex-row justify-center items-center ">
          <div className="feature flex flex-col justify-start items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5956/5956494.png"
              className="w-20"
            />
            <p className="featurePara">
              Est esse et reprehenderit amet ea nostrud adipisicing ad non. Ad
              ad aliqua excepteur proident tempor nisi est. Anim dolor cillum
              exercitation in deserunt minim. Nostrud veniam dolor qui qui.
            </p>
          </div>
          <div className="feature flex flex-col justify-start items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5956/5956494.png"
              className="w-20"
            />
            <p className="featurePara">
              Est esse et reprehenderit amet ea nostrud adipisicing ad non. Ad
              ad aliqua excepteur proident tempor nisi est. Anim dolor cillum
              exercitation in deserunt minim. Nostrud veniam dolor qui qui.
            </p>
          </div>
          <div className="feature flex flex-col justify-start items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5956/5956494.png"
              className="w-20"
            />
            <p className="featurePara">
              Est esse et reprehenderit amet ea nostrud adipisicing ad non. Ad
              ad aliqua excepteur proident tempor nisi est. Anim dolor cillum
              exercitation in deserunt minim. Nostrud veniam dolor qui qui.
            </p>
          </div>
        </div>
        <br />
      </center>
    </div>
  );
};

export default MiddlePart;
