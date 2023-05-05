import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DisplayPic from "../../components/DisplayPic/DisplayPic";
import Content from "../../components/Content/Content";
import DownArrow from "../../assets/downArrow";
import "./style.css";

const Home = () => {
  return (
    <div className="home-outer-div">
      <Navbar className="navbar-home" />
      <DisplayPic />
      <h2>Abhimanyu Das</h2>
      <p className="subtitle">Frontend Developer</p>
      <div className="content-div">
        <Content
          height="80px"
          width="300px"
          text={
            "Lorem ipsum dolor sit amet consectetur. In posuere diam at risus odio faucibus. Pellentesque urna maecenas diam ut ornare senectus vel dignissim."
          }
        />
      </div>
      <DownArrow />
    </div>
  );
};

export default Home;
