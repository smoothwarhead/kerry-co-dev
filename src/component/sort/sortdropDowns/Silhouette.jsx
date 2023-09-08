import React from "react";
import { useState } from "react";
import { ReactComponent as Arrowdown } from "./angle-down.svg";
import "./sortitems.css";
import CheckBox from "../../checkbox/CheckBox";

function Silhouette() {
	const [sortOPen, setSortOpen] = useState(false);

	return (
		<div className={sortOPen ? "sort-item open" : "sort-item"}>
			<div className="sort-title" onClick={() => setSortOpen(!sortOPen)}>
				<p className="sort-title-p">Silhouette</p>
				<div className="sort-icon">
					<Arrowdown />
				</div>
			</div>
			<div className="sort-content">
				<div>
					<div className="input-and-label">
						<label className="sort-check-label">
							<div className="sort-check">
								<CheckBox />
							</div>
							<p className="check-textt">Boxer Briefs</p>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Silhouette;
