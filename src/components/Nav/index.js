import React from "react";


function Nav(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "home" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("home")}>Home</span>
				</li>
				<li className={currentTab === "behind" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("behind")}>Behind the Chair</span>
				</li>
				<li className={currentTab === "goals" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("goals")}>Testimonials</span>
				</li>
				<li className={currentTab === "services" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("services")}>Services</span>
				</li>
				<li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
				</li>
				

			</ul>
		</nav>
	);
}

export default Nav;