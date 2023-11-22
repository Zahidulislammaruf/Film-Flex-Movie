import { useNavigate } from "react-router-dom";
import imf from "../../assets/error.gif"
import Navbar from "../Shared/Navbar";
const ErrorPage = () => {
    const nevi = useNavigate()
    const handleHome = e =>{
        
        nevi('/')
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col justify-center items-center container mx-auto mt-20">
    <img className="w-48 mt-4" src={imf} alt="" />
    <h2 className="text-[40px] text-red-500">Opps !!!</h2>
    <p className="text-[32px]">You Enter A Wrong Path</p>
    <button onClick={handleHome} className="btn bg-purple-500 text-white mt-4">Go To HomePage</button>
     </div>
        </div>
    );
};

export default ErrorPage;