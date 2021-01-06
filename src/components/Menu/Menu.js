import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import css from './menu.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo.svg';

import Flags from '../Flags/Flags'

import { FormattedMessage } from "react-intl";
import { I18nPropvider } from '../../i18nProvider';
import translate from "../../i18nProvider/translate";

const Menu = () => {

  const [locale, setLocale] = useState()

  const languageAction = useSelector(state => state.languageAction)

  useEffect(() => {

    setLocale(languageAction.data.language)
  }, [languageAction]);

  return (
    <I18nPropvider locale={locale} >
      <main>
        <section className={css.section}>
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
                  {translate('Menu_01')}
                </Nav.Link>

                <Nav.Link className={css.link} href="/Services">
                  {translate('Menu_02')}
                </Nav.Link>

                <Nav.Link className={css.link} href="/Prices">
                  {translate('Menu_03')}
                </Nav.Link>

                <Nav.Link className={css.link} href="/AboutUs">
                  {translate('Menu_04')}
                </Nav.Link>

                <Nav.Link className={css.link} href="/Associations">
                  {translate('Menu_05')}
                </Nav.Link>

                <Nav.Link className={css.link} href="/Terms">
                  {translate('Menu_06')}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Flags />
        </section>
      </main>
    </I18nPropvider >
  );
};

export default Menu;
