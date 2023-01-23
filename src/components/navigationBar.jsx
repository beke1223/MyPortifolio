import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import tinchel from "../img/tinchel.png";

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
                        ? "active active-nav navbar-link"
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
