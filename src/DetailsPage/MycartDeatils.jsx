import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MycartDeatils = ({tflim}) => {

    const {_id,title,imageUrl,price,rating,category,type,description} = tflim
    const handleDelet = _id =>{
     

      
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          
          console.log("done")
          fetch(`https://flim-flex-5nf5oy2nf-zahidul-islams-projects.vercel.app/useradd/${_id}`,{
            method:'DELETE' 
           
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.Please Reload The Website',
                'success'
              )
            }
          })
        }
      })

    }
    return (
        <div>
             <div className="card  bg-base-400 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={imageUrl} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <div className="">
    <h2 className="card-title items-center text-center">{title}</h2>
    </div>
    <div >
    <div className="badge badge-secondary">{category}</div>
    <div className="badge badge-primary">{type}</div>
    </div>
    <p>Price : {price}</p>
    <p>IMDB Rating : {rating} /10</p>
    <div className="card-actions justify-center">
      <Link >
         <button 
         onClick={()=>handleDelet(_id)} 
         className="btn btn-primary">Delete</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default MycartDeatils;