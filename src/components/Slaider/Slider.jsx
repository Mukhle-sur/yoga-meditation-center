import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.css'

import img1 from "../../assets/slider/slider1.jpg";
import img2 from "../../assets/slider/slider2.jpg";
import img3 from "../../assets/slider/slider3.jpg";
import img4 from "../../assets/slider/slider8.jpg";
import img5 from "../../assets/slider/slider5.jpg";
import img6 from "../../assets/slider/slider6.jpg";
const Slider = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} className=""/>
        </div>
        <div>
          <img src={img2} className=""/>
        </div>
        <div>
          <img src={img3} className=""/>
        </div>
        <div>
          <img src={img4} className=""/>
        </div>
        <div>
          <img src={img5} className=""/>
        </div>
        <div>
          <img src={img6} className=""/>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
