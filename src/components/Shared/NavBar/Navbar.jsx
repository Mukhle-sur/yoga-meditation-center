import { Link } from "react-router-dom";
import Container from "../Container";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/images/yogalogo.png";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { toast } from "react-hot-toast";
import ThemChange from "./ThemChange";
import useAddClass from "../../hooks/useAddClass/useAddClass";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [addClass] = useAddClass();
  console.log("from navbar", addClass);
  // user  logOut
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const navItems = (
    <>
      <li>
        <Link className="text-lg font-medium" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-lg font-medium" to="/allInstructors">
          Instructors
        </Link>
      </li>
      <li>
        <Link className="text-lg font-medium" to="/allClasses">
          Classes
        </Link>
      </li>
      {user && (
        <li>
          <Link className="text-lg font-medium" to="/dashboard">
            Dashboard
          </Link>
        </li>
      )}
      {
        <li className="ml-2">
          <Link to="dashboard/mySelectedClass" className="justify-between">
            <FaShoppingCart></FaShoppingCart>
            <span className="badge badge-secondary">+{addClass?.length}</span>
          </Link>
        </li>
      }
    </>
  );
  return (
    <div className="fixed top-0 bg-opacity-30 w-full z-10 shadow-sm bg-sky-950">
      <div className="py-3">
        <Container>
          <div className="navbar  md:text-white ">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-sans md:items-center"
                >
                  {navItems}
                </ul>
              </div>
              <div className="flex items-center">
                <img src={logo} alt="" className="w-12" />
                <h4 className="uppercase text-3xl ml-2">
                  Yoga <span className="text-rose-500">Center</span>
                </h4>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 font-sans">
                {navItems}
              </ul>
            </div>
            <div className="navbar-end">
              <ThemChange></ThemChange>
              {user ? (
                <>
                  <button
                    onClick={handleLogOut}
                    className="btn change btn-outline text-white btn-primary"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="change btn btn-outline btn-primary border-white "
                >
                  Login
                </Link>
              )}
              <div className="avatar ml-5">
                <div className="w-12 rounded-full ring ring-primary  ring-offset-base-100 ring-offset-2">
                  <img
                    src={user && user?.photoURL ? user?.photoURL : avatarImg}
                    title={user?.displayName}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
