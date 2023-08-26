import React from "react";
import { useState } from "react";
import "./checkbox.css";

function CheckBox() {
	const [isChecked, setIschecked] = useState(false);
	return (
		<label>
			<input
				type="checkbox"
				onChange={() => {
					setIschecked(!isChecked);
				}}
			/>
			<svg
				className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
				aria-hidden="true"
				viewBox="0 0 512 512"
				fill={isChecked ? "#fff" : "none"}>
				<path
					d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
					strokeWidth="10"
					// stroke={isChecked ? "#fff" : "none"}
				/>
			</svg>
		</label>
	);
}

export default CheckBox;
