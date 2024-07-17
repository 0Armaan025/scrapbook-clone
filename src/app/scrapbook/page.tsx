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
        <br />
        <div className="uploadBtnDiv flex flex-row justify-end items-end">
          <input
            type="button"
            value="Upload project!"
            className="px-4 py-2 border-2 border-white rounded-md bg-transparent text-white hover:bg-white hover:text-black transition-all cursor-pointer"
            style={{ fontFamily: "poppins" }}
          />
        </div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
          <ScrapbookComponent
            imageUrl="https://plus.unsplash.com/premium_photo-1721143362948-7929f10d5e4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            text="some text right here"
          />
          <ScrapbookComponent
            imageUrl="https://plus.unsplash.com/premium_photo-1721143362948-7929f10d5e4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            text="some text right here"
          />
          <ScrapbookComponent
            imageUrl="https://plus.unsplash.com/premium_photo-1721143362948-7929f10d5e4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            text="some text right here"
          />
          <ScrapbookComponent
            imageUrl="https://plus.unsplash.com/premium_photo-1721143362948-7929f10d5e4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            text="some text right here"
          />

          {/* Add more ScrapbookComponent items as needed */}
        </div>
      </div>
    </>
  );
};

export default ScrapbookPage;
