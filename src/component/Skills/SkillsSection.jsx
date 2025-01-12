import { Container } from "react-bootstrap";
import SkillsImage from "../../assets/images/skills.webp";
import SkillsData from "./SkillsData";

import i18n from '../../Translation.js';
import { useTranslation } from "react-i18next";

const SkillsSection = () => {
    const {t} = useTranslation();
    const showSkills = SkillsData.map((item)=>{
        return(
            <div className="skill-item" key={item.id}>
              <img src={item.image} alt="" />
            </div>
        )
    })
  return (
    <>
        <section className="SkillsSection">
            <Container>
                <div className="skills-text">
                    <p>{t("description")}</p>
                </div>
                <div className="skills-items">
                    {showSkills}
                </div>
               <div className="skills-img">
                    <img src={SkillsImage} alt="" />
               </div>
            </Container>
        </section>
    </>
  )
}

export default SkillsSection;