import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"HTML5"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"CSS3"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Bootstrap"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"JavaScript"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"React Js"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"MongoDB"} progress={"35%"} width={"35%"} />
        <SkillsSection skill={"Node Js"} progress={"25%"} width={"25%"} />
      </div>

      {/* <Tittle title={"Services"} span={"Services"} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={"Web design"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial Intelligence"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={gamedev}
          title={"Game Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        /> */}
      {/* </div> */}
    </div>
  );
}

export default AboutPage;
