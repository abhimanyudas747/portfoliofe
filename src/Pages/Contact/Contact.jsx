import InstagramLogo from "../../assets/linkedin";
import LinkedinLogo from "../../assets/instagram";
import BackToTop from "../../assets/backToTop";
import Content from "../../components/Content/Content";
import "./style.css";

const Contact = () => {
  const footerText =
    "Lorem ipsum dolor sit amet consectetur. Purus blandit congue ultrices porttitor lacus rhoncus. Rhoncus vulputate sed semper netus.";
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
      <BackToTop id="btt" />
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
