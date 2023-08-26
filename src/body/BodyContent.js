import React from "react";
import HeroSection from "../herosection/HeroSection";
import "./bodycontent.css";
import Content from "../component/content/Content";

function BodyContent() {
	return (
		<>
			<div className="body-content">
				<HeroSection />
				<Content />
			</div>
		</>
	);
}

export default BodyContent;
