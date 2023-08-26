import React from "react";
import "./herosection.css";
import HeroItem from "../component/heroItem/HeroItem";
function HeroSection() {
	return (
		<div>
			<p className="hero-p">Boxer Briefs</p>
			<h1 className="hero-h1">MEN'S Boxer Briefs</h1>
			<HeroItem />
		</div>
	);
}

export default HeroSection;
