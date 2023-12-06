import React from "react";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "./sortitems.css";

function Price() {
	const [sortOPen, setSortOpen] = useState(false);

	return (
		<div className={sortOPen ? "sort-item open" : "sort-item"}>
			<div className="sort-title" onClick={() => setSortOpen(!sortOPen)}>
				<p className="sort-title-p">Price</p>
				<div className="sort-icon">
					<RiArrowDownSLine />
				</div>
			</div>
			<div className="sort-content">
				<div className="input-and-label">
					<div className="radio-input">
						<input
							type="radio"
							name="price"
							value="0-to-25"
							id="zero-to-twentyfive"
						/>
					</div>
					<label className="input-label" htmlFor="zero-to-twentyfive">
						$0 - $25
					</label>
				</div>
				<div className="input-and-label">
					<div className="radio-input">
						<input
							type="radio"
							name="price"
							value="25-to-50"
							id="twentyfive-to-fifty"
						/>
					</div>
					<label className="input-label" htmlFor="twentyfive-to-fifty">
						$25 - $50
					</label>
				</div>
				<div className="input-and-label">
					<div className="radio-input">
						<input
							type="radio"
							name="price"
							value="50-to-100"
							id="fifty-to-hundred"
						/>
					</div>
					<label className="input-label" htmlFor="fifty-to-hundred">
						$50 - $100
					</label>
				</div>
			</div>
		</div>
	);
}

export default Price;
