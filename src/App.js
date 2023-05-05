import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import DownArrow from "./assets/downArrow";
import DisplayPic from "./components/DisplayPic/DisplayPic";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/Contact";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Content align="left" text={<DownArrow />} background="#260B1A" />
      <Navbar />
      <DisplayPic /> */}
      <Home />
      <Skills />
      <Contact />
    </div>
  );
}
