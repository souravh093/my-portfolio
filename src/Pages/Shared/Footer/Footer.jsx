import React from "react";
import Container from "../../../components/Container/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow py-10">
      <Container>
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 text-green-300"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              HALDERDEV.
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            halderdev
          </Link>
          . All Rights Reserved.
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
