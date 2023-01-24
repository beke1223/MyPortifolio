import gmail from "../img/envelope-regular.svg";
import fb from "../img/facebook-f.svg";
import linkedIn from "../img/linkedIn.svg";
import discord from "../img/discord.svg";
import twitter from "../img/twitter.svg";
import github from "../img/square-github.svg";
import Card from "react-bootstrap/Card";
const socialMedia = [
  {
    urls: "#gmail",
    img: gmail,
    alt: "social-media-icon-gmail",
    name: "Gmail",
  },
  {
    urls: "#github",
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
    urls: "#LinkedIn",
    img: linkedIn,
    alt: "social-media-icon-LinkedIn",
    name: "LinkedIn",
  },
  {
    urls: "#Twitter",
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
function SocialMedia() {
  return (
    <div className="footer-social">
      <Card
        className="footer-card"
        style={{
          backgroundColor: "transparent",
          height: "100%",
          textAlign: "center ",
        }}
      >
        <h3 style={{ marginLeft: "-20%", marginBottom: "2%" }}>Contact :</h3>
        <div className="social-icon">
          {socialMedia.map((media) => {
            return (
              <a href={media.urls}>
                {/* <img src={media.img} alt={media.alt}></img> */}
                <p>{media.name}</p>
              </a>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
export default SocialMedia;
