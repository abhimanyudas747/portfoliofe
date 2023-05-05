import Content from "../../components/Content/Content";
import "./style.css";

const Skills = () => {
  const skills = [
    "React",
    "Javascript",
    "Typescript",
    "CSS",
    "SASS",
    "Webpack",
    "Docker",
  ];
  const expOverview =
    "As a frontend developer with 2 years of experience, I've built multiple user interfaces for various companies and startups. I have a strong background in creating responsive web pages from designs and optimizing them for seamless user experience. Additionally, I have worked on client-facing applications and implemented significant features, adding value to the overall product. My skills in React, JavaScript, and CSS, coupled with my ability to work effectively in a team, have helped me deliver high-quality projects that meet and exceed client expectations.";
  return (
    <div className="skills-outer-div">
      <h1>Skills</h1>
      <div className="skill-holder">
        {skills.map((skill) => (
          <Content text={skill} background="#04385D" />
        ))}
      </div>
      <h1>Over the years...</h1>
      <Content text={expOverview} background="#04385D" />
    </div>
  );
};

export default Skills;
