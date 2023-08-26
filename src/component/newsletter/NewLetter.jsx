import React from "react";
import "./newsletter.css";
import CheckBox from "../checkbox/CheckBox";

function NewLetter() {
	return (
		<div className="newsletter">
			<div className="join">
				<h2 className="join-header">JOIN THE HILFIGER CLUB</h2>
				<p className="join-p">For a 20% off welcome offer and much more</p>
			</div>
			<form className="newsletter-form">
				<div className="email-con">
					<input type="email" className="email" placeholder="Your email" />
					<button className="newsletter-btn">SUBSCRIBE</button>
				</div>
				<div className="check-cat">
					<div className="check-container">
						<CheckBox />
					</div>
					<p className="check-text">
						I would like to join the Hilfiger Club and receive updates on the
						latest products and promotions via email or other channels. Please
						see our <u>Privacy Policy</u> for more information. By submitting my
						information I agree to the <u>Terms & Conditions.</u>
					</p>
				</div>
			</form>
		</div>
	);
}

export default NewLetter;
