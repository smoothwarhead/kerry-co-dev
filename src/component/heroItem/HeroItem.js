import React from "react";
import HeroItemCard from "./HeroItemCard";
import "./heroitem.css";
// import HeroItemData from "./HeroItemData";
import HeroItemDatas from "./HeroItemDatas.json";

function HeroItem() {
	return (
		<div className="hero-item">
			{HeroItemDatas.map((item) => (
				<HeroItemCard key={item.id} item={item} />
			))}
		</div>
	);
}

export default HeroItem;
