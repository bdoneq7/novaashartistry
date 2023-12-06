import React from 'react';



function Services(props) {
  return (
    <section>

<div className="mainlinktitle">
        <h1 id="about">SERVICES</h1>
        </div>

        <div className="serviceslinktitle">
          
        * PRICES VARY DEPENDENT ON CONSULTATION *
        </div>

        <div className="servicessectiondark">
          
        <h3>HAIR SERVICES</h3>
        
        <div className="servicessectiondarktype">
        <ul>
          <li>Consulation</li>
          <li>Shampoo & Shear Cut</li>
          <li>Shampoo, Shear Cut, Style</li>
      </ul>
      </div>

      <div className="servicessectiondarkprice">
      FREE<br/>
      $45<br/>
      $60
      </div>



        </div>
        
        
        <div className="servicessectiondark">
          
        <h3>SPECIALIZED SERVICES</h3>
        
        <div className="servicessectiondarktype">
        <ul>
          <li>Consulation</li>
          <li>Flat Iron</li>
          <li>Perm</li>
      </ul>
      </div>

      <div className="servicessectiondarkprice">
        FREE<br/>
        $45<br/>
        $65+
      </div>
        
        </div>

    </section>
  );

}

export default Services;