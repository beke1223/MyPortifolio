import gmail from "../img/envelope-regular.svg";
import linkedIn from "../img/linkedIn.svg";
import discord from "../img/discord.svg";
import twitter from "../img/twitter.svg";
import github from "../img/square-github.svg";

import { Link } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import { useState } from "react";

const socialMediaList = [
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
    <Container
      className={"social-link-test text-center"}
      style={{
        position: "fixed",
        zIndex: "1",
        top: "33%",
        fontFamily: "Times New Roman",
        fontSize: "2rem",
      }}
    >
      {/* <ListGroup> */}
      <p
        style={{
          color: "black",
          position: "relative",
          marginLeft: "-1.5rem",
        }}
      >
        Contact
      </p>
      {socialMediaList.map((media) => (
        <div key={media.alt} variant="flush">
          <Link
            to={media.urls}
            target="_blank"
            className="social-link"
            style={{ position: "relative" }}
          >
            <Image
              src={media.img}
              width="8px"
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
    </Container>
  );
}
export default SocialMedia;
