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
            <div className="grid grid-cols-1 md:grid-cols-3  gap-6 border">
              <div className="borer border-pink-400 min-h-screen">
                <h1>left navbar here</h1>
            <LeftSideNavbar></LeftSideNavbar>
              </div>

            <div className="border border-blue-950 col-span-2 min-h-screen">
                 <h1>cart section</h1>


                 <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        data.map(singleData=><CardData
                        key={singleData.id}
                        data={singleData}
                        >

                        </CardData>)
                    }
                 </div>
                     {/* <div className="grid grid-cols-1 md:grid-cols-2">
                     {
                    data.map(singleData =><CardData 
                    key={singleData.id}
                    data={singleData}
                    ></CardData>)
                 }
                     </div> */}
            </div>
            
            
            </div> 
  

        </div>
    );
};

export default Home;