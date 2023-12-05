import React from "react";
import Nav from "../Nav";

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
				Flower
			</div>

		</header>
	);
}

export default Header;