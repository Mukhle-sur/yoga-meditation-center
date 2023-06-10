import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import Container from "../../components/Shared/Container";
import { useEffect } from "react";
import { useState } from "react";
import InstructorCard from "../../components/InstructorCard/InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructors(data);
      });
  }, []);
  return (
    <div className="my-28">
      <Container>
        <div>
          <SectionTitle
            subHeading={"This is amazing"}
            heading={"Our Instructors"}
          ></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
        </div>
      </Container>
    </div>
  );
};

export default Instructors;
