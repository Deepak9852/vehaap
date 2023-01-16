import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <hr />
        <p className="footText">&copy; Deepak Kumar</p>
        <div className="footDiv">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footDiv">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footDiv noborder">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <hr />
        <div>
          <Link to="/">
            <img
              src="https://i.ibb.co/dtzG625/facebook.png"
              alt="fblogo"
              className="socialLogo"
            />
          </Link>
          <Link to="/">
            <img
              src="https://i.ibb.co/GHKVNYt/insta.png"
              alt="fblogo"
              className="socialLogo"
            />
          </Link>
          <Link to="/">
            <img
              src="https://i.ibb.co/w07K2Vn/youtube1.png"
              alt="fblogo"
              className="socialLogo"
            />
          </Link>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
