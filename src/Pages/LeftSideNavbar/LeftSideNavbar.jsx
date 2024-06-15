import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch('category.json')
        .then(res=> res.json())
        .then(data=> setCategory(data))
    },[])
    return (
        <div className="ml-6">
            {/* <h1 className="text-3xl font-bold ml-4 underline text-center">All Categories</h1> */}
               <div className=" text-center  text-3xl font-bold ">
               {
                category.map(category=> <Link className="block  font-semibold  py-4   bg-black text-white text-2xl hover:bg-green-800 px-10 mt-2    " key={category.id}> {category.name} </Link>)
            }
               </div>
        </div>
    );
};

export default LeftSideNav;