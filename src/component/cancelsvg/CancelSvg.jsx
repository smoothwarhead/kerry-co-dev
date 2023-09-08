import { ReactComponent as Cancel } from "./times.svg";
import React from "react";

function CancelSvg() {
	return (
		<div
			className="cancel-con"
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
				width: "100%",
				background: "#e4e4e496",
				// background: "purple",
				borderRadius: "50%",
			}}>
			<Cancel
				style={{
					height: "20",
					width: "20",
					fill: "#00174f",
				}}
			/>
		</div>
	);
}

export default CancelSvg;
