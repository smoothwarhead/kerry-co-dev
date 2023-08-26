import React from "react";
import "./signup.css";
import CheckBox from "../../component/checkbox/CheckBox";

function SignUp() {
	return (
		<div className="signup">
			<h1 className="signup-header">CREATE AN ACCOUNT</h1>
			<form action="" className="signup-form">
				<input type="text" className="signup-input" placeholder="First Name*" />
				<input type="text" className="signup-input" placeholder="Last Name*" />
				<input type="email" className="signup-input" placeholder="Email*" />
				<input
					type="password"
					className="signup-input"
					placeholder="Create a Password*"
				/>
				<div className="signup-check">
					<div className="signup-checkbox-con">
						<CheckBox />
					</div>
					<div className="signup-check-text">
						I would like to receive updates on the latest products and
						promotions via email or other channels. Please see our
						<u>Privacy Policy</u> for more information.
					</div>
				</div>
				<button type="submit" className="signup-submit-btn">
					CREATE ACCOUNT
				</button>
				<p className="agree-to-terms">
					By submitting my information I agree to the
					<u>Term and Conditions.</u>
				</p>
			</form>
		</div>
	);
}

export default SignUp;
