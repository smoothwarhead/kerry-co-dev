import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./quickproductview.css";
import '../slides/slides.css';
import { BusinessDataContext } from "../../context/BusinessDataContext";
import {gsap, Power1} from 'gsap';
import { HiX, HiPlus, HiMinus } from 'react-icons/hi';
import Button from "../button/Button";
import { ViewContext } from "../../context/ViewContext";
import NavContext from "../../context/NavContext";
import otherImages from "../../data/otherImages.json";
import { formatSize, returnPack2Images } from "../../utils/methods";
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";













function QuickProductView() {

	const {showQuickShop, setShowQuickShop, cartItems, quickProduct, handleCart } = useContext(BusinessDataContext);

	const { mobile } = useContext(ViewContext);
	const { setSlideCart } = useContext(NavContext);

	const [isSticky, setIsSticky] = useState(false);
    const [productImages, setProductImages] = useState([]);
    const [otherAvailableSizes, setOtherAvailableSizes] = useState([]);


    const [itemQuantity, setItemQuantity] = useState(1);


	const navigate = useNavigate();
	const quickConRef = useRef();
	const quickContainerRef = useRef();
  
	const tl = useRef();



	// console.log(showQuickShop);
  
  

	useEffect(() => {
		
		tl.current = gsap.timeline({ paused: true });
  
		tl.current.to(quickContainerRef.current, {
			display: "block",
			duration: 0,
			ease: Power1.easeInOut
		});
  
		tl.current.to(quickConRef.current, {
			right: 0,
			duration: 0.5,
			ease: Power1.easeInOut
		});
		
  
  
	}, []);
  
  
	useEffect(() => {
		
	 (showQuickShop && !mobile) ? tl.current.play() : tl.current.reverse()
  
  
  
	}, [showQuickShop, mobile]);



	const stickyRef = useRef();
	const scroller = useRef();



	const makeSticky = () => {
		const scrollerHeight = scroller.current.scrollTop;
		if(scrollerHeight > 10){
			setIsSticky(true);
		}else{
			setIsSticky(false);

		}
	};

	const handlePlus = () =>{
		
        setItemQuantity(itemQuantity + 1);
    };


    const handleMinus = () =>{
        
        if(itemQuantity === 1){
            return;
        }else{
            setItemQuantity(itemQuantity - 1);

        }
    };


	useEffect(() => {

		const setImages = () => {


			const newImages = returnPack2Images(quickProduct?.Variations[0].NumberInPack, quickProduct?.Variations[0].Color, otherImages);
	
			const allImages = [quickProduct?.Variations[0].ImageUrl, ...newImages];
	
			 //map and set the current dimension;
			const mappedImages = allImages.map((d, index ) => {
				
	
				if(index === 0){
					return{  
	
						id: index + 1,
						selected: true,
						image: d
					}
				}
				else if(index === 1){
					return{  
	
						id: index + 1,
						selected: false,
						image: d
					}
				}
				else{
					return{  
	
						id: index + 1,
						selected: false,
						image: d
					}
				}
	
			   
			
			
			});
	
	
			setProductImages(mappedImages);
	
		}


		setImages();

	}, [quickProduct, setProductImages]);



	useEffect(() => {
		if(!showQuickShop){
			setItemQuantity(1);
			return;
		}
	}, [showQuickShop])


	


	const addToBag = () => {
		const item = {
            itemId: quickProduct.ProductId,
            itemName: quickProduct.ProductName,
            itemQuantity,
            itemPrice: quickProduct.Variations[0].UnitPrice,
            imageUrl: quickProduct.Variations[0].ImageUrl,
            itemSize: quickProduct.Variations[0].Size,


        }

        handleCart(item);
        setSlideCart(true);
		setShowQuickShop(false);
		setItemQuantity(1);

	}



	const cld = new Cloudinary({
        cloud: {
            cloudName: 'greenietec'
        }
    }); 


	useEffect(() => {
		if(!quickProduct){
			return
		}else{

			const getAvailableOptions = () => {

				const otherSizes = ["Small", "Medium", "Large", "Extra-Large"];
		
				const size = formatSize(quickProduct?.Variations[0].Size);
		
				// const foundSize = otherSizes.find(str => str === size);
		
				const foundSizes = otherSizes.filter(str => str !== size)
		
				setOtherAvailableSizes(foundSizes);
		
			}

			getAvailableOptions();

		}
	}, [quickProduct]);


	const goToFullDetails = () => {
		navigate(`/products/${quickProduct.ProductId}`);
		setShowQuickShop(false);
	}


	const goToAvailableSize = (name, size) => {

		// const id = `${}`
  
		navigate(`products/${name}/${size}`);
		setShowQuickShop(false);

  
	}




	// const otherimagesUrl = ["images/classic.jpg", "images/micro.jpg", "images/stretch.jpg", "images/micro.jpg"]


	return (
		<>
			
			<div className="quick-slide-container" ref={quickContainerRef}>
				<div className="quick-slide" ref={quickConRef}>
					<div className="quick-view-flex-con"
						ref={scroller}
						onScroll={makeSticky}					
					>

						{
							!quickProduct ?

							<Loader />

							:

							<>
								<div className="quick-prdt-images-con" ref={stickyRef}>

									{
										productImages.map((img, i) => (
											<div className="quick-prdt-images-con-inner" key={i}>
												<div className="quick-product-img">
													<AdvancedImage style={{maxWidth: '100%', maxHeight: '100%'}} cldImg={cld.image(img.image)} />
										
												</div>
											</div>
											
										))
									}
								</div>

								<div className={`quick-prdt-details-con ${isSticky ? "is-sticky" : ""}`}>
									<div className="quick-prdt-details-con-inner">

										<div className="slide-header">
											<HiX 
												className='close-icon'
												onClick={() => setShowQuickShop(false)}
												
											/>
										</div>

										<div className="details-body">
											<div className="company-name">kerryCo</div>

											<div className="product-quick-view-product-title">										
												{quickProduct?.ProductName}
											</div>

											<div className="product-quick-view-details-price">
												{`£${parseFloat(quickProduct?.Variations[0].UnitPrice).toFixed(2).toString()}`}

											</div>
											

											<div className="product-quick-view-color">
												
												<span className="quickview-color-span">											
													{quickProduct?.Variations[0].Color}
												</span>
												

												<div className="product-quick-view-available-color"></div>
											</div>

											<div className="product-quick-view-size">
											
												{formatSize(quickProduct?.Variations[0].Size)}

											</div>

											<div className="quick-details-qty-con">
												<span className="quick-lbl">Quantity:</span>
												<div className="quick-qty-con">
													<span className="quick-qty-minus-btn" onClick={handleMinus}>
														<HiMinus />
													</span>

													<span className="quick-qty-text">{itemQuantity}</span>

													<span className="quick-qty-plus-btn" onClick={handlePlus}>
														<HiPlus />
													</span>
												</div>

											</div>

											<Button
												action={addToBag}
												cName="add-to-bag-btn"
												name="Add To Bag"

											/>

											<div 

												className="full-details-btn"

												onClick={goToFullDetails}
											
											>
												view Full Details
											</div>

											<div className="quick-product-choices-con">
												<span className="quick-product-choices-text">Also Available In,</span>

												<div className="quick-product-choices">
													{
														otherAvailableSizes.map((size, i) => (
															<span 
																className="quick-product-choices-el" 
																key={i}
																onClick={() => goToAvailableSize(quickProduct.ProductName, size)}
															>
																{size}
															</span>
														))
													}
												</div>


											</div>








										</div>

									</div>
								</div>

							
							</>

						}

						




					</div>

				</div>

			</div>
			
		</>
	);
}

export default QuickProductView;
