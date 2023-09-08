import React from "react";
import { useState } from "react";
import { ReactComponent as Arrowdown } from "./angle-down.svg";
import "./sortitems.css";
function SizeDrop() {
	const [sortOPen, setSortOpen] = useState(false);

	return (
		<div className={sortOPen ? "sort-item open" : "sort-item"}>
			<div className="sort-title" onClick={() => setSortOpen(!sortOPen)}>
				<p className="sort-title-p">Size</p>
				<div className="sort-icon">
					<Arrowdown />
				</div>
			</div>
			<div className="sort-content">
				<div>
					<div className="input-and-label">
						<div className="size-btn-con">
							<button className="size-drop-btn">S</button>
							<button className="size-drop-btn">M</button>
							<button className="size-drop-btn">L</button>
							<button className="size-drop-btn">XL</button>
							<button className="size-drop-btn">XXL</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SizeDrop;
