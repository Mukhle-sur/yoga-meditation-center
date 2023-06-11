import { FaEdit } from "react-icons/fa";
// import useClasses from "../../components/hooks/useClasses/useClasses";
import useAxiosSecure from "../../components/hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../components/hooks/useAuth/useAuth";
import { useQuery } from "@tanstack/react-query";

const InstructorClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/allClasses/${user.email}`);
      return res.data;
    },
  });
  console.log(classes);

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
              <th>Instructor email</th>
              <th>Status</th>
              <th>FeedBack</th>
              <th>Update</th>
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
                <td>{classItem?.instructorEmail}</td>
                <td>{classItem?.status}</td>
                <td>{classItem?.feedBack}</td>
                <td>
                  <button className="btn btn-md btn-outline bg-[#B91C1C] text-white">
                    <FaEdit></FaEdit>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorClasses;
