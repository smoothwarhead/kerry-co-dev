import React from "react";
import { useState } from "react";
import { ReactComponent as Arrowdown } from "./angle-down.svg";
import "./sortitems.css";
import CheckBox from "../../checkbox/CheckBox";

function PackSize() {
	const [sortOPen, setSortOpen] = useState(false);

	return (
		<div className={sortOPen ? "sort-item open" : "sort-item"}>
			<div className="sort-title" onClick={() => setSortOpen(!sortOPen)}>
				<p className="sort-title-p">Pack Size</p>
				<div className="sort-icon">
					<Arrowdown />
				</div>
			</div>
			<div className="sort-content">
				<div className="input-and-label">
					<label className="sort-check-label">
						<div className="sort-check">
							<CheckBox />
						</div>
						<p className="check-textt">1</p>
					</label>
				</div>
				<div className="input-and-label">
					<label className="sort-check-label">
						<div className="sort-check">
							<CheckBox />
						</div>
						<p className="check-textt">2</p>
					</label>
				</div>
				<div className="input-and-label">
					<label className="sort-check-label">
						<div className="sort-check">
							<CheckBox />
						</div>
						<p className="check-textt">3</p>
					</label>
				</div>
				<div className="input-and-label">
					<label className="sort-check-label">
						<div className="sort-check">
							<CheckBox />
						</div>
						<p className="check-textt">4</p>
					</label>
				</div>
				<div className="input-and-label">
					<label className="sort-check-label">
						<div className="sort-check">
							<CheckBox />
						</div>
						<p className="check-textt">5</p>
					</label>
				</div>
			</div>
		</div>
	);
}

export default PackSize;
