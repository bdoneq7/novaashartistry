import React from 'react';
import goalsone from "../../assets/images/goals1.jpg";


function Goals(props) {
  return (
    <section>
        
        <div className="mainlinktitle">
        <h1 id="about">GOALS & OBJECTIVES</h1>
        </div>
        
        
        <div className="rightsectiondark">
          <br/>
        <h3>EMPOWERMENT</h3>
        
        <br/>
        We believe everyone sitting in our chairs should have the opportunity to leave feeling their best and refreshed.<br/>
        <br/>
        Through our phenomenal hair, color, and skin services, Nova Ash Artistry empowers individuals to feel beautiful,
        confident, and relazed.
        </div>

        <div className="leftsectionpicdark">
          <img src={goalsone} style={{ width: "80%", height: "80%" }} alt="Empowerment" title="Empowerment" />
        </div>
  
      </section>
  );

}

export default Goals;