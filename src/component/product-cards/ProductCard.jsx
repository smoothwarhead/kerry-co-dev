import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import "./product-card.css";
import {gsap, Power1} from 'gsap';
import { BusinessDataContext } from "../../context/BusinessDataContext";
import { ViewContext } from "../../context/ViewContext";
import NavContext from "../../context/NavContext";
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import { formatSize } from "../../utils/methods";




function ProductCard({ product, selectProduct, selectQuickProduct}) {

	const { setShowQuickShop} = useContext(BusinessDataContext);
	const { setUnScroll } = useContext(NavContext);
	const [hovered, setHovered] = useState(false);
	const { mobile } = useContext(ViewContext);
 

	const quickRef = useRef();
    const tl = useRef();


	const showQuickView = () => {
		setShowQuickShop(true);
		if(mobile){
			setUnScroll(true);
		}else{
			setUnScroll(false);
		}
	
	};


	
    useEffect(() => {
        
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(quickRef.current, {
            display: "flex",
            top: 0,
            duration: 0.5,
			opacity: 1,
            ease: Power1.easeInOut
        });

       
        


    }, []);

   
   
    useEffect(() => {
        
        (hovered && !mobile) ? tl.current.play() : tl.current.reverse()
   
   
   
    }, [hovered, mobile]);



	// Create and configure your Cloudinary instance.   
    
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'greenietec'
        }
    }); 

	
  
    const productImage = cld.image(product.Variations[0].ImageUrl);


	const quickShopBtn = () => {
		selectQuickProduct(product);
		showQuickView();

	}

	

	return (

		// <></>
		<>
			
			
			<div className="product-card" 
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			
			>

				<div className="product-img-overlay" ref={quickRef}>
					<div
						onClick={() => quickShopBtn()}
						className="product-img-overlay-btn">
						QUICK SHOP
					</div>
				</div>


				<div className="product-img" onClick={() => selectProduct(product)}>
					<AdvancedImage style={{maxWidth: '100%', maxHeight: '100%'}} cldImg={productImage} />
				</div>

				<div className="product-others">
					<span className="product-name" onClick={() => selectProduct(product)}>{product.ProductName}</span>
					<span className="product-price">{`£${parseFloat(product.Variations[0].UnitPrice).toFixed(2).toString()}`}</span>
					<span className="product-size">{formatSize(product.Variations[0].Size)}</span>
					<span className="product-color">{product.Variations[0].Color}</span>

				</div>
				
			</div>

		</>
	);
}

export default ProductCard;
