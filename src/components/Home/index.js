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


      <div className="reviewsection">

      <div className="mainlinktitle">
        <h1 id="about">REVIEWS</h1>
        </div>

      <div className="reviewsectiontext">
        Summer did a fantastic job cutting my hair! She listened to me describe what I wanted and she went above and beyond
        my expectations, ensuring my hair was the correct length, and that the extra thickness was removed. It was a great
        experience!<br/>
        - Lisa 
      </div>

      <div className="reviewsectiontext">
        Summer cut my pixie. She was very professional. Her customer care was amazing, the same as when she has given me facials.
        She is always concerned with my level of comfort asks how I am doing. Summer gives great attention to detail. She worked
        with the way my hair grows as she cut and thinned it beautifully. A pixie isn't an easy cut and she did an excellent job!
        <br/>
        - Jantzen
      </div>

      <div className="reviewsectiontext">
        I went to my last stylist for many years. After her passing a couple of years ago, I had a difficult time finding a stylist
        who did my hair in the style I liked. I appreciate how Summer took the time to listen to my concerns and worked hard to achieve
        the right cut and color for me. I will definitely be a returning client.
      <br/>
        - Martha
      </div>

      <div className="reviewsectiontext">
        I have been a specific type of red since I was a teenager. I am so happy that Summer was able to get the correct color and mix
        it in the perfect proportions. My cut and color came out excellent.
        <br/>
        - Jennifer
      </div>

      </div>

    </section>
  );

}

export default Home;