"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import ScrapbookComponent from "@/components/scrapbook-component/ScrapBookComponent";
import Link from "next/link";
import "./scrapbookpage.css";

type Project = {
  name: string;
  projectDetails: string;
  imageUrl: string;
  projectLink: string;
};

const ScrapbookPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "data"));
        const projectsData: Project[] = querySnapshot.docs.map((doc) => ({
          name: doc.data().name,
          projectDetails: doc.data().projectDetails,
          imageUrl: doc.data().imageUrl,
          projectLink: doc.data().projectLink,
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />
      <div className="scrapbookPage flex flex-col justify-center items-center text-center">
        <h4
          className="text-4xl text-white font-bold text-center mt-4 underline underline-offset-2 decoration-wavy decoration-blue-800"
          style={{ fontFamily: "Poppins" }}
        >
          Public Scrapbook
        </h4>
        <br />
        <div className="uploadBtnDiv flex flex-row justify-end items-end">
          <Link href="/upload-project">
            <input
              type="button"
              value="Upload project!"
              className="px-4 py-2 border-2 border-white rounded-md bg-transparent text-white hover:bg-white hover:text-black transition-all cursor-pointer"
              style={{ fontFamily: "poppins" }}
            />
          </Link>
        </div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
          {projects.map((project, index) => (
            <ScrapbookComponent
              key={index}
              imageUrl={project.imageUrl}
              text={`${project.projectDetails.substring(0, 20)}...`}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrapbookPage;
