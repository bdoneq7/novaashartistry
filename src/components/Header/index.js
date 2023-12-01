import React from "react";
import Nav from "../Nav";
import logo from "../../assets/images/logocardsmaller.jpg";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div class="logodiv">
			<img src={logo} className="my-2" alt="Nova Ash Artistry" title="Nova Ash Artistry" />
			</div>
			<div class="linksdiv">
				<Nav
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}

					
				>

<div>
				<a
					href="https://www.linkedin.com/in/brian-done-9080b026/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/images/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>

				</Nav>

				

			</div>
		</header>
	);
}

export default Header;