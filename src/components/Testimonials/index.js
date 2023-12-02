import React from 'react';
import testimonial from "../../assets/images/testimonial.jpg";

function Testimonials(props) {
    return (
      <section>
  
        <div className="leftsection">
          <br/>
        <h1 className="mx-2" id="testimonials">Nova Ash Artistry Testimonials</h1>
        
        Summer was very meticulous when coloring my hair and I love the color!<br/>
            -- Jasimne
          
        </div>
        
        
        <div className="rightsection">
        <img src={testimonial} style={{ width: "100%", height: "100%" }} alt="Example" title="Example" />
          
        </div>
  
      </section>
    );
  
  }
  
  export default Testimonials;