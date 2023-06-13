import useEnrolledStudent from "../../../components/hooks/useEnrolledStudent/useEnrolledStudent";

const PaymentHistory = () => {
  const [enrolledClasses] = useEnrolledStudent();

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return formattedDate + " " + formattedTime;
  };

  // Sort enrolledClasses by date in descending order
  const sortedEnrolledClasses = enrolledClasses.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  return (
    <div className="w-full px-8">
      <h2 className="text-2xl text-center">Your Payment History</h2>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          <thead className="bg-[#D1A054] text-black">
            <tr>
              <th>SRL</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedEnrolledClasses.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.className}</td>
                <td>{item.price}</td>
                <td>{item.transactionId}</td>
                <td>{formatDateTime(item.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
