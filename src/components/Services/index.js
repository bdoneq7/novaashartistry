import React from 'react';
import hair from "../../assets/images/hair.jpg";


function Services(props) {
  return (
    <section>

      <div className="leftsection">
        <br/>
      <h1 className="mx-2" id="services">Nova Ash Artistry Services</h1>
      
          <br/>
          Haircut<br/>
          Hair Color
        
      </div>
      
      
      <div className="rightsection">
      <img src={hair} style={{ width: "100%", height: "100%" }} alt="Hair Color Example" title="Hair Color Example" />
        
      </div>

    </section>
  );

}

export default Services;