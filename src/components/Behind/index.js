import React from 'react';
import head from "../../assets/images/head.jpg";

function Behind(props) {
    return (
      <section>
  
        <div className="leftsection">
          <br/>
        <h1 className="mx-2" id="about">Behind the Chair</h1>
        
        
          
        </div>
        
        
        <div className="rightsection">
        <img src={head} style={{ width: "100%", height: "100%" }} alt="Example" title="Example" />
          
        </div>
  
      </section>
    );
  
  }
  
  export default Behind;