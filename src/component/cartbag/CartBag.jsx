import React from "react";
import { Link } from "react-router-dom";
import CancelSvg from "../cancelsvg/CancelSvg";
import "./cartBag.css";

function CartBag({ ClosecartBag }) {
	return (
		<div className="cartbag-overlay">
			<div className="cartbag-container">
				<div className="cartbag-title-container">
					<h2 className="cartbag-title">SHOPPING BAG</h2>
					<div className="cartbag-cancel-btn" onClick={ClosecartBag}>
						<CancelSvg />
					</div>
				</div>
				<div className="cartbag-product-container">
					<div className="cartbag-product-sub-container">
						<div className="cartbag-product-item">
							<div className="cartbag-product-item-img-con"></div>
							<div className="cartbag-product-item-details">
								<h2 className="cartbag-product-item-title">
									EVERYDAY MIRCO BOXER BRIEF 3-PACK
								</h2>
								<p className="cartbag-product-item-color-and-size">White | M</p>
								<p className="cartbag-product-item-price">$23.00</p>
								<div className="cartbag-product-item-qty-and-remove-item">
									<select name="" className="cartbag-product-item-qty">
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
										<option value="">4</option>
										<option value="">5</option>
									</select>
									<div className="cartbag-product-item-remove-item">
										<u>Remove</u>
									</div>
								</div>
							</div>
						</div>
						<div className="cartbag-product-item">
							<div className="cartbag-product-item-img-con"></div>
							<div className="cartbag-product-item-details">
								<h2 className="cartbag-product-item-title">
									EVERYDAY MIRCO BOXER BRIEF 3-PACK
								</h2>
								<p className="cartbag-product-item-color-and-size">White | M</p>
								<p className="cartbag-product-item-price">$23.00</p>
								<div className="cartbag-product-item-qty-and-remove-item">
									<select name="" className="cartbag-product-item-qty">
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
										<option value="">4</option>
										<option value="">5</option>
									</select>
									<div className="cartbag-product-item-remove-item">
										<u>Remove</u>
									</div>
								</div>
							</div>
						</div>
						<div className="cartbag-product-item">
							<div className="cartbag-product-item-img-con"></div>
							<div className="cartbag-product-item-details">
								<h2 className="cartbag-product-item-title">
									EVERYDAY MIRCO BOXER BRIEF 3-PACK
								</h2>
								<p className="cartbag-product-item-color-and-size">White | M</p>
								<p className="cartbag-product-item-price">$23.00</p>
								<div className="cartbag-product-item-qty-and-remove-item">
									<select name="" className="cartbag-product-item-qty">
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
										<option value="">4</option>
										<option value="">5</option>
									</select>
									<div className="cartbag-product-item-remove-item">
										<u>Remove</u>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="review-and-checkout-container">
					<div className="subtotal-and-price">
						<div className="subtotal">
							<div className="subtotal-text">Subtotal</div>
							<div className="subtotal-item-amount">0 Items</div>
						</div>
						<div className="cartbag-price">$0</div>
					</div>
					<button className="review-and-checkout-btn" onClick={ClosecartBag}>
						<Link to="/cart">REVIEW + CHECKOUT</Link>
					</button>

					<p className="shipping-and-tax">
						Shipping & Taxes Calculated at Checkout
					</p>
				</div>
			</div>
		</div>
	);
}

export default CartBag;
