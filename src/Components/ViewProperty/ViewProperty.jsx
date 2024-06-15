
import { useLoaderData } from 'react-router-dom';

const ViewProperty = () => {
  const propertyData = useLoaderData();
  console.log('this is property',propertyData);
  const {area, image,description,estate_title, location,facilities,price,segment_name,status,
  } = propertyData
  return (
    <div className='max-w-3xl mx-auto text-center' >
         <img className='w-96 h-80 mx-auto rounded' src={image}/>
         <p>{segment_name}</p>
          <h1>{estate_title}</h1>
          <p>{description}</p>
          <p>{area}</p>
          <p>{location}</p>
          <p>{price}</p>
          <p>{facilities}</p>
          <p>{status}</p>
           <div>
            
           </div>
    </div>
  );
};

export default ViewProperty;
