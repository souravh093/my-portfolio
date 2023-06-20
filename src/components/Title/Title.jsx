import React from "react";

const Title = ({ title }) => {
  return (
    <div className="text-center relative my-20 text-4xl uppercase font-bold">
      <h2 className="z-999">{title}</h2>
      <hr className="w-36 bg-green-500 h-1 mx-auto mt-2  z-10" />
      <h2 className="text-8xl absolute text-gray-300 w-full -bottom-14 z-0 opacity-50">{title}</h2>
    </div>
  );
};

export default Title;
