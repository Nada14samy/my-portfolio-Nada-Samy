// component
import NavbarSection from "../../component/Navbar/Navbar";
import Header from "../../component/Header/Header";
import Skills from "../../component/Skills/Skills";
import SkillsSection from "../../component/Skills/SkillsSection";
import Projects from "../../component/Projects/Projects";
import Contact from "../../component/Contact/Contact";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
    <>
        <NavbarSection />
        <Header />
        <Skills />
        <SkillsSection />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default Home;