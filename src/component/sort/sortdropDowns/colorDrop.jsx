import React from "react";
import { useState } from "react";
import { ReactComponent as Arrowdown } from "./angle-down.svg";
import "./sortitems.css";

function colorDrop() {
	const [sortOPen, setSortOpen] = useState(false);

	return (
		<div className={sortOPen ? "sort-item open" : "sort-item"}>
			<div className="sort-title" onClick={() => setSortOpen(!sortOPen)}>
				<p className="sort-title-p">Color</p>
				<div className="sort-icon">
					<Arrowdown />
				</div>
			</div>
			<div className="sort-content">
				<div>
					<div className="input-and-label">
						<div className="">
							<input type="radio" name="" value="" />
						</div>
						<label htmlFor="">$0 - $25</label>
					</div>
					<div className="input-and-label">
						<div className="">
							<input type="radio" name="" value="" />
						</div>
						<label htmlFor="">$25 - $50</label>
					</div>
					<div className="input-and-label">
						<div className="">
							<input type="radio" name="" value="" />
						</div>
						<label htmlFor="">$50 - $100</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default colorDrop;
