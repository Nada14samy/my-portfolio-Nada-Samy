import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer>
        <p className="">
         {t("footer.copyright")}
        </p>
    </footer>
  )
}

export default Footer;