import React from "react";
import instagrampic from "../../assets/images/instagram.png";

function Footer() {
	return (
		<footer className="footer">
			<br/>

			<div class="footersection">
				SCHEDULE YOUR<br/>
				RESERVATION<br/>
				<br/>
				813.541.3969<br/>
				Contact Us Today
			</div>
			
			<div class="footersection">
				123 Sassennch Dr.<br/>
				Lallybroch, FL 12345
			</div>
			
			<div class="footersection">

			<a href="https://www.instagram.com/love.summer.beauty/">
			<img src={instagrampic} style={{ width: "100%", height: "100%" }} alt="Instagram" title="Instagram" />
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
				Sunday: Closed
			</div>
			
		
		</footer>
	);
}

export default Footer;