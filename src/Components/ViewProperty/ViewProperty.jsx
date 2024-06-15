
import { useLoaderData } from 'react-router-dom';

const ViewProperty = () => {
  const propertyData = useLoaderData();
  return (
    <div>
      <h1>Property Details</h1>
      <div className="card">
        <h2>{propertyData.title}</h2>
        <p>{propertyData.description}</p>
        <p>Price: ${propertyData.price}</p>
        <img src={propertyData.imageUrl} alt={propertyData.title} />
        {/* Add more property details as needed */}
      </div>
    </div>
  );
};

export default ViewProperty;
