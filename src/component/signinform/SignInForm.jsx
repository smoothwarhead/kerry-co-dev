import React from "react";
import "./signinform.css";
import CheckBox from "../checkbox/CheckBox";

function SignInForm() {
	return (
		<form className="signinform">
			<input type="email" className="signin-input" placeholder="Email*" />
			<input type="password" className="signin-input" placeholder="Password*" />
			<div className="signin-check-parent-con">
				<div className="signin-check">
					<div className="signin-check-con">
						<CheckBox />
					</div>
					<p className="remember-me">Remember me</p>
				</div>
				<p className="forgot-password">
					<u>Forgot Password?</u>
				</p>
			</div>
			<button className="signin-btn">SIGN IN</button>
		</form>
	);
}

export default SignInForm;
