import React from 'react';
import homeback from "../../assets/images/homeback.jpg";


function Home(props) {
  return (
    <section>

      <div className="homesectionpic">
        <img src={homeback} style={{ width: "100%", height: "100%" }} alt="" title="" />
      </div>
      
      
      <div className="aboutussection">
      About Us Section Info
      </div>

    </section>
  );

}

export default Home;