import SkillsData from "./SkillsData";
// import reactBootstrap from "../../assets/images/ReactBootstrap.webp";
import "./Skills.css";

const Skills = () => {
  const showSkills = SkillsData.map((item)=>{
      return(
          <div className="skill-item" key={item.id}>
            <img src={item.image} alt="" />
          </div>
      )
  })

  return (
    <>
      <section className="Skills">
        <marquee>
          <div className="skill-container">
            {showSkills}
          </div>
        </marquee>
      </section>
    </>
  )
}

export default Skills;