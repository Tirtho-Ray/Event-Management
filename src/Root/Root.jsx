import { Outlet } from "react-router-dom";
import NAvbar from "../PAges/Navbar/NAvbar";
import Footer from "../PAges/Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NAvbar></NAvbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;