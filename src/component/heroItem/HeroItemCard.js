import React from "react";
import "./heroitem.css";

function HeroItemCard(props) {
	return (
		<div className="hero-card">
			<div className="hero-card-image"></div>
			<h2 className="hero-card-title"> {props.title} </h2>
			<p className="hero-card-description">{props.descprition}</p>
		</div>
	);
}

export default HeroItemCard;
