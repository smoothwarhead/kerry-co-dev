import React from "react";
import "./product.css";
import ProductCard from "./ProductCard";
import Productdatas from "./productdatas.json";
function Product() {
	return (
		<div className="product">
			{Productdatas.map((Productdata) => (
				<ProductCard key={Productdata.id} Productdata={Productdata} />
			))}
		</div>
	);
}

export default Product;
