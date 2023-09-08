import React from "react";
import "./quickproductview.css";
import CancelSvg from "../cancelsvg/CancelSvg";

function QuickProductView({ CloseQuickView }) {
	return (
		<div className="product-quick-view-overlay">
			<div className="product-quick-view-container">
				<div className="product-quick-view">
					<div className="product-quick-view-details">
						<div className="product-quick-view-brand">
							<div className="company-name">TOMMY HILFIGER</div>
							<div className="product-quick-view-product-title">
								COTTON CLASSICS BOXER BRIEF THREE-PACK
							</div>
							<div className="product-quick-view-star">x x x x (1)</div>
							<div className="product-quick-view-details-price">$39.50</div>
							<div className="product-quick-view-promo-ad">
								BUY ONE, GET ONE 50% OFF
							</div>
						</div>
						<button
							className="product-quick-view-cancel-btn"
							onClick={CloseQuickView}>
							<CancelSvg />
						</button>
					</div>
					<div className="product-quick-view-image-display"></div>
					<div className="product-quick-view-color">
						<div className="product-quick-view-current-color">
							Color
							<span className="quickview-color-span"> 988 Blue Ombre</span>
						</div>
						<div className="product-quick-view-available-color">
							<div className="product-quick-view-available-color-option"></div>
						</div>
					</div>
					<div className="product-quick-view-size-selection">
						<div className="product-quick-view-size-selection-title">
							Select Size
						</div>
						<div className="product-quick-view-size-selection-categories">
							<button className="product-quick-view-size-selection-btn">
								S
							</button>
							<button className="product-quick-view-size-selection-btn">
								M
							</button>
						</div>
						<div className="product-quick-view-size-guide">
							<u>Size Guide</u>
						</div>
						<div className="product-quick-view-free-shipping">
							Free Shipping on Order $100+
						</div>
					</div>
					<div className="product-quick-view-add-to-cart">
						<div className="product-quick-view-qty-selection">
							<select>
								<option value="">QTY</option>
								<option value="">1</option>
								<option value="">2</option>
								<option value="">3</option>
								<option value="">4</option>
								<option value="">5</option>
								<option value="">6</option>
							</select>
						</div>
						<button className="product-quick-view-add-to-cart-btn">
							ADD TO BAG - $39.50
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuickProductView;
