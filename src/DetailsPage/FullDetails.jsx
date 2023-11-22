import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const FullDetails = () => {
    const {user} = useContext(AuthContext)
    const email = user.email
    const details = useLoaderData()
    const {_id,title,price,type,rating,imageUrl,description,category} = details
    console.log(_id,title,price,type,rating,imageUrl,description,category,email)
    const addCartDetails = {title,price,type,rating,imageUrl,description,category,email}
    

    const handleCart = e =>{
        e.preventDefault()
        console.log(addCartDetails)
        fetch('https://flim-flex-5nf5oy2nf-zahidul-islams-projects.vercel.app/useradd',{
            method:'POST' ,
            headers : {
             'content-type' : 'application/json'
            },
            body : JSON.stringify(addCartDetails)  
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                  'Good job!',
                  'Item Added your Cart SuccessFully 😊',
                  'success'
                )
              }
        })

    }
    return (
        <div>

            <div className=" container mx-auto mt-10 p-4">
            <div className="flex justify-center  ">
                <img className="max-w-sm md:max-w-xl lg:max-w-2xl" src={imageUrl} alt="" />
            </div>
            <div>
                <h2 className="text-center text-3xl mt-4">{title}</h2>
                <div className="flex flex-col gap-3 font-mono text-[18px]">
                <div >
    <div className="badge badge-secondary">{category}</div>
    <div className="badge badge-primary">{type}</div>
    </div>
                    <div >
                    Price : {price}

                    </div>
                    <div >
                    IMDB Rating : {rating}/10

                    </div>
                </div>
                <p className="text-2xl font-normal mt-10"><span className=" font-bold font-mono">Description :</span> {description}</p>
            </div>
            
            
        </div> 
        <div className="flex justify-center gap-2 items-center mx-auto mt-4 mb-24">
        <button onClick={handleCart} className="btn btn-info ">Add To Cart</button>
        </div>
        </div>
    );
};

export default FullDetails;