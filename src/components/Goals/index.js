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
        
        
        <div className="rightsectiondarkgoalslast">
          <br/>
        <h3>EMPOWERMENT</h3>
        
        <br/>
        We believe everyone sitting in our chairs should have the opportunity to leave feeling their best and refreshed.<br/>
        <br/>
        Through our phenomenal hair, color, and skin services, Nova Ash Artistry empowers individuals to feel beautiful,
        confident, and relaxed.
        </div>

        <div className="leftsectionpicdarkgoalslast">
          <img src={empowerment} style={{ width: "80%", height: "80%" }} alt="Empowerment" title="Empowerment" />
        </div>

        <div className="leftsectionpicdarkgoalslast">
          <img src={education} style={{ width: "80%", height: "80%" }} alt="Education" title="Education" />
        </div>

        <div className="rightsectiondarkgoalslast">
          <br/>
        <h3>EDUCATION</h3>
        
        <br/>
        All Stylists and estheticians with Nova Ash Artistry recieves ongoing education to increase skills to
        provide the latest techniques and styles.<br/>
        <br/>
        All staff members also receive continuing education in customer service skills to ensure the best experience
        for our staff and guests.
        </div>

        <div className="rightsectiondarkgoalslast">
          <br/>
        <h3>INCLUSION</h3>
        
        <br/>
        We strive to make our services applicable to everyone. Nova Ash Artistry provides reasonable accomodation
        necessary to ensure a pleasant experience for all of our guests. This includes flexible salon availability
        for guests with sensory needs (quiet hours, softer lighting, softer music), adjustable salon chairs for
        mobility issues, texture flooring for visually impaired, gentle and fragrance free products for sensitivities/allergies.
        </div>

        <div className="leftsectionpicdarkgoalslast">
          <img src={inclusion} style={{ width: "80%", height: "80%" }} alt="Inclusion" title="Inclusion" />
        </div>

        <div className="leftsectionpicdarkgoalslast">
          <img src={employeewellness} style={{ width: "80%", height: "80%" }} alt="Employee Wellness" title="Employee Wellness" />
        </div>

        <div className="rightsectiondarkgoalslast">
          <br/>
        <h3>EMPLOYEE WELLNESS</h3>
        
        <br/>
        Employees with Nova Ash Artistry are the strength of the business! All employees are encouraged
        to have a robust work-life balance. Schedules are flexible to adjust for family needs.<br/>
        <br/>
        Ergonomics are critical to the well-being of all stylists. We provide adjustable adjustable height
        chairs, saddle stools, trolleys, and anti-fatigue mats. A variety of glove sizes and good ventilation
        are readily available in the color bar. A massage chair, calming music, and water cooler are at 
        all staff members' disposal in the employee break room.
        </div>
  
      </section>
  );

}

export default Goals;