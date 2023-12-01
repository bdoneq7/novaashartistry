import React from 'react';
import hair from "../../assets/images/hair.jpg";


function Services(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">Nova Ash Artistry Services</h1>

      <p>
        Nova Ash Artistry provides high quality hair styling by Summer Done.
        </p>
      
      <div className="my-2 mx-2">
      <img src={hair} className="my-2" style={{ width: "50%", height: "50%" }} alt="" title="" />
        
      </div>
    </section>
  );

}

export default Services;