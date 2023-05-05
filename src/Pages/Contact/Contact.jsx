import InstagramLogo from "../../assets/linkedin";
import LinkedinLogo from "../../assets/instagram";
import BackToTop from "../../assets/backToTop";
import Content from "../../components/Content/Content";
import "./style.css";

const Contact = () => {
  const footerText =
    "Copyright © 2023 Abhimanyu Das. All rights reserved. Copyright covers all content on this website, including images and design.";
  return (
    <div className="contact-outer-div">
      <h3>Send me a Message</h3>
      <div className="contact-inner-div">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="textarea" placeholder="Message" />
      </div>
      <div className="btn">
        <button>Send</button>
      </div>
      <span id="btt">
        <BackToTop />
      </span>
      <div className="footer">
        <div className="socials">
          <InstagramLogo />
          <LinkedinLogo />
        </div>
        <Content text={footerText} />
      </div>
    </div>
  );
};

export default Contact;
