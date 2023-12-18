import React from 'react';
import homeback from "../../assets/images/homeback.jpg";
import aboutus from "../../assets/images/aboutus.png";


function Home(props) {
  return (
    <section>

      <div className="homesectionpic">
        <img src={homeback} style={{ width: "100%", height: "100%" }} alt="" title="" />
      </div>
      
      
      <div className="aboutussection">

      <div className="mainlinktitle">
        <h1 id="about">ABOUT US</h1>
        </div>

        <div className="leftsectionpicdark">
          <img src={aboutus} style={{ width: "90%", height: "92%" }} alt="About Us" title="About Us" />
        </div>

        <div className="rightsectiondark">
          <br/>
        <h3>BEHIND NOVA ASH</h3>
        
        <br/>
        Nova Ash was born out of the desire to be meaningful in the approach to cosmetology. One of the meanings of NOVA is 'new' and
        one of the origins of ASH is from the name 'Asher' or 'happy.' The leaves of the ash tree typically support rich and diverse 
        ground flora, by retaining more nutrients, and raising the pH level of the soil. Like the ash trees, Nova Ash Artistry strives
        to maintain and improve the health and strength of our guests' hair and skin, leaving them feeling beautiful, inside and out.
        <br/>
        <br/>
        Nova Ash Artistry is a limited liability company with a sole proprietor.
        </div>

      </div>

    </section>
  );

}

export default Home;