import React from "react";
// import { useState } from "react";
// import "./sortitems.css";
import SortBy from "../sortdropDowns/SortBy";
import Price from "../sortdropDowns/Price";
import SizeDrop from "../sortdropDowns/SizeDrop";
import Silhouette from "../sortdropDowns/Silhouette";
import PackSize from "../sortdropDowns/PackSize";
import CollectionDrop from "../sortdropDowns/CollectionDrop";
// import { ReactComponent as Arrowdown } from "./angle-down.svg";

function SortItems() {
	// const [sortOPen, setSortOpen] = useState(false);
	return (
		// <div className={sortOPen ? "sort-item open" : "sort-item"}>
		// 	<div className="sort-title" onClick={() => setSortOpen(!sortOPen)}>
		// 		<p className="sort-title-p">{item.title}</p>
		// 		<div className="sort-icon">
		// 			<Arrowdown />
		// 		</div>
		// 	</div>
		// 	<div className="sort-content">
		// 		{item.childrens.map((pep, index) => {
		// 			return (
		// 				<div
		// 					key={index}
		// 					style={{
		// 						display: "flex",
		// 						background: "blue",
		// 					}}>
		// 					<div
		// 						className={pep.className}
		// 						style={{
		// 							width: 30,
		// 							height: 30,
		// 							background: "red",
		// 						}}>
		// 						<input
		// 							type={pep.inputType}
		// 							name={pep.name}
		// 							id={pep.id}
		// 							value={pep.value}
		// 							style={{
		// 								width: "100",
		// 								height: "100",
		// 								background: "green",
		// 							}}
		// 						/>
		// 					</div>
		// 					<label htmlFor={pep.id}>{pep.label}</label>
		// 				</div>
		// 			);
		// 		})}
		// 	</div>
		// </div>
		<>
			<SortBy />
			<Price />
			<SizeDrop />
			<PackSize />
		</>
	);
}

export default SortItems;
