import React from 'react';
import hair from "../../assets/images/hair.jpg";

function Testimonials(props) {
    return (
      <section>
  
        <div className="leftsection">
          <br/>
        <h1 className="mx-2" id="about">Nova Ash Artistry Testimonials</h1>
        
            
          
        </div>
        
        
        <div className="rightsection">
        <img src={hair} style={{ width: "100%", height: "100%" }} alt="Hair Color Example" title="Hair Color Example" />
          
        </div>
  
      </section>
    );
  
  }
  
  export default Testimonials;