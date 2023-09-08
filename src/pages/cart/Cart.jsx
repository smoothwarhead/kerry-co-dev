import React from "react";
import "./cart.css";
import { ReactComponent as GreenTick } from "./greenmark.svg";
function Cart() {
	return (
		<div className="cart-page">
			<div className="cart-page-free-shipping">
				<h2 className="cart-page-free-h2">FREE SHIPPING</h2>
				<p className="cart-page-free-p">ON ORDERS OF $100+ </p>
				<span className="cart-page-span">
					<u>Details</u>
				</span>
			</div>
			<div className="cart-page-shopping-bag-container">
				<div className="cart-page-shopping-bag-sec">
					<div className="cart-page-shopping-bag-header-and-item">
						<h1 className="cart-page-shopping-bag-heading">SHOPPING BAG</h1>
						<p className="cart-page-shopping-bag-item-p">(2 items)</p>
					</div>
					<div className="cart-page-shopping-bag-product-display">
						<div className="cart-page-shopping-bag-product-img-con"></div>
						<div className="cart-page-shopping-bag-product-details-con">
							<div className="cart-page-shopping-bag-product-details">
								<div className="cart-page-shopping-bag-product-detail-title-con">
									<h3 className="cart-page-shopping-bag-product-title">
										EVERYDAY MICRO BOXER BRIEF 3-PACK
									</h3>
									<p className="cart-page-shopping-bag-product-color-and-size">
										White | M
									</p>
									<div className="cart-page-shopping-bag-product-buy-one">
										<div className="cart-page-shopping-bag-product-buy-one-svg">
											<GreenTick />
										</div>
										BUY ONE, GET ONE 50% OFF <u>Details</u>
									</div>
									<p className="cart-page-shopping-bag-product-in-stock">
										In Stock: Ships in 1-2 business days
									</p>
								</div>
								<div className="cart-page-shopping-bag-product-qty-and-price">
									<select
										name=""
										id=""
										className="cart-page-shopping-bag-product-qty-select">
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
										<option value="">4</option>
										<option value="">5</option>
										<option value="">6</option>
									</select>
									<p className="cart-page-shopping-bag-product-price">$23.00</p>
								</div>
							</div>
							<div className="cart-page-shopping-bag-product-edit-and-remove">
								<div className="cart-page-shopping-bag-product-edit">Edit</div>
								<div className="cart-page-shopping-bag-product-save-later-and-remove">
									<div className="cart-page-shopping-bag-product-save-later">
										Save for Later
									</div>
									|
									<div className="cart-page-shopping-bag-product-remove">
										Remove
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="cart-page-order-summary-container">
					<h1 className="cart-page-order-summary-title">ORDER SUMMARY</h1>
					<div className="cart-page-order-summary-product-accumination">
						<div className="cart-page-order-summary-subtotal">
							<p className="cart-page-order-summary-subtotal-text">Subtotal</p>
							<p className="cart-page-order-summary-subtotal-price">$69.00</p>
						</div>
						<div className="cart-page-order-summary-subtotal">
							<p className="cart-page-order-summary-subtotal-text">Shipping</p>
							<p className="cart-page-order-summary-subtotal-price">$9.95</p>
						</div>
						<div className="cart-page-order-summary-subtotal">
							<p className="cart-page-order-summary-subtotal-text">Tax</p>
							<p className="cart-page-order-summary-subtotal-price">
								Calculated in checkout
							</p>
						</div>
					</div>
					<div className="cart-page-order-summary-promo-code">PROMO CODE</div>
					<div className="cart-page-order-summary-estimated">
						<p className="cart-page-order-summary-estimated-total">
							Estimated Total
						</p>
						<p className="cart-page-order-summary-estimated-price">$78.95</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
