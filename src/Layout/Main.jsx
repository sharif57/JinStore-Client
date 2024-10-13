import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  return <div className="font-inter">
    <Navbar></Navbar>
    <div className="">
        <Outlet></Outlet>
    </div>
    <Footer></Footer>
  </div>;
};
export default Main;