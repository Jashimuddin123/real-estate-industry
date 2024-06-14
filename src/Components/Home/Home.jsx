import { useLoaderData } from "react-router-dom";
import Header from "../../Pages/Header/Header";
import LeftSideNavbar from "../../Pages/LeftSideNavbar/LeftSideNavbar";
import CardData from "../../Pages/CardData/CardData";

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            
           <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-4  gap-6 border">
              <div className="borer border-pink-400 min-h-screen">
            <LeftSideNavbar></LeftSideNavbar>
              </div>

            <div className="border border-blue-950 col-span-3 min-h-screen">
                

                 <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {
                        data.map(singleData=><CardData
                        key={singleData.id}
                        data={singleData}
                        >

                        </CardData>)
                    }
                 </div>
            
            </div>
            
            
            </div> 
  

        </div>
    );
};

export default Home;