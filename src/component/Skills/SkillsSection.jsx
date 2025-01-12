import { useEffect } from "react";
import { Container } from "react-bootstrap";
import SkillsImage from "../../assets/images/skills.webp";
import SkillsData from "./SkillsData";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

const SkillsSection = () => {
    const {t} = useTranslation();
    useEffect(() => {
        AOS.init();
    }, []);
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
                <div className="skills-text" data-aos="fade-up" data-aos-duration="3000">
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