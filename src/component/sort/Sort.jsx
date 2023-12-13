import React from "react";
import SortItems from "./sortitems/SortItems";
import "./sort.css";
import Button from "../button/Button";


function Sort({ setSlideSort }) {
	return (
		<div className="sort">
			<SortItems />
			
			<Button
				action={() => setSlideSort(false)}
				cName="sort-done-btn"
				name="Done"

			/>
		</div>
	);
}

export default Sort;
