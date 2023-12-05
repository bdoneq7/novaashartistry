import React from 'react';
import behindchair from "../../assets/images/behindchair.jpg";

function Behind(props) {
    return (
      <section>
  
        <div className="leftsection">
          <img src={behindchair} style={{ width: "70%", height: "70%" }} alt="Behind the Chair - Summer Done" title="Behind the Chair - Summer Done" />
        </div>
        
        
        <div className="rightsectiondark">
        <h1 className="mx-2" id="about">Behind the Chair</h1>
        <br/>
        Summer Done<br/>
        Owner, Stylist<br/>
        <br/>
        I have a passion for helping people feel their best! This has led me on a journey through the years of working of working with
        people of all ages and abilities, helping them live their daily lives or in a social service capacity.<br/>
        <br/>
        I decided to begin a new adventure by enrolling at the Empire Beauty School January of 2023. I know first hand how a haircut, style,
        color, or skin care service can help turn a gloomy month into a confidence building experience.<br/>
        <br/>
        While I have enjoyed many aspects of working behind the chair, I love to work with different color clients, finding vivid colors to
        express the individual personality.<br/>
        <br/>
        When I am not in the salon, I am a busy homeschool mom of three littles. Someday, when I grow up, I plan to expand Nova Ash Artistry
        to include art in many forms; ceramics, painting, still life, etc.
        </div>
  
      </section>
    );
  
  }
  
  export default Behind;