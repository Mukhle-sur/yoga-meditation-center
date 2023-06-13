import "./Home.css";
import Slider from "../../components/Slaider/Slider";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import ExtraSection from "./ExtraSection/ExtraSection";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
