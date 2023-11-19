import { Outlet } from "react-router-dom";
import Navbar from "../Common-Components/Navbar";
import Footer from "../Common-Components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;