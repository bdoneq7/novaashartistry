import React from 'react';
import empowerment from "../../assets/images/empowerment.jpg";
import education from "../../assets/images/education.jpg";
import inclusion from "../../assets/images/inclusion.jpg";
import employeewellness from "../../assets/images/employeewellness.jpg";


function Goals(props) {
  return (
    <section>
        
        <div className="mainlinktitle">
        <h1 id="about">GOALS & OBJECTIVES</h1>
        </div>
        
        
        <div className="rightsectiondarkgoals">
          <br/>
        <h3>EMPOWERMENT</h3>
        
        <br/>
        We believe everyone sitting in our chairs should have the opportunity to leave feeling their best and refreshed.<br/>
        <br/>
        Through our phenomenal hair, color, and skin services, Nova Ash Artistry empowers individuals to feel beautiful,
        confident, and relazed.
        </div>

        <div className="leftsectionpicdarkgoals">
          <img src={empowerment} style={{ width: "80%", height: "80%" }} alt="Empowerment" title="Empowerment" />
        </div>

        <div className="leftsectionpicdarkgoals">
          <img src={education} style={{ width: "80%", height: "80%" }} alt="Education" title="Education" />
        </div>

        <div className="rightsectiondarkgoals">
          <br/>
        <h3>EDUCATION</h3>
        
        <br/>
        All Stylists and estheticians with Nova Ash Artistry will receive ongoing education, increasing skills to
        provide the latest techniques and styles.<br/>
        <br/>
        All staff will also receive continuing education in customer service skills, ensuring the best experience
        for our staff and guests.
        </div>

        <div className="rightsectiondarkgoals">
          <br/>
        <h3>INCLUSION</h3>
        
        <br/>
        We strive to make our services applicable to everyone. Nova Ash Artistry will provide reasonable accomodation
        necessary to ensure a pleasant experience for all of our guests.<br/>
        <br/>
        This may include flexible salon availability for guests with sensory needs (quiet hours, softer ligthing, softer
        music), adjustable salon chairs for mobility issues, textured flooring for the visually impaired, gentle and 
        fragrance free products for sensitivities/allergies.
        </div>

        <div className="leftsectionpicdarkgoals">
          <img src={inclusion} style={{ width: "80%", height: "80%" }} alt="Inclusion" title="Inclusion" />
        </div>

        <div className="leftsectionpicdarkgoalslast">
          <img src={employeewellness} style={{ width: "80%", height: "80%" }} alt="Employee Wellness" title="Employee Wellness" />
        </div>

        <div className="rightsectiondarkgoalslast">
          <br/>
        <h3>EMPLOYEE WELLNESS</h3>
        
        <br/>
        Employees with Nova Ash Artistry are the strength of the business! All employees will be encouraged
        to have a robust work-life balance. Schedules are flexible to adjust for family needs.<br/>
        <br/>
        Ergonomics are critical to the well being of all stylists. We will provide adjustable adjustable height
        chairs, saddle stools, trolleys, and anti-fatigue mats. A variety of glove sizes and good ventilation
        will be readily available in the color bar. A massage chair, calming music, and water cooler will be at 
        all staff disposal in the employee break room.
        </div>
  
      </section>
  );

}

export default Goals;