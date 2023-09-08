import React from "react";
import "./product.css";
import ProductCard from "./ProductCard";
import Productdatas from "./productdatas.json";
// import QuickProductView from "../quickProductView/QuickProductView";
function Product() {
	// const [openQuickView, setOpenQuickView] = useState(false);
	// function showQuickView() {
	// 	setOpenQuickView(!openQuickView);
	// }
	return (
		<div className="product">
			{Productdatas.map((Productdata) => (
				<ProductCard key={Productdata.id} Productdata={Productdata} />
			))}
			{/* {openQuickView && <QuickProductView showQuickView={showQuickView} />} */}
		</div>
	);
}

export default Product;
