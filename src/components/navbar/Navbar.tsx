import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" text-white p-4 flex justify-between items-center">
      <div className="flex items-center" style={{ fontFamily: "Poppins" }}>
        <Link href="/">
          <span className="text-xl font-bold">Scrapbook</span>
        </Link>
      </div>
      <div className="flex-grow text-center"></div>
      <div>
        <button
          className="bg-transparent hover:bg-white text-white hover:text-black border-[.5px] border-white transition-all py-2 px-4 rounded-3xl"
          style={{ fontFamily: "Poppins" }}
        >
          Scrapbook
        </button>
      </div>
    </div>
  );
};

export default Navbar;
