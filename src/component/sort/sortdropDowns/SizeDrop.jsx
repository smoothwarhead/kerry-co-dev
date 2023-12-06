import React from "react";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import "./sortitems.css";





function SizeDrop() {



	const [sortOPen, setSortOpen] = useState(false);


	const sizes = ["S", "M", "L", "XL", "XXL"];


	return (
		<div className={sortOPen ? "sort-item open" : "sort-item"}>
			<div className="sort-title" onClick={() => setSortOpen(!sortOPen)}>
				<p className="sort-title-p">Size</p>
				<div className="sort-icon">
					<RiArrowDownSLine />
				</div>
			</div>
			<div className="flex-sort-content">
				{
					sizes.map((size, i) => (
						<div className="sort-btn" key={i}>
							{size}
											
						</div>
					))
				}
			</div>
		</div>
	);
}

export default SizeDrop;
