import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  return <div className="font-inter">
    <Navbar></Navbar>
    <div className="container mx-auto mt-32">
        <Outlet></Outlet>
    </div>
    <Footer></Footer>
  </div>;
};
export default Main;