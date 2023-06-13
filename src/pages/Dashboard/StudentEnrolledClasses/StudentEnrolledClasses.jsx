
import useEnrolledStudent from "../../../components/hooks/useEnrolledStudent/useEnrolledStudent";

const StudentEnrolledClasses = () => {
  const [enrolledClasses] = useEnrolledStudent();

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return formattedDate + " " + formattedTime;
  };
  return (
    <div className="w-full px-8">
      <h2 className="text-2xl text-center">
        Your Enrolled Classes
      </h2>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          <thead className="bg-[#D1A054] text-black">
            <tr>
              <th>##</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.className}</td>

                <td>{item.price}</td>

                <td>{formatDateTime(item.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentEnrolledClasses;
