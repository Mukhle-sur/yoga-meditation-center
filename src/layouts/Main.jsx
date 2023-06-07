import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/NavBar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-240px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
