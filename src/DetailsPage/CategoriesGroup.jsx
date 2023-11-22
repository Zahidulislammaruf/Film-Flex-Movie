import { Link } from "react-router-dom";

const CategoriesGroup = ({brand}) => {
    const {_id,imageUrl,title,category,type,price,rating} = brand
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
    <div className="card-actions">
      <Link to={`/view/${_id}`}> <button className="btn btn-primary">Details</button></Link>
     <Link to={`/updatecard/${_id}`}>
     <button className="btn btn-accent">Update</button>
</Link>
    </div>
  </div>
</div>  
        </div>
    );
};

export default CategoriesGroup;