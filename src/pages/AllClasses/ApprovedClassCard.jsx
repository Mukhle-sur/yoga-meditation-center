import { toast } from "react-hot-toast";
import useAuth from "../../components/hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";
import useAddClass from "../../components/hooks/useAddClass/useAddClass";

const ApprovedClassCard = ({ approvedClass }) => {
  const {
    image,
    className,
    instructorName,
    instructorImage,
    availableSeat,
    price,
    instructorEmail,
    _id,
  } = approvedClass;
  const { user } = useAuth();
  const navigate = useNavigate();
  const [, refetch] = useAddClass();
  const handleAddClass = () => {
    const addClass = {
      addClass: _id,
      image,
      price,
      email: user?.email,
      className,
      instructorName,
      instructorImage,
      instructorEmail,
    };
    if (user) {
      fetch("http://localhost:5000/studentAddClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Your Class Selected Successfully");
            refetch();
          }
        });
    } else {
      toast.error("Please Login First Will You Select This Class");
      navigate("/login");
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl justify-normal">
      <figure className="">
        <img src={image} alt="image" className="rounded-xl w-full h-60" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">
          <span className="hidden md:block text-center">Yoga</span>Name :{" "}
          {className}
        </h2>
        <p>Instructor Name : {instructorName}</p>
        <p>AvailableSeat : {availableSeat}</p>
        <p>Price : ${price}</p>
      </div>
      <div className="card-actions mx-auto my-2">
        <button
          onClick={() => handleAddClass(approvedClass)}
          className="btn  btn-outline btn-primary"
        >
          Book Class
        </button>
      </div>
    </div>
  );
};

export default ApprovedClassCard;
