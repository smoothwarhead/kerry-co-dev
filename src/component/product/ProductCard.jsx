import React from "react";
import { useState } from "react";
import "./product.css";
import QuickProductView from "../quickProductView/QuickProductView";
function ProductCard({ Productdata }) {
	const [openQuickView, setOpenQuickView] = useState(false);
	const showQuickView = () => {
		setOpenQuickView(true);
		if (typeof window != "undefined" && window.document) {
			document.body.style.overflow = "hidden";
		}
	};
	const CloseQuickView = () => {
		setOpenQuickView(false);
		document.body.style.overflow = "unset";
	};
	return (
		<>
			<div className="product-card">
				<div className="product-img">
					<div className="new-product">NEW</div>
					<div className="product-img-overlay">
						<button onClick={showQuickView} className="product-img-overlay-btn">
							QUICK VIEW
						</button>
					</div>
				</div>
				<h2 className="product-name">{Productdata.prodName}</h2>
				<p className="product-price">${Productdata.price}</p>
				<p className="buy-one">BUY ONE, GET ONE 50% OFF</p>
				<p className="product-available-color">+ {Productdata.color}colors</p>
				<div className="product-stars">x x x</div>
			</div>
			{openQuickView && <QuickProductView CloseQuickView={CloseQuickView} />}
		</>
	);
}

export default ProductCard;
