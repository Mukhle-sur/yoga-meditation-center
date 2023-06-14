import { useEffect, useState } from "react";
import useClasses from "../../../components/hooks/useClasses/useClasses";
import Marquee from "react-fast-marquee";
import InstructorMar from "./InstructorMar";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import AllClassMar from "./AllClassMar";

const ExtraSection = () => {
  const [classes] = useClasses();
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://yoga-meditation-server-ruby.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <div className="mb-14">
      <SectionTitle
        subHeading={"All Classes"}
        heading={"&& all instructor"}
      ></SectionTitle>
      <div>
        <Marquee pauseOnHover speed={80}>
          {instructors.map((instructor) => (
            <InstructorMar
              key={instructor._id}
              instructor={instructor}
            ></InstructorMar>
          ))}
        </Marquee>
      </div>
      <div>
        <Marquee pauseOnHover speed={80}>
          {classes.map((singleClass) => (
            <AllClassMar
              key={singleClass._id}
              singleClass={singleClass}
            ></AllClassMar>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ExtraSection;
