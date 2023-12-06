import React from "react";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "./sortitems.css";
import CheckBox from "../../checkbox/CheckBox";

function PackSize() {
	const [sortOPen, setSortOpen] = useState(false);

	const packSizes =  ["3 Pack", "2 Pack"];

	return (
		<div className={sortOPen ? "sort-item open" : "sort-item"}>
			<div className="sort-title" onClick={() => setSortOpen(!sortOPen)}>
				<p className="sort-title-p">Pack Size</p>
				<div className="sort-icon">
					<RiArrowDownSLine />
				</div>
			</div>
			<div className="flex-sort-content">

				{
					packSizes.map((pack, i) => (
						<div className="sort-btn" key={i}>
							{pack}
											
						</div>
					))
				}
				
				
			</div>
		</div>
	);
}

export default PackSize;
