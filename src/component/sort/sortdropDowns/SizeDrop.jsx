import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "./sortitems.css";
import products from '../../../data/products.json';
import { BusinessDataContext } from "../../../context/BusinessDataContext";
import { formatSize } from "../../../utils/methods";





function SizeDrop() {



	const [sortOPen, setSortOpen] = useState(false);

	// const [selectedSize, setSelectedSize] = useState("");
	const [activeSize, setActiveSize] = useState("");

	const [indicator, setIndicator] = useState(false);


	const { setBusinessProducts, filterItems, handleFilter } = useContext(BusinessDataContext);


	

	const sizes = [
		{
			id: 1,
			size: "S"
		},
		{
			id: 2,
			size: "M"
		},
		{
			id: 3,
			size: "L"
		},
		{
			id: 4,
			size: "XL"
		}
	];


	useEffect(() => {

		if(filterItems.length === 0){
			setIndicator(false);
			setActiveSize("");
			return;
		}else{

			const checkTag = filterItems.find(f => f.tag === 'size');


			if(checkTag){

				setIndicator(true);
				const size = checkTag;

				setActiveSize(size.id);



			}else{
				setIndicator(false);
				setActiveSize("");
				return;
			}


		}
		
	
	}, [filterItems, setIndicator]);


	// useEffect(() => {
	// 	const filteredProducts = products.filter(product => product.Variations[0].Size === selectedSize.toString());

	// 	setBusinessProducts(filteredProducts);
		
	// }, [selectedSize, setBusinessProducts])




	const makeSelectedSize = (s) => {
	
		
		// setSelectedSize(s.size);
		setActiveSize(s.id);

		const newFilter = {
			id: s.id,
			tag: "size",
			text: formatSize(s.size),
			size: s.size
		};

        handleFilter(newFilter);    



	}


	return (
		<div className={sortOPen ? "sort-item open" : "sort-item"}>
			<div className="sort-title" onClick={() => setSortOpen(!sortOPen)}>
				<span className="sort-title-p-con">
					<p className="sort-title-p">Size</p>
					{indicator && <span className="indicator"></span>}
				</span>

				<div className="sort-icon">
					<RiArrowDownSLine />
				</div>
			</div>
			<div className="flex-sort-content">
				{
					sizes.map((size, i) => (
						<div 
							className={`sort-btn ${activeSize === i+1  ? "active-size" : ""}`}
							key={size.id}
							onClick={() => makeSelectedSize(size)}
						>
							{size.size}
											
						</div>
					))
				}
			</div>
		</div>
	);
}

export default SizeDrop;
