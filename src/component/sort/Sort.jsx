import React, { useContext } from "react";
import SortItems from "./sortitems/SortItems";
import "./sort.css";
import Button from "../button/Button";
import { ViewContext } from "../../context/ViewContext";





function Sort({ setSlideSort }) {

	const { mobile } = useContext(ViewContext)

	return (
		<div className="sort">
			<SortItems />
			
			{mobile &&
				<Button
					action={() => setSlideSort(false)}
					cName="sort-done-btn"
					name="Done"

				/>
			}
		</div>
	);
}

export default Sort;
