import React from 'react';
import testimonial from "../../assets/images/testimonial.jpg";

function Testimonials(props) {
    return (
      <section>
  
        <div className="leftsection">
          <br/>
        <h1 className="mx-2" id="testimonials">Nova Ash Artistry Testimonials</h1>
        <br/>
        <br/>
        Summer did a fantastic job with my haircut!<br/>
            -- Jantzen
          
        </div>
        
        
        <div className="rightsection">
        <img src={testimonial} style={{ width: "100%", height: "100%" }} alt="Example" title="Example" />
          
        </div>
  
      </section>
    );
  
  }
  
  export default Testimonials;