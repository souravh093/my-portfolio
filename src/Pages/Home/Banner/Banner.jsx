import React, { useEffect, useRef } from "react";
import image from "../../../assets/bg.png";
import {
  FaArrowDown,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Typed from "typed.js";
import Container from "../../../components/Container/Container";

const Banner = () => {
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["React Developer", "Frontend Web Developer"],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Container>
      <div className="flex relative gap-3 h-[calc(100vh-92px)] items-center justify-center flex-col ">
        <img
          className="border-8 border-green-300 w-40 h-40 object-cover rounded-full bg-red-50"
          src={image}
          alt=""
        />
        <h2 className="text-5xl font-bold">
          Hi, I am <span className="text-green-300" ref={element}></span>
        </h2>
        <p className="max-w-2xl text-center">
          With every line of code, I, a passionate React frontend web developer,
          bring captivating designs to life and create seamless user
          experiences.
        </p>
        <div className="flex gap-5">
          <div className="border border-green-500 transition p-3 rounded-sm bg-green-50 hover:bg-green-500 hover:text-gray-100">
            <FaFacebookF />
          </div>
          <div className="border border-green-500 transition p-3 rounded-sm bg-green-50 hover:bg-green-500 hover:text-gray-100">
            <FaTwitter />
          </div>
          <div className="border border-green-500 transition p-3 rounded-sm bg-green-50 hover:bg-green-500 hover:text-gray-100">
            <FaGithub />
          </div>
          <div className="border border-green-500 transition p-3 rounded-sm bg-green-50 hover:bg-green-500 hover:text-gray-100">
            <FaLinkedinIn />
          </div>
        </div>

        <div className="absolute bottom-4 flex items-center gap-3 uppercase font-semibold">
          <FaArrowDown />
          <span>scroll down</span>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
