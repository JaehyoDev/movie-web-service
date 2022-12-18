import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "../css/Navbar.module.css";

const Navigation = () => {
  const navigate = useNavigate();

  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
    console.log(color);
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Navbar
      className={
        color ? `${style.navbar} ${style.navbar__dark}` : `${style.navbar}`
      }
      collapseOnSelect
      fixed="top"
    >
      <Container className={style.container}>
        <Navbar.Brand className={style.title} onClick={() => navigate("/home")}>
          Movie Viewer
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            className="mx-2 p-auto"
            onClick={() => navigate("/movie/new_movies")}
          >
            <h3 className={style.navbar__menu__item}>New</h3>
          </Nav.Link>
          <Nav.Link
            className="mx-2 p-auto"
            onClick={() => navigate("/movie/popular_movies")}
          >
            <h3 className={style.navbar__menu__item}>Popular</h3>
          </Nav.Link>
          <Nav.Link
            className="mx-2 p-auto"
            onClick={() => navigate("/movie/highRated_movies")}
          >
            <h3 className={style.navbar__menu__item}>High Rated</h3>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
