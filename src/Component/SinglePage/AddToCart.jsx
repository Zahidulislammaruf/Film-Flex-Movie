import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddToCart = () => {
  
  const {user} = useContext(AuthContext)
  const userName = user.displayName

  const handleAddCart = e =>{
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
    const cartInfo = {userName, title,imageUrl,category,type,price,description,rating}
    console.log(cartInfo)
    //send Data 
    fetch('https://flim-flex-5nf5oy2nf-zahidul-islams-projects.vercel.app/film',{
      method:'POST' ,
           headers : {
            'content-type' : 'application/json'
           },
           body : JSON.stringify(cartInfo)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire(
          'Good job!',
          'You Added A Movie SuccessFully 😊',
          'success'
        )
      }
    })

  }
    return (
        <div className=" conatiner mx-auto w-2/4">
            <div>
                <h2 className=" text-2xl text-white text-center">Add  Your Fevrate Movie</h2>
            </div>
            <div className="card-body">
          
      <form onSubmit={handleAddCart}>
        <div className="form-control">
          <label  className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name="imageUrl" placeholder="Image Url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Streaming Platforms</span>
          </label>
          <input type="text" name="category" placeholder="Netflix,Disney,HBO GO etc" className="input input-bordered" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" name="type" placeholder="Movie,Webseries,Animation etc" className="input input-bordered" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input type="text" name="description" placeholder="Short Description" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">IMDB Rating</span>
          </label>
          <input type="text" name="rating" placeholder="IMDB Rating" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add To Store</button>
        </div>
      </form>
    </div>
  </div>

    );
};

export default AddToCart;