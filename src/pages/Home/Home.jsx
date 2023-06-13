import "./Home.css";
import Slider from "../../components/Slaider/Slider";
import PopularClasses from "./PopularClasses/PopularClasses";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
    </div>
  );
};

export default Home;
