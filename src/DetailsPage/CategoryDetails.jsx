import { Link } from "react-router-dom";

const CategoryDetails = ({categori}) => {
 
    const {id,category,img} = categori

    return (
      
        <div >
          <Link to={`/category/${category}`}>
           <div className="card bg-white  shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={img} alt="Shoes" className="rounded-xl w-24" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-black">{category}</h2>
    
  </div>
</div> 
</Link>
        </div>
    );
};

export default CategoryDetails;