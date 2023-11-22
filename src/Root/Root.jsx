import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar";


const Root = () => {
       
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;