import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./scrapbookpage.css";
import ScrapbookComponent from "@/components/scrapbook-component/ScrapBookComponent";

type Props = {};

const ScrapbookPage = (props: Props) => {
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
        <br/>

        <ScrapbookComponent/>
      </div>
    </>
  );
};

export default ScrapbookPage;
