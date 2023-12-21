import React from "react";
import instagrampic from "../../assets/images/instagrampic.png";
import facebookpic from "../../assets/images/facebookpic.png";

function Footer() {
	return (
		<footer className="footer">
			<br/>

			<div class="footersection">
				SCHEDULE YOUR<br/>
				RESERVATION<br/>
				<br/>
				813.541.3969<br/>
				NovaAshArtistry@gmail.com<br/>
				<br/>
				Contact Us Today
			</div>
			
			<div class="footersection">
				OUR ADDRESS<br/>
				<br/>
				123 Sassennch Dr.<br/>
				Plant City, FL 33563
			</div>
			
			<div class="footersection">
			SOCIAL MEDIA<br/>
			<br/>
			<a href="https://www.instagram.com/love.summer.beauty/">
			<img src={instagrampic} style={{ width: "11%", height: "30%" }} alt="Instagram" title="Instagram" />
			</a>

			<br/>
			<br/>
			<a href="https://www.facebook.com/profile.php?id=61554933895267">
			<img src={facebookpic} style={{ width: "10.5%", height: "30%" }} alt="Facebook" title="Facebook" />
			</a>
			
			</div>
			
			<div class="footersection">
				OUR HOURS<br/>
				<br/>
				Monday: Closed<br/>
				Tuesday: 10 am to 8 pm<br/>
				Wednesday: 10 am to 8 pm<br/>
				Thursday: 10 am to 9 pm<br/>
				Friday: 10 am to 7 pm<br/>
				Saturday: 9 am to 6 pm<br/>
				Sunday: Closed<br/>
				
			</div>
			
		
		</footer>
	);
}

export default Footer;