import React from 'react';
import hair from "../../assets/images/hair.jpg";


function Home(props) {
  return (
    <section>

      <div className="leftsection">
      <h1 className="mx-2" id="about">Nova Ash Artistry</h1>
      
          <br/>
          Nova Ash Artistry provides high quality hair styling by Summer Done.
        
      </div>
      
      
      <div className="rightsection">
      <img src={hair} className="my-2" style={{ width: "100%", height: "100%" }} alt="" title="" />
        
      </div>

    </section>
  );

}

export default Home;