import React, { useEffect } from "react";
import FooterHandImg from "../../assets/FixedHand.png";
import { ReactComponent as Email } from "../../assets/SVGSocialMeida/email.svg";
import "./footer.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { withRouter } from "react-router-dom";

import SocialIcon from "./SocialIcon";
import { data } from "../util/FooterData/FooterData";
const Footer = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer
      className={
        props.history.location.pathname === "/" ||
        props.history.location.pathname === "/designer"
          ? "footerYellow"
          : props.history.location.pathname === "/about"
          ? "footerBlue"
          : "footerRed"
      }
    >
      <div className="footer__ImgContainer">
        <img
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="500"
          src={FooterHandImg}
          alt="FooterHandImg"
        />
      </div>
      <div className="socialBar">
        <div className="emailContainer">
          <a href="mailto:deedirozen@gmail.com">
            deedirozen@gmail.com
          </a>
        </div>
        <div className="socialIcons">
          {data.map((d) => (
            <SocialIcon
              key={d.href}
              SVGComponent={d.SVGComponent}
              href={d.href}
              height={d.height}
              width={d.width}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
