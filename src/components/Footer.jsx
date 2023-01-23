import gmail from "../img/envelope-regular.svg";
import fb from "../img/facebook-f.svg";
import github from "../img/square-github.svg";
import Card from "react-bootstrap/Card";
const socialMedia = [
  {
    urls: "#gmail",
    img: gmail,
    alt: "social-media-icon-gmail",
  },
  {
    urls: "#github",
    img: github,
    alt: "social-media-icon-github",
  },
  {
    urls: "#facebook",
    img: fb,
    alt: "social-media-icon-facebook",
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
                <img src={media.img} alt={media.alt}></img>
              </a>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
export default SocialMedia;
