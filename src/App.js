import "./index.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
	const [currentTab, setCurrentTab] = useState("home");

	const renderTab = () => {
		switch (currentTab) {
			case "home":
				return <Home />;
			case "about":
				return <About />;
			case "services":
				return <Services />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
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