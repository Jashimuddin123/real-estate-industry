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
        <div>
            <h1 className="text-3xl font-bold ml-4 underline text-center">All Categories{category.length}</h1>
               <div className=" text-start">
               {
                category.map(category=> <Link className="block text-xl font-semibold   py-6 bg-blue-500 hover:bg-white   border border-red-600 p-2 " key={category.id}> {category.name} </Link>)
            }
               </div>
        </div>
    );
};

export default LeftSideNav;