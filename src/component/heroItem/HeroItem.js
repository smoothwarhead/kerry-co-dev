import React, { useState } from "react";
import HeroItemCard from "./HeroItemCard";
import "./heroitem.css";
// import HeroItemData from "./HeroItemData";

function HeroItem() {
	const [heroDatas, setheroDatas] = useState([
		{
			id: "1",
			title: "COTTON CLASSICS",
			descprition: "100% cotton rib for all-day comfort.",
			image: "",
		},
		{
			id: "2",
			title: "COTTON STRETCH",
			descprition: "Added stretch for extra comfort and mobility.",
			image: "",
		},
		{
			id: "3",
			title: "EVERYDAY MICRO",
			descprition:
				"Brushed microfiber for a softer handfeel that wicks away moisture.",
			image: "",
		},
	]);
	return (
		<div className="hero-item">
			{setheroDatas}
			{heroDatas.map((heroData) => {
				return (
					<HeroItemCard
						title={heroData.title}
						descprition={heroData.descprition}
						image={heroData.image}
						key={heroData.id}
					/>
				);
			})}
		</div>
	);
}

export default HeroItem;
