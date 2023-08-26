import React from "react";
import "./trackorder.css";
import SignInForm from "../../component/signinform/SignInForm";

function TrackOrder() {
	return (
		<div className="trackorder">
			<h1 className="trackorder-header">TRACK YOUR ORDER</h1>
			<form action="" className="trackorder-form">
				<input
					type="text"
					className="trackorder-input"
					placeholder="Order Number*"
				/>
				<p className="what-is-order">
					<u>Where is my order number?</u>
				</p>
				<input type="email" className="trackorder-input" placeholder="Email*" />
				<input
					type="text"
					className="trackorder-input"
					placeholder="Shipping Zip Code*"
				/>
				<button className="trackorder-form-btn">CHECK STATUS</button>
				<p className="privacy-policy">
					<u>Privacy policy</u>
				</p>
			</form>
			<div className="returning-customer">
				<h1 className="return-customer-header">RETURNING CUSTOMER</h1>
				<p className="return-customer-text">
					Sign in to view your order history.
				</p>
				<SignInForm />
			</div>
		</div>
	);
}

export default TrackOrder;
