import React from 'react';
import hair from "../../assets/images/hair.jpg";


function Contact(props) {
  return (
    <section>

      <div className="leftsection">
        <br/>
      <h1 className="mx-2" id="contact">Contact Summer</h1>
      <br/>
      <br/>
      813.541.3969<br/>
      
          <br/>
          
        
      </div>
      
      
      <div className="rightsection">
      <img src={hair} style={{ width: "100%", height: "100%" }} alt="Hair Color Example" title="Hair Color Example" />
        
      </div>

    </section>
  );

}

export default Contact;