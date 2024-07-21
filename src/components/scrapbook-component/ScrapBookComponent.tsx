import React from "react";

type Props = {
  imageUrl: string;
  text: string;
  projectLink: string;
};

const ScrapbookComponent = (props: Props) => {
  return (
    <div className="scrapbookComponent transition-all hover:rotate-2 cursor-pointer hover:scale-105 border-2 m-4 bg-[#1d6d8a] rounded-md border-white w-72 h-42 p-2 flex flex-col justify-center items-start">
      <img
        src={props.imageUrl}
        alt="banner image "
        className="w-full h-52 rounded-md"
      />
      <p
        className="text-center mt-2 text-white"
        style={{ fontFamily: "Poppins" }}
      >
        {props.text}
      </p>
      <a href={props.projectLink} target="_blank">
        <input
          type="button"
          className="w-full text-center bg-[#0f323e] px-4 py-2 border-2 border-white mt-2 rounded-md hover:bg-white hover:text-black transition-all cursor-pointer hover:border-black hover:border-2 text-white "
          value="Check it out!"
        />
      </a>
    </div>
  );
};

export default ScrapbookComponent;
