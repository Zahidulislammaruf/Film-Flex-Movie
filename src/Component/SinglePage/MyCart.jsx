import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import MycartDeatils from "../../DetailsPage/MycartDeatils";

const MyCart = () => {
    const [totalFilm,setFilm] = useState([])
    const {user} = useContext(AuthContext)
    const email = user.email
    const film = useLoaderData()
   // console.log(film,email)
      useEffect(() => {
        const matchValue = film.filter(matched => matched.email === email);
      setFilm(matchValue);
      }, []);
     // console.log(totalFilm)
    return (
        <div className=" container mx-auto">
            <h2 className="text-center mt-3">Total item You Added : {totalFilm.length} </h2>
          
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-14 p-4 mx-auto">
                {
                    totalFilm.map(tflim=> <MycartDeatils key={tflim._id} tflim={tflim} ></MycartDeatils>)
                }
            </div>
          
            
        </div>
    );
};

export default MyCart;