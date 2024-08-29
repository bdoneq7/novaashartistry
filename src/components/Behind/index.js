import React from 'react';
import behindchair from "../../assets/images/profile2.jpg";

function Behind(props) {
    return (
      <section>
        
        <div className="mainlinktitle">
        <h1 id="about">BEHIND THE CHAIR</h1>
        </div>

        <div className="leftsectionpicdarkbehind">
          <img src={behindchair} style={{ width: "80%", height: "80%" }} alt="Behind the Chair - Summer Done" title="Behind the Chair - Summer Done" />
        </div>
        
        
        <div className="rightsectiondarkbehind">
          <br/>
        <h3>Summer Done</h3>
        <div class="summertitle">
        OWNER, STYLIST
        </div>
        <br/>
        My passion centers around people and helping them feel their best! This passion has led me on a social service journey
        through years of working with people of all ages and abilities, helping them succeed in their daily lives. I decided to
        begin a new adventure by enrolling at Empire Beauty School January of 2023. I know firsthand how a haircut, style, color,
        or skin care service can help turn a gloomy month into a confidence-building experience.<br/>
        <br/>
        While I have enjoyed many aspects of working behind the chair, my current favorite is working with different color clients, 
        finding vivid colors to express the individual personality. When I am not in the salon, I am a busy homeschool mom of three
        littles. Someday, when I grow up, I plan to expand Nova Ash Artistry to include art in many forms: ceramics, painting, still
        life, etc.
        </div>
  
      </section>
    );
  
  }
  
  export default Behind;