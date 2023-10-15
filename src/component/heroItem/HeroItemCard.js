import React from "react";
import "./heroitem.css";

function HeroItemCard({ item }) {
	return (
		<div className="hero-card">
			<div className="hero-card-image">
				<img src={item.image} alt={item.alt} />
			</div>
			<h2 className="hero-card-title"> {item.title} </h2>
			<p className="hero-card-description">{item.descprition}</p>
		</div>
	);
}

export default HeroItemCard;
