import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
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
    <Navbar bg="light" expand="lg" className="navbar">
      <Container className="navBarInner">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuData.map((item) => {
              return (
                <Nav.Link to={item.path} key={item.name}>
                  <div className="list_item">{item.name}</div>
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
