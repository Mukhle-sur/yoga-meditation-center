import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

import "./Home.css";
import Slider from "../../components/Slaider/Slider";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`home-page ${theme}`}>
      <Slider></Slider>
      <button onClick={toggleTheme} className="btn-primary">Toggle Theme</button>
    </div>
  );
};

export default Home;
