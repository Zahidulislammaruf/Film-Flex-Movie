import { useEffect, useState } from "react";
import CategoryDetails from "../../DetailsPage/CategoryDetails";

const Categoryies = () => {
  const [logData,setData] = useState()

   useEffect(()=>{
   fetch('category.json')
   .then(res=>res.json())
   .then(data=>{
    
    setData(data)
   })

   },[])
   


    return (
        <div className=" container mx-auto">
           <h2 className="text-4xl text-center text-white mt-6 mb-6">Streaming Platforms
</h2> 
           <div className=" grid grid-col-1 md:grid-cols-3 gap-8 p-6">
            {
             logData?.map(categori=> <CategoryDetails key={categori.id} categori={categori}></CategoryDetails>)   
            }
           </div>
        </div>
    );
};

export default Categoryies;