import { useEffect } from 'react';
// bootstrap
import Container from 'react-bootstrap/Container';
// css
import "./Header.css";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
    const {t} = useTranslation();
    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <>
        <header className="Header" data-aos="zoom-in">
            <Container>
                <div className="title-header">
                    <span>{t("title")}</span>
                    <h1>{t("name")}</h1>
                </div>
                <div>
                    <p>{t("role")}</p>
                </div>
                <div className="body-header">
                    <p className='body-header-text'>
                        {t("description")}
                    </p>
                </div>
            </Container>
        </header>
    </>
  )
}

export default Header