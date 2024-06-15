import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">
            <Outlet></Outlet>
       
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;