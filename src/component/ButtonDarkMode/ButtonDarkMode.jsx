import {useState , useEffect} from "react";
// icon
import { FaMoon, FaSun } from "react-icons/fa";

const ButtonDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
   
    useEffect(() => {
        if (darkMode) {
          document.body.classList.add("light-mode");
          document.querySelectorAll("*").forEach(element => {
            element.classList.add("light-text");
          });
        } else {
          document.body.classList.remove("light-mode");
          document.querySelectorAll("*").forEach(element => {
            element.classList.remove("light-text");
          });
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

  return (
    <>
        <div style={{fontSize: "20px"}} onClick={toggleDarkMode}>
            {darkMode ? <FaSun color="yellow" /> : <FaMoon color="blue" />}
        </div>
    </>
  )
}

export default ButtonDarkMode;