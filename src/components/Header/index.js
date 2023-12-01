import React from "react";
import Nav from "../Nav";
import logo from "../../assets/images/logocardsmall.jpg";

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
				></Nav>
			</div>
		</header>
	);
}

export default Header;