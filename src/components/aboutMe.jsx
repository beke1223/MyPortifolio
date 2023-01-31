import gmail from "../img/envelope-regular.svg";
import fb from "../img/facebook-f.svg";
import linkedIn from "../img/linkedIn.svg";
import discord from "../img/discord.svg";
import twitter from "../img/twitter.svg";
import github from "../img/square-github.svg";

import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function AboutMe() {
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
  return (
    <div
      style={{
        position: "relative",
        top: "-23rem",
        left: "40%",
        width: "40%",
        boxShadow: "5px 5px 30px rgba(143, 136, 136, 0.5)",
        textAlign: "start",
      }}
    >
      <h2>Hello I am Tinchel</h2>
      <h3>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iure
        quaerat dolores a sint fugiat qui error vel.
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        laborum ullam suscipit optio atque nulla, dolores id eaque quia, impedit
        voluptate numquam pariatur nihil ipsam temporibus reiciendis hic,
        laudantium fugit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit.
      </p>
      <div className=" container-social-link-about-me">
        {socialMediaList.map((links) => {
          return (
            <div>
              <Link to={links.urls}>
                <Image src={links.img} alt={links.name} className="w-25" />
                <span> {links.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to="mailto:asebekalu@gmail.com">
        <Button className="outline-info w-75 mt-3 " variant="outline-info">
          <h1>Contact</h1>
        </Button>
      </Link>
    </div>
  );
}
export default AboutMe;
