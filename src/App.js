import "./index.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Behind from "./components/Behind";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Goals from "./components/Goals";

function App() {
	const [currentTab, setCurrentTab] = useState("home");

	const renderTab = () => {
		switch (currentTab) {
			case "home":
				return <Home />;
			case "behind":
				return <Behind />;
			case "goals":
				return <Goals />;	
			case "services":
				return <Services />;
			case "portfolio":
				return <Portfolio />;	
	
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;