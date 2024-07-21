"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import { auth, db, storage } from "../../firebase/clientApp";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

type Props = {};

const UploadProject = (props: Props) => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [name, setName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [projectLink, setProjectLink] = useState("");

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setImagePreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e: any) => {
    setProjectLink(e.target.value);
  };

  const handleProjectDetailsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProjectDetails(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !projectDetails || !image) {
      alert("Fill all fields!");
      return;
    }

    try {
      const storageRef = ref(storage, `uploads/${image.name}`);
      const snapshot = await uploadBytes(storageRef, image);
      const fileURL = await getDownloadURL(snapshot.ref);

      const userData = {
        name: name,
        projectDetails: projectDetails,
        imageUrl: fileURL,
        projectLink: projectLink,
      };

      await setDoc(doc(db, "data", name), userData);
      alert("User data saved successfully!");
      window.location.href = "/";
    } catch (error: any) {
      console.error("Error saving user data: ", error);
      alert("Error saving user data: " + error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center">
        <h3
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="text-white text-3xl text-semibold mb-4"
        >
          Upload your project!
        </h3>
        <div className="uploadProjectDiv flex flex-col w-[32%] rounded-md mt-2 h-[30rem] mb-4 justify-start items-start bg-[#216f8a]">
          <p className="mt-2 text-white text-xl ml-2">
            Please fill the following details...
          </p>
          <div className="imageDiv w-[95%] h-52 mx-2 mb-2 mt-2 rounded-md flex flex-col justify-center items-center bg-transparent border-white border-dashed border-2">
            <img
              src={
                imagePreview
                  ? imagePreview
                  : "https://cdn-icons-png.flaticon.com/128/3772/3772243.png"
              }
              alt="upload image"
              className="w-[60%] mt-2 h-24 cursor-pointer"
            />
            <input type="file" className="mt-4" onChange={handleChange} />
            <br />
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleNameChange}
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="mx-2 w-[95%] px-2 py-1 rounded-sm outline-none"
          />
          <input
            type="text"
            placeholder="Enter your project link"
            onChange={handleLinkChange}
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="mx-2 w-[95%] px-2 py-1 rounded-sm outline-none mt-2"
          />
          <textarea
            className="mx-2 w-[95%] px-2 h-40 py-1 rounded-sm outline-none mt-2"
            onChange={handleProjectDetailsChange}
            placeholder="Your Project details."
          />

          <input
            type="button"
            value="Upload!"
            onClick={handleSubmit}
            className="px-4 bg-transparent border-white border-2 mt-2 py-1 w-[95%] text-white rounded-sm cursor-pointer hover:bg-white hover:text-black transition-all mx-2"
            style={{ fontFamily: "Poppins" }}
          />

          <br />
        </div>
      </div>
    </>
  );
};

export default UploadProject;
