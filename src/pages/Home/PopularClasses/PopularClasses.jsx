import { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/showPopularClasses")
      .then((res) => res.json())
      .then((data) => {
        setPopularClasses(data);
      });
  }, []);
  //   console.log("puplar re", popularClasses);
  return (
    <>
      <SectionTitle
        subHeading={"Our Classes"}
        heading={"Popular Classes"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
        {popularClasses.slice(0, 6).map((item) => (
          <PopularClassCard key={item._id} item={item}></PopularClassCard>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
