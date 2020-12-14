import React from 'react';
// import { Link } from 'react-router-dom';
import css from './menu.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../../assets/logo.svg';

const Menu = () => {
  return (
    <main>
      <section>
        <Navbar expand="md">
          <Navbar.Brand>
            <header className={css.logoDiv}>
              <img src={logo} alt="CollabTranslation" />
            </header>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="xs-auto">
              <Nav.Link className={css.link} href="/">
                Home
              </Nav.Link>

              <Nav.Link className={css.link} href="/Services">
                Services
              </Nav.Link>

              <Nav.Link className={css.link} href="/Prices">
                Prices & Combos
              </Nav.Link>

              <Nav.Link className={css.link} href="/AboutUs">
                About Us
              </Nav.Link>

              <Nav.Link className={css.link} href="/Associations">
                Associations & Certificates
              </Nav.Link>

              <Nav.Link className={css.link} href="/Terms">
                Terms & Conditions
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </main>
  );
};

export default Menu;
