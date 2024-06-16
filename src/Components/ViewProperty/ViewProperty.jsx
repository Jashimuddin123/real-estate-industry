
import { useLoaderData } from 'react-router-dom';

const ViewProperty = () => {
  const propertyData = useLoaderData();
  console.log('this is property',propertyData);
  const {area, image,description,estate_title, location,facilities,price,segment_name,status,
  } = propertyData
  return (
    <div className='max-w-xl  mx-auto text-center border border-red-500 shadow-2xl mt-6 py-4 px-10' >
         <img className='w-96 h-80 mx-auto rounded' src={image}/>
         <p className='text-gray-600 text-lg'>{segment_name}</p>
          <h1 className='text-xl font-bold'>{estate_title}</h1>
          <p>{description}</p>
          <p>{facilities}</p>
          <p>{area}</p>
          <p className='text-lg text-gray-700'>Price: {price}</p>
        
          <p className='font-bold'>{status}</p>
          <p>{location}</p>
           <div>
        
           </div>
    </div>
  );
};

export default ViewProperty;
