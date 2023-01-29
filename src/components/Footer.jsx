import gmail from "../img/envelope-regular.svg";
import fb from "../img/facebook-f.svg";
import linkedIn from "../img/linkedIn.svg";
import discord from "../img/discord.svg";
import twitter from "../img/twitter.svg";
import github from "../img/square-github.svg";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { useState } from "react";
const socialMedia = [
  {
    urls: "mailto:asebekalu@gmail.com",
    img: gmail,
    alt: "social-media-icon-gmail",
    name: "Gmail",
  },
  {
    urls: "https://github.com/beke1223",
    img: github,
    alt: "social-media-icon-github",
    name: "Github",
  },
  {
    urls: "#facebook",
    img: fb,
    alt: "social-media-icon-facebook",
    name: "FaceBook",
  },
  {
    urls: "https://www.linkedin.com/in/bekalu-atto-821393226/",
    img: linkedIn,
    alt: "social-media-icon-LinkedIn",
    name: "LinkedIn",
  },
  {
    urls: "https://twitter.com/Bekalu1223",
    img: twitter,
    alt: "social-media-icon-Twitter",
    name: "Twitter",
  },
  {
    urls: "#Discord",
    img: discord,
    alt: "social-media-icon-Discord",
    name: "Discord",
  },
];

function SocialMedia(props) {
  const [visible, setVisible] = useState("");

  const footerSetVisible = (value) => {
    setVisible(value);
  };
  var Customclasses = `text-start {${props.customClass}}`;
  var Customclasses1 = `m-5 {${props.customClass}}`;
  console.log(Customclasses1);
  console.log(Customclasses);

  return (
    <div className={"social-link-test"}>
      {/* <ListGroup> */}
      {socialMedia.map((media) => (
        <div key={media.alt} variant="flush" className={Customclasses1}>
          <Link to={`${media.urls}`} target="_blank" className="social-link">
            <Image
              src={media.img}
              width="30rem"
              className="social-icon-img"
              onMouseEnter={() => footerSetVisible(media.name)}
              onMouseLeave={() => footerSetVisible("")}
            />
            <span
              className={
                visible === media.name
                  ? "social-icon-text-visible"
                  : "social-icon-text-hidden"
              }
            >
              {media.name}
            </span>
          </Link>
        </div>
      ))}
      {/* </ListGroup> */}
    </div>
  );
}
export default SocialMedia;
