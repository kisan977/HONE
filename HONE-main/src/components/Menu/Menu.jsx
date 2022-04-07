import React from "react";
import "./Menu.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../src/logo.png";
import logo2 from "../../../src/logo2.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Menu = () => {
  return (
    <Navbar className="nav-container" expand="lg">
      <Container>
        <Navbar.Brand
          href="/"
          style={{ paddingTop: "0", paddingBottom: "0" }}
          className="main_logo"
        >
          <img
            src={logo}
            width="108"
            height="64"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav_link">
              Home
            </Link>
            <Link to="/about" className="nav_link">
              About
            </Link>
            <Link to="/services" className="nav_link">
              Services
            </Link>
            <Link to="/" className="nav_link">
              Blogs
            </Link>
            <Link to="/" className="nav_link">
              Help
            </Link>
            <Link to="/" className="nav_link">
              NPR
            </Link>
            <Link to="/" className="logo2">
              <img
                src={logo2}
                width="36"
                height="35"
                className="d-inline-block align-top img"
                alt="logo"
              />
            </Link>
            <Link to="/" className="btn">
              <Button
                className="button"
                style={{
                  backgroundColor: "#5A3D2B",
                  border: "none",
                  padding: ".330rem .80rem",
                  borderRadius: "5px",
                  fontWeight: "700",
                  display: "flex",
                  textDecoration: "none",
                }}
              >
                Login
                <MdKeyboardArrowDown className="arrow" />
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
