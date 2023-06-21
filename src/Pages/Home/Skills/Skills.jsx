import React from "react";
import Container from "../../../components/Container/Container";
import Title from "../../../components/Title/Title";
import { FaCode } from "react-icons/fa";
import { AiOutlineCode, AiOutlineCodepen } from "react-icons/ai";

const Skills = () => {
  return (
    <div>
      <Container>
        <Title title={"skills"} />
        <div className="grid md:grid-cols-3 shadow-md">
          <div className="flex flex-col gap-5 items-center overflow-hidden border py-16 px-10">
            <div className="bg-green-300 rounded-full p-5">
              <FaCode className="text-5xl" />
            </div>
            <h2 className="text-3xl font-bold">Frontend Development</h2>
            <p className="text-center">
              Passionate frontend developer who thrives on crafting custom
              solutions from scratch. Enjoys transforming ideas into fully
              functional web applications, pushing the boundaries of creativity
              in the browser. Proficient in React.js, JavaScript (ES6+), and
              adept at translating concepts into engaging user interfaces.
            </p>
            <div className="text-center">
              <h2 className="text-green-500 text-lg font-bold">Skills:</h2>
              <p>HTML, CSS, Bootstrap, TailwindCss, JavaScript, Git, React</p>
            </div>
            <div className="text-center">
              <h2 className="text-green-500 text-lg font-bold">Dev Tools:</h2>
              <div>
                <p>GitHub</p>
                <p>Netlify</p>
                <p>Surge</p>
                <p>ESLint</p>
                <p>Prettier</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center overflow-hidden border py-16 px-10">
            <div className="bg-green-300 rounded-full p-5">
              <AiOutlineCode className="text-5xl" />
            </div>
            <h2 className="text-3xl font-bold">Backend Development</h2>
            <p className="text-center">
              Resourceful backend developer skilled in architecting robust
              server-side applications. Enjoys building custom backend solutions
              that power seamless user experiences. Proficient in Node.js,
              creating RESTful APIs, and integrating with external services to
              bring ideas to life.
            </p>
            <div className="text-center">
              <h2 className="text-green-500 text-lg font-bold">Skills:</h2>
              <p>Node.js, Express.js, MongoDB, Firebase</p>
            </div>
            <div className="text-center">
              <h2 className="text-green-500 text-lg font-bold">Dev Tools:</h2>
              <div>
                <p>Socket.io</p>
                <p>Nodemon</p>
                <p>Axios</p>
                <p>Morgan</p>
                <p>JSON Web Tokens</p>
                <p>Vercel</p>
                <p>Postman</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center overflow-hidden border py-16 px-10">
            <div className="bg-green-300 rounded-full p-5">
              <AiOutlineCodepen className="text-5xl" />
            </div>
            <h2 className="text-3xl font-bold">Frontend Development</h2>
            <p className="text-center">
              Proficient in version control systems like Git and collaboration
              platforms like GitHub. Experienced in debugging frontend issues,
              and ensuring high-quality code. Skilled in responsive design,
              creating web applications that seamlessly adapt to various devices
              and screen sizes.
            </p>
            <div className="text-center">
              <h2 className="text-green-500 text-lg font-bold">Skills:</h2>
              <p>Version Control, Debugging, Responsive Design, Adobe illustrator, Chrome Dev Tools</p>
            </div>
            <div className="text-center">
              <h2 className="text-green-500 text-lg font-bold">Dev Tools:</h2>
              <div>
                <p>ChatGPT</p>
                <p>Visual Studio Code</p>
                <p>Notion</p>
                <p>Canva</p>
                <p>Camtasia</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
