import React from 'react';
import testimonial from "../../assets/images/testimonial.jpg";

function About(props) {
    return (
      <section>
  
        <div className="leftsection">
          <br/>
        <h1 className="mx-2" id="about">About Nova Ash Artistry</h1>
        
        
          
        </div>
        
        
        <div className="rightsection">
        <img src={testimonial} style={{ width: "100%", height: "100%" }} alt="Example" title="Example" />
          
        </div>
  
      </section>
    );
  
  }
  
  export default About;