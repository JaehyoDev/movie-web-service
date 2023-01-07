import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../css/Navbar.module.css";

const Navigation = () => {
  const navigate = useNavigate();
  console.log("넷바실행");

  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Navbar
      className={
        color ? `${styles.navbar} ${styles.navbar__dark}` : `${styles.navbar}`
      }
      collapseOnSelect
      fixed="top"
    >
      <Container className={styles.container}>
        <Navbar.Brand className={styles.title} onClick={() => navigate("/")}>
          Movie Viewer
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            className="mx-2 p-auto"
            onClick={() => navigate("/new_movies")}
          >
            <h3 className={styles.navbar__menu__item}>New</h3>
          </Nav.Link>
          <Nav.Link
            className="mx-2 p-auto"
            onClick={() => navigate("/popular_movies")}
          >
            <h3 className={styles.navbar__menu__item}>Popular</h3>
          </Nav.Link>
          <Nav.Link
            className="mx-2 p-auto"
            onClick={() => navigate("/highRated_movies")}
          >
            <h3 className={styles.navbar__menu__item}>High Rated</h3>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
