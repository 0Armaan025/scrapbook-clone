import React from "react";

type Props = {};

const ScrapbookComponent = (props: Props) => {
  return (
    <div className="scrapbookComponent border-2 border-white w-72 h-42 p-4 flex flex-col justify-center items-start">
      <img
        src="https://plus.unsplash.com/premium_photo-1721143362948-7929f10d5e4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        alt="banner image"
        className="w-full "
      />
      <p>Some freaking text right here</p>
      <input type="button" className="" value="Check it out!" />
    </div>
  );
};

export default ScrapbookComponent;
