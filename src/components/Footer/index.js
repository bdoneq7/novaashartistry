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
				Contact Summer Today
			</div>
			
			<div class="footersection">
				LOCATION<br/>
				<br/>
				
				Plant City, FL 33565
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
				SERVICES<br/>
				<br/>
				By Appointment Only
				
			</div>
			
		
		</footer>
	);
}

export default Footer;