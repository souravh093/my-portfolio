import React from "react";
import Title from "../../../components/Title/Title";
import Container from "../../../components/Container/Container";
import aboutImg from "../../../assets/about.jpg";
const About = () => {
  return (
    <div className="bg-green-50 pb-20">
      <Container>
        <Title title={"about me"} />
        <div className="grid grid-cols-2 items-center gap-10">
          <div>
            <img className="w-full" src={aboutImg} alt="" />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Hi, I am <span className="text-green-500">Sourave Halder</span> </h3>
            <div>
              <ul className="list-disc ml-5 flex flex-col gap-2 text-lg">
                <li className="text-green-500">
                  <div className="flex gap-2">
                    <span className="text-black">First Name:</span>
                    <span className="text-black">: Sourav</span>
                  </div>
                </li>
                <li className="text-green-500">
                  <div className="flex gap-2">
                    <span className="text-black">Last Name</span>
                    <span className="text-black">: Halder</span>
                  </div>
                </li>
                <li className="text-green-500">
                  <div className="flex gap-2 justify-items-start">
                    <span className="text-black">Age</span>
                    <span className="text-black">: 24</span>
                  </div>
                </li>
                <li className="text-green-500">
                  <div className="flex gap-2 justify-items-start">
                    <span className="text-black">Nationality</span>
                    <span className="text-black">:  Bangladeshi</span>
                  </div>
                </li>
                <li className="text-green-500">
                  <div className="flex gap-2 justify-items-start">
                    <span className="text-black">Languages</span>
                    <span className="text-black">: English, Bangla</span>
                  </div>
                </li>
                <li className="text-green-500">
                  <div className="flex gap-2 justify-items-start">
                    <span className="text-black">Address</span>
                    <span className="text-black">: 8200, Barishal, Bangladesh</span>
                  </div>
                </li>
              </ul>
            </div>
            <button className="bg-green-300 py-2 px-5 rounded-md mt-5 transition hover:bg-green-400 ">Download Resume</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
