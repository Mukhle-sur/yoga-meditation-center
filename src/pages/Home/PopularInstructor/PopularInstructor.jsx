import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";

const PopularInstructor = () => {
  const [popularInstructor, setPopularInstructor] = useState([]);

  useEffect(() => {
    fetch("https://yoga-meditation-server-ruby.vercel.app/showPopularInstructor")
      .then((res) => res.json())
      .then((data) => {
        setPopularInstructor(data);
      });
  }, []);
  console.log("popular", popularInstructor);
  const swiperBreakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <div className="mb-14">
      <div>
        <SectionTitle
          subHeading={"Our Instructor"}
          heading={"Popular Instructor"}
        ></SectionTitle>
      </div>
      <Swiper
        breakpoints={swiperBreakpoints}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {popularInstructor.map((item) => (
          <SwiperSlide key={item._id} className="w-full mt-8">
            <div className="card   border-2">
              <figure>
                <img src={item?.instructorImage} alt="" className="w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.instructorName}</h2>
                <p>{item?.instructorEmail}</p>
                <p>Class Name : {item?.className}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularInstructor;
