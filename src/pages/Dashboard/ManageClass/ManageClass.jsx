import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure/useAxiosSecure";
// import useClasses from "../../../components/hooks/useClasses/useClasses";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../components/hooks/useAuth/useAuth";

const ManageClass = () => {
  // const [classes, refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();
  const { loading } = useAuth();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/allClasses");
      return res.data;
    },
  });

  //   make approved
  const handleMakeApproved = (classItem) => {
    axiosSecure
      .patch(`/users/approved/${classItem._id}`)
      .then((response) => {
        const { data } = response;
        if (data.modifiedCount) {
          refetch();
          toast.success(`${classItem?.instructorName} Your Class Added`);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //   TODO  make denied and send feedBack
  //   make denied
  const handleMakeDenied = (classItem) => {
    axiosSecure.patch(`/users/denied/${classItem._id}`).then((response) => {
      const { data } = response;
      if (data.modifiedCount) {
        refetch();
        toast.success(`${classItem?.instructorName} Your Class is a Denied`);
      }
    });
  };

  //   send Feedback

  return (
    <div className="w-full h-full p-5">
      <h3 className="text-3xl font-bold mb-5">
        Total Classes : {classes.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-[#D1A054] text-black">
            <tr>
              <th>Class Image</th>
              <th>Class name</th>
              <th>Instructor name</th>
              <th>Instructor email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classItem.image} alt="images" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{classItem?.className}</td>
                <td>{classItem?.instructorName}</td>
                <td>{classItem?.instructorEmail}</td>
                <td className="text-center">{classItem?.availableSeat}</td>
                <td>${classItem?.price}</td>
                <td>{classItem?.status}</td>
                <td>
                  {classItem?.status === "Approved" ? (
                    "Approved"
                  ) : (
                    <button
                      onClick={() => handleMakeApproved(classItem)}
                      className="btn btn-xs bg-[#D1A054] text-base text-white"
                    >
                      Approved
                    </button>
                  )}
                </td>
                <td>
                  {classItem?.status === "Denied" ? (
                    <Link to={`/dashboard/feedback/${classItem?._id}`}>
                      <button className="btn btn-xs bg-[#D1A054] text-base text-white">
                        Feedback
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleMakeDenied(classItem)}
                      className="btn btn-xs bg-[#D1A054] text-base text-white"
                    >
                      Denied
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
