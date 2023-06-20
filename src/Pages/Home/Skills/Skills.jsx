import React from "react";
import Container from "../../../components/Container/Container";
import Title from "../../../components/Title/Title";
import SkillBar from "./SkillBar";

const Skills = () => {
  return (
    <div>
      <Container>
        <Title title={"skills"} />
        <div>
          <div>
            <div>
                
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="container mx-auto">
            <div className="my-8">
              <div className="mt-4 grid grid-cols-2 gap-5">
                <SkillBar label="HTML" progress={95} />
                <SkillBar label="JavaScript" progress={70} />
                <SkillBar label="CSS 3" progress={65} />
                <SkillBar label="Bootstrap" progress={90} />
                <SkillBar label="TailwindCss" progress={90} />
                <SkillBar label="React" progress={80} />
                <SkillBar label="Firebase" progress={70} />
                <SkillBar label="MongoDB" progress={50} />
                <SkillBar label="NextJs" progress={50} />
                <SkillBar label="ExpressJs" progress={40} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
