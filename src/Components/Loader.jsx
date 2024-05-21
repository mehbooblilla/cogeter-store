import React from "react";
import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="black"
        ariaLabel="loading"
        wrapperStyle={{}}
  wrapperClass=""
      />
    </div>
  );
};

export default Loader;
