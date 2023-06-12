import { FaTrashAlt } from "react-icons/fa";
import useAddClass from "../../../components/hooks/useAddClass/useAddClass";


const StudentSelectClass = () => {
  const [addClasses] = useAddClass();
  const total = addClasses.reduce((sum, item) => item.price + sum, 0);

  const handleDelete=()=>{

  }

  return (
    <div className="w-full h-full p-5">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold mb-5">
          Total User : {addClasses.length}
        </h3>
        <h3 className="text-3xl font-bold mb-5">
          Total Price : ${total}
        </h3>
        <button className="btn btn-outline btn-sm">Pay</button>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead  className="bg-[#D1A054] text-black">
            <tr>
              <th>##</th>
              <th>CLASS IMAGE</th>
              <th>CLASS NAME</th>
              <th>INSTRUCTOR NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {addClasses.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-md bg-[#B91C1C] text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default StudentSelectClass;
