import { NavLink } from "react-router-dom";
import { FaRegEnvelope, FaUsers } from "react-icons/fa";
import { AiFillCheckSquare, AiFillCreditCard } from "react-icons/ai";
import { BsBookFill } from "react-icons/bs";

const Dashboard = () => {
  const isAdmin = true;
  const isInstructor = false;
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-[#151515] font-medium">
            {isAdmin ? (
              <>
                <div className="max-w-xs pt-8 mb-7">
                  <h4 className="uppercase text-3xl ml-2">
                    Yoga <span className="text-rose-500">Center</span>
                  </h4>
                  <p className="text-xl font-medium ml-3 mt-4">
                    Admin Dashboard
                  </p>
                </div>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <AiFillCheckSquare></AiFillCheckSquare> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <div className="max-w-xs pt-8 mb-7">
                  <h4 className="uppercase text-3xl ml-2">
                    Yoga <span className="text-rose-500">Center</span>
                  </h4>
                  <p className="text-xl font-medium ml-3 mt-4">
                    Instructor Dashboard
                  </p>
                </div>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <AiFillCheckSquare></AiFillCheckSquare> My Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <BsBookFill></BsBookFill> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop/salad"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <AiFillCreditCard></AiFillCreditCard> Total Enrolled
                    Students
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaRegEnvelope></FaRegEnvelope> Contact
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <div className="max-w-xs pt-8 mb-7">
                  <h4 className="uppercase text-3xl ml-2">
                    Yoga <span className="text-rose-500">Center</span>
                  </h4>
                  <p className="text-xl font-medium ml-3 mt-4">
                    Student Dashboard
                  </p>
                </div>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <AiFillCheckSquare></AiFillCheckSquare> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <BsBookFill></BsBookFill> My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop/salad"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <AiFillCreditCard></AiFillCreditCard> Payment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaRegEnvelope></FaRegEnvelope> Contact
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;