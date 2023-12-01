import React from 'react';
import hair from "../../assets/images/hair.jpg";


function About(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">About Nova Ash Artistry</h1>

      <p>
        Nova Ash Artistry provides high quality hair styling by Summer Done.
        </p>
      
      <div className="my-2 mx-2">
      <img src={hair} className="my-2" style={{ width: "50%", height: "50%" }} alt="" title="" />
        
      </div>
    </section>
  );

  
}

export default About;