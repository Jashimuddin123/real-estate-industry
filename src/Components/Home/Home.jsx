
const Home = () => {
    return (
        <div>
            
 
            <div className="grid grid-cols-1 md:grid-cols-3  gap-6 border">
              <div className="borer border-pink-400 min-h-screen">
                <h1>left navbar here</h1>
              <LeftSideNav ></LeftSideNav>
              </div>

            <div className="border border-blue-950 col-span-2 min-h-screen">
                 <h1>cart section</h1>
                     <div className="grid grid-cols-1 md:grid-cols-2">
                     {
                    data.map(singleData =><CardData 
                    key={singleData.id}
                    data={singleData}
                    ></CardData>)
                 }
                     </div>
            </div>
            
            
            </div> 
  

        </div>
    );
};

export default Home;