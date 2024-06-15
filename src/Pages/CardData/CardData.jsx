import { Link } from "react-router-dom";

const CardData = ({ data }) => {
    const { estate_title,price, area, image, segment_name, description, id } = data;

    return (
      <div>
        <div className="card   text-center bg-slate-100 shadow-xl hover:bg-lime-500 border border-black ">
          <figure>
            <img className="w-72 mt-6 h-52"
              src= {image}
              alt="Shoes"
            />
          </figure>
          <p>{segment_name}</p>
          <div className="card-body">
           
            <h2 className="card-title">
            {estate_title}
             
            </h2>
            <p>{description}</p>
               <div className="flex">
               <p>{price}</p>
               <p>{area}</p>
               </div>
           <Link to={`/property/${id}`}><button className="btn btn-primary"> View Property</button></Link>
          
          </div>
        </div>
      </div>
    );
  };
  
  export default CardData;
  