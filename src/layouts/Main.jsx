import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/NavBar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh)]">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
