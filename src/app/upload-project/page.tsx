import Navbar from "@/components/navbar/Navbar";
import React from "react";

type Props = {};

const UploadProject = (props: Props) => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center">
        <h3
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="text-white text-3xl text-semibold mb-4 "
        >
          Upload your project!
        </h3>
        <div className="uploadProjectDiv flex flex-col w-[32%] rounded-md mt-2  h-[25rem]  justify-start items-start bg-[#216f8a]">
          <p className="mt-2 text-white text-xl ml-2">
            Please fill the following details...
          </p>

          <div className="imageDiv w-[95%] h-40 mx-2 mb-2 mt-2 rounded-md flex flex-col justify-center items-center bg-transparent border-white border-dashed border-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3772/3772243.png"
              alt="upload image"
              className="w-12 h-12 cursor-pointer"
            />
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="mx-2 w-[95%] px-2 py-1 rounded-sm outline-none "
          />
          <textarea
            className="mx-2 w-[95%] px-2 h-40 py-1 rounded-sm outline-none mt-2"
            placeholder="Your Project details."
          />

          <input
            type="button"
            value="Upload!"
            className="px-4 bg-transparent border-white border-2 mt-2  py-1 w-[95%] text-white rounded-sm cursor-pointer hover:bg-white hover:text-black transition-all  mx-2"
            style={{ fontFamily: "Poppins" }}
          />

          <br />
        </div>
      </div>
    </>
  );
};

export default UploadProject;
