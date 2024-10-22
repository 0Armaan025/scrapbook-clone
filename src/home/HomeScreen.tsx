import Navbar from "@/components/navbar/Navbar";
import React from "react";
import MiddlePart from "./middlePart/MiddlePart";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <>
      <Navbar />
      <MiddlePart />
    </>
  );
};

export default HomeScreen;
