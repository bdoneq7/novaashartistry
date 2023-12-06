import React from 'react';
import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3.jpg";


function Portfolio(props) {
  return (
    <section>

<div className="mainlinktitle">
        <h1 id="about">PORTFOLIO</h1>
        </div>
        

        <div className="sectionpicdarkport">
          <img src={project1} style={{ width: "80%", height: "80%" }} alt="Empowerment" title="Empowerment" />
        </div>

        <div className="sectionpicdarkport">
          <img src={project2} style={{ width: "80%", height: "80%" }} alt="Education" title="Education" />
        </div>

        <div className="sectionpicdarkport">
          <img src={project3} style={{ width: "80%", height: "80%" }} alt="Education" title="Education" />
        </div>


  
      </section>
    
  );

}

export default Portfolio;