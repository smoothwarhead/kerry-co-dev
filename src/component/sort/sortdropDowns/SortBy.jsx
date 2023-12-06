import React from "react";
import { useState } from "react";
import "./sortitems.css";
import { RiArrowDownSLine } from "react-icons/ri";

function SortBy() {
	const [sortOPen, setSortOpen] = useState(false);

	return (
		<div className={sortOPen ? "sort-item open" : "sort-item"}>
			<div className="sort-title" onClick={() => setSortOpen(!sortOPen)}>
				<p className="sort-title-p">Sort By</p>
				<div className="sort-icon">
					<RiArrowDownSLine />

				</div>
			</div>
			<div className="sort-content">
				<div className="input-and-label">
					<div className="radio-input">
						<input
							type="radio"
							name="sortBy"
							value="Recommended"
							id="Recommended"
						/>
					</div>
					<label className="input-label" htmlFor="Recommended">
						Recommended
					</label>
				</div>
				<div className="input-and-label">
					<div className="radio-input">
						<input type="radio" name="sortBy" value="Newest" id="Newest" />
					</div>
					<label className="input-label" htmlFor="Newest">
						Newest
					</label>
				</div>
				<div className="input-and-label">
					<div className="radio-input">
						<input type="radio" name="sortBy" value="l-h" id="l-h" />
					</div>
					<label className="input-label" htmlFor="l-h">
						Price Low To High
					</label>
				</div>
				<div className="input-and-label">
					<div className="radio-input">
						<input type="radio" name="sortBy" value="h-l" id="h-l" />
					</div>
					<label className="input-label" htmlFor="h-l">
						Price High To Low
					</label>
				</div>
			</div>
		</div>
	);
}

export default SortBy;
