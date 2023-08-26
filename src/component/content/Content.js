import React from "react";
import Sort from "../sort/Sort";
import Product from "../product/Product";
import "./content.css";

function Content() {
	return (
		<div className="content">
			<p className="available-item">69 Items</p>
			<div className="content-container">
				<Sort />
				<Product />
			</div>
		</div>
	);
}

export default Content;
