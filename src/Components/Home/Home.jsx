import { useLoaderData } from "react-router-dom";
import Header from "../../Pages/Header/Header";
import LeftSideNavbar from "../../Pages/LeftSideNavbar/LeftSideNavbar";
import CardData from "../../Pages/CardData/CardData";
import BannerSlider from "../../Pages/BannerSlider/BannerSlider";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="">
            <Helmet>
              <title>
               home section here
              </title>
            </Helmet>
           <Header></Header>
           <BannerSlider></BannerSlider>
            <div className="grid grid-cols-1 md:grid-cols-4  gap-6  mt-10">
              <div className=" min-h-screen">
            <LeftSideNavbar></LeftSideNavbar>
              </div>

            <div className="col-span-3 min-h-screen">
                
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
  
      {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;