import React from "react";
import { useState } from "react";
import "./product.css";
import QuickProductView from "../quickProductView/QuickProductView";
function ProductCard({ Productdata }) {
	const [detail, setDetail] = useState([]);
	const [openQuickView, setOpenQuickView] = useState(false);
	const showQuickView = (product) => {
		setDetail([{ ...product }]);
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
					<img src={Productdata.image} alt={Productdata.alt} />
					<div className="new-product">NEW</div>
					<div className="product-img-overlay">
						<button
							onClick={() => showQuickView(Productdata)}
							className="product-img-overlay-btn">
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
			{openQuickView ? (
				<>
					{/* {detail.map((det) => ( */}
					<QuickProductView
						// key={index}
						detail={detail}
						CloseQuickView={CloseQuickView}
					/>
					{/* ))} */}
				</>
			) : null}
			{/* {openQuickView && <QuickProductView CloseQuickView={CloseQuickView} />} */}
		</>
	);
}

export default ProductCard;
