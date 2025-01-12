import { useState, useEffect } from 'react';
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonDarkMode from "../../component/ButtonDarkMode/ButtonDarkMode.jsx";
// css
import "./Navbar.css";
// translations
import { useTranslation } from "react-i18next";
import Cookies from 'js-cookie';
import i18n from '../../Translation.js';

function NavbarSection() {
  const {t} = useTranslation();
  const [lng, setLng] = useState(Cookies.get("i18next") || "en");
  useEffect(()=>{
       window.document.dir = i18n.dir(lng);
       Cookies.set("i18next", lng);
  },[lng]);
  // select language
  const handleLanguageChange = (newLang) => {
    let selectLang = newLang.target.value;
    setLng(selectLang);

    i18n.changeLanguage(selectLang);  
  }; 

  return (
    <>
       <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">Nada Samy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">{t("Home")}</Nav.Link>
            <Nav.Link href="#project">{t("Projects")}</Nav.Link>
            <Nav.Link href="#contact">{t("Contact me")}</Nav.Link>
          </Nav>
          <div className='nav-right'>
             <ul className='nav-links'>
              <li className='dark-mode'>
                <ButtonDarkMode />
              </li>
              <li className='select-lang'>
                <select value={lng} onChange={handleLanguageChange}>
                  <option value="en">En</option>
                  <option value="ar">Ar</option>
                </select>
              </li>
             </ul>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarSection;