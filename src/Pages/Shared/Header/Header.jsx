import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";

const Header = () => {
  const navigation = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="resume">Resume</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="works">Works</Link>
      </li>
      <li>
        <Link to="blog">Blog</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </>
  );
  return (
    <Container>
      <div className="uppercase flex justify-between items-center py-5">
        <Link to="/">
          <h2 className="text-4xl font-bold text-green-300">HalderDev.</h2>
        </Link>
        <div className="flex list-none gap-8">{navigation}</div>
        <button className="bg-green-300 py-3 px-8 text-lg font-semibold hover:bg-green-400 rounded-t-md">Hire me</button>
      </div>
    </Container>
  );
};

export default Header;
