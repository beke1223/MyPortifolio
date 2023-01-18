import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import tinchel from "../img/tinchel.png";
import gmail from "../img/envelope-regular.svg";
import fb from "../img/facebook-f.svg";
import github from "../img/square-github.svg";
import "../App.css";

function Navigation() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScroled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroled(true);
      } else {
        setScroled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/About",
      name: "About",
    },
    {
      path: "/Contact",
      name: "Contact",
    },
    {
      path: "/Services",
      name: "Services",
    },
    {
      path: "/Others",
      name: "Others",
    },
  ];

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
  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled " : ""}>
      <Container className="navBarInner">
        <Navbar.Brand href="#home">
          <img src={tinchel} alt="logo" style={{ height: "4rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav">
            {menuData.map((item) => {
              return (
                <Nav.Link to={item.path} key={item.name}>
                  <div
                    className={
                      activeLink === item.name
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onClick={() => onUpdateActiveLink(item.name)}
                  >
                    {item.name}
                  </div>
                </Nav.Link>
              );
            })}
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              {socialMedia.map((media) => {
                return (
                  <a href={media.urls}>
                    <img src={media.img} alt={media.alt}></img>
                  </a>
                );
              })}
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
