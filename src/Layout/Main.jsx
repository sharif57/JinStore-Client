import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  return <div>
    <Navbar></Navbar>
    <div className="h-screen">
        <Outlet></Outlet>
    </div>
    <Footer></Footer>
  </div>;
};
export default Main;