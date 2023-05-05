import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DisplayPic from "../../components/DisplayPic/DisplayPic";
import Content from "../../components/Content/Content";
import DownArrow from "../../assets/downArrow";
import "./style.css";

const Home = () => {
  const profileOverview =
    "Hey there! I'm a creative frontend developer who loves crafting beautiful user interfaces with React, CSS, and JavaScript. With 2 years of experience under my belt, I enjoy bringing designs to life and making websites come alive!";
  return (
    <div className="home-outer-div">
      <Navbar className="navbar-home" />
      <DisplayPic />
      <h2>Abhimanyu Das</h2>
      <p className="subtitle">Frontend Developer</p>
      <div className="content-div">
        <Content height="80px" width="300px" text={profileOverview} />
      </div>
      <DownArrow />
    </div>
  );
};

export default Home;
