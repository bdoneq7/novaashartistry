import React from "react";
import Nav from "../Nav";
import flower from "../../assets/images/flower.png";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>

			<div class="logodiv">
				<span class="logotext">Nova Ash Artistry</span>
			</div>

			<div class="linksdiv">
				<Nav
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				>	
				</Nav>
			</div>

			<div class="flowerdiv">
			<img src={flower} style={{ width: "20%", height: "20%" }} alt="Nova Ash Artistry" title="Nova Ash Artistry" />
			</div>

		</header>
	);
}

export default Header;