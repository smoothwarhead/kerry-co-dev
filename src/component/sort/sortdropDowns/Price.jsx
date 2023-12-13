import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "./sortitems.css";
import { BusinessDataContext } from "../../../context/BusinessDataContext";

function Price() {

	const { filterItems, handleFilter } = useContext(BusinessDataContext);

	const [sortOpen, setSortOpen] = useState(false);

	const [activePrice, setActivePrice] = useState("");

	const [indicator, setIndicator] = useState(false);

	const priceRanges = [
		{
			id: 1,
			minPrice: 0,
			maxPrice: 25
		},
		{
			id: 2,
			minPrice: 25,
			maxPrice: 50
		},
		{
			id: 3,
			minPrice: 50,
			maxPrice: 100
		}
	];



	useEffect(() => {

		if(filterItems.length === 0){
			setIndicator(false);
			setActivePrice("");
			return;

		}else{

			const checkTag = filterItems.find(f => f.tag === 'price');


			if(checkTag){

				setIndicator(true);
				const price = checkTag;

				setActivePrice(price.id);



			}else{
				setIndicator(false);
				setActivePrice("");
				return;
			}


		}
		
	
	}, [filterItems, setIndicator]);



	const makeSelectedSize = (p) => {

		setActivePrice(p.id);

		const newFilter = {
			id: p.id,
			tag: "price",
			text: `$${p.minPrice} - $${p.maxPrice}`,
			minPrice: p.minPrice,
			maxPrice: p.maxPrice

		};

        handleFilter(newFilter);    



	};


	return (
		<div className={sortOpen ? "sort-item open" : "sort-item"}>
			<div className="sort-title" onClick={() => setSortOpen(!sortOpen)}>

				<span className="sort-title-p-con">
					<p className="sort-title-p">Price</p>
					{indicator && <span className="indicator"></span>}
				</span>

				<div className="sort-icon">
					<RiArrowDownSLine />
				</div>

			</div>

			<div className="flex-sort-content">
				{
					priceRanges.map((price, i) => (
						<div 
							className={`sort-btn ${activePrice === i+1  ? "active-size" : ""}`}
							key={price.id}
							onClick={() => makeSelectedSize(price)}
						>
							{`$${price.minPrice} - $${price.maxPrice}`}
											
						</div>
					))
				}
			</div>
		</div>
	);
}

export default Price;
