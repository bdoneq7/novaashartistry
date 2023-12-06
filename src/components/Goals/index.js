import React from 'react';
import goalsone from "../../assets/images/goals1.jpg";
import education from "../../assets/images/education.jpg";


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

        <div className="leftsectionpicdark">
          <img src={education} style={{ width: "80%", height: "80%" }} alt="Education" title="Education" />
        </div>

        <div className="rightsectiondark">
          <br/>
        <h3>EDUCATION</h3>
        
        <br/>
        All Stylists and estheticians with Nova Ash Artistry will receive ongoing education, increasing skills to
        provide the latest techniques and styles.<br/>
        <br/>
        All staff will also receive continuing education in customer service skills, ensuring the best experience
        for our staff and guests.
        </div>
  
      </section>
  );

}

export default Goals;