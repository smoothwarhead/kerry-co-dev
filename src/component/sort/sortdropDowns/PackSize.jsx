import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "./sortitems.css";
// import products from '../../../data/products.json';
import { BusinessDataContext } from "../../../context/BusinessDataContext";




function PackSize() {

	const [sortOPen, setSortOpen] = useState(false);

	const [activeSize, setActiveSize] = useState("");
	const [indicator, setIndicator] = useState(false);

	const { handleFilter, filterItems } = useContext(BusinessDataContext);


	const packSizes =  [
		{
			id: 1,
			size: "3 Pack"
		},
		{
			id: 2,
			size: "2 Pack"
		},

	];



	useEffect(() => {

		if(filterItems.length === 0){
			setIndicator(false);
			setActiveSize("");
			return;
		}else{

			const checkTag = filterItems.find(f => f.tag === 'packSize');


			if(checkTag){

				setIndicator(true);
				const pack = checkTag;


				setActiveSize(pack.id);

			}else{
				setIndicator(false);
				setActiveSize("");
				return;
			}


		}
		
	
	}, [filterItems, setIndicator]);




	const makeSelectedSize = (p) => {
		let pack = "";

		if(p.size === "3 Pack"){
			pack = 3;
		
		}
		
		if(p.size === "2 Pack"){
			pack = 2;
			

		}
		
		// setSelectedSize(pack);
		setActiveSize(p.id);

		const newFilter = {
			id: p.id,
			tag: "packSize",
			text: p.size,
			pack
		};

        handleFilter(newFilter);            


	}




	return (
		<div className={sortOPen ? "sort-item open" : "sort-item"}>
			<div className="sort-title" onClick={() => setSortOpen(!sortOPen)}>

				<span className="sort-title-p-con">
					<p className="sort-title-p">Pack Size</p>
					{indicator && <span className="indicator"></span>}
				</span>

				<div className="sort-icon">
					<RiArrowDownSLine />
				</div>
			</div>
			<div className="flex-sort-content">

				{
					packSizes.map((pack, i) => (
						<div 
							className={`sort-btn ${activeSize === i+1  ? "active-size" : ""}`}
							key={pack.id}
							onClick={() => makeSelectedSize(pack)}
						
						>
							{pack.size}
											
						</div>
					))
				}
				
				
			</div>
		</div>
	);
}

export default PackSize;
