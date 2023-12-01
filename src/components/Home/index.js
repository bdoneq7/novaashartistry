import React from 'react';
import hair from "../../assets/images/hair.jpg";


function Home(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">Nova Ash Artistry Home</h1>

      <div className="leftsection">
        <p>
          Nova Ash Artistry provides high quality hair styling by Summer Done.
        </p>
      </div>
      
      
      <div className="rightsection">
      <img src={hair} className="my-2" style={{ width: "50%", height: "50%" }} alt="" title="" />
        
      </div>
      
    </section>
  );

}

export default Home;