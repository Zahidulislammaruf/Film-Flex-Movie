import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCard = () => {
    const previousData = useLoaderData()
    const {_id,imageUrl,title,category,type,price,rating,description} = previousData

    const handleupdateCart = e =>{
        e.preventDefault()
        const form = e.target 
    const title = form.title.value 
    
    const imageUrl = form.imageUrl.value 
    const Uppercategory = form.category.value
    const category = Uppercategory.toLowerCase();
    const type = form.type.value 
    const price = form.price.value 
    const description = form.description.value 
    const rating = form.rating.value 
    const updateInfo = {title,imageUrl,category,type,price,description,rating}
    console.log(updateInfo)
    fetch(`https://flim-flex-5nf5oy2nf-zahidul-islams-projects.vercel.app/film/card/${_id}`,{
      method:'PUT' ,
           headers : {
            'content-type' : 'application/json'
           },
           body : JSON.stringify(updateInfo)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        Swal.fire(
          'Good job!',
          'You Update A Movie SuccessFully 😊',
          'success'
        )
      }
    })



    }

    return (
    
        <div>
            
            <div className=" conatiner mx-auto w-2/4 mt-10">
            <div>
                <h2 className=" text-2xl text-white text-center">Update Information About {title}</h2>
            </div>
            <div className="card-body">
          
      <form onSubmit={handleupdateCart}>
        <div className="form-control">
          <label  className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" defaultValue={title} name="title" placeholder="Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name="imageUrl" placeholder="Image Url" defaultValue={imageUrl} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Streaming Platforms</span>
          </label>
          <input type="text" defaultValue={category} name="category" placeholder="Netflix,Disney,HBO GO etc" className="input input-bordered" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" defaultValue={type} name="type" placeholder="Movie,Webseries,Animation etc" className="input input-bordered" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input type="text" name="description" placeholder="Short Description" defaultValue={description} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">IMDB Rating</span>
          </label>
          <input type="text" name="rating" placeholder="IMDB Rating" defaultValue={rating} className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  </div>
        </div>
    );
};

export default UpdateCard;