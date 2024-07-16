import React from "react";
import "./middlepart.css";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <div className="middlePartDiv">
      <center>
        <h4
          className="titleHeading text-white  "
          style={{ fontFamily: "Poppins" }}
        >
          Share your made projects easily
        </h4>

        <p className="titleParaText" style={{ fontFamily: "Poppins" }}>
          The best place for you to share your projects.
        </p>

        <div className="buttonsDiv">
          <input type="button" value="Scrapbook" className="scrapbookButton" />
          <input type="button" value="Know more!" className="knowMoreButton" />
        </div>
      </center>
    </div>
  );
};

export default MiddlePart;
