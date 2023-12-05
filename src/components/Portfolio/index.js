import React from 'react';
import sample from "../../assets/images/sample.jpg";


function Portfolio(props) {
  return (
    <section>

      <div className="leftsection">
        <br/>
      <h1 className="mx-2" id="portfolio">Portfolio</h1>
      
          <br/>
          
        
      </div>
      
      
      <div className="rightsection">
      <img src={sample} style={{ width: "100%", height: "100%" }} alt="Hair Color Example" title="Hair Color Example" />
        
      </div>

    </section>
    
  );

}

export default Portfolio;