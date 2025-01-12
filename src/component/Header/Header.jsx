// bootstrap
import Container from 'react-bootstrap/Container';
// css
import "./Header.css";
import { useTranslation } from "react-i18next";
import i18n from '../../Translation.js';

const Header = () => {
    const {t} = useTranslation();
  return (
    <>
        <header className="Header">
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