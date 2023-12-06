import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import './mobileQuickView.css';
import { BusinessDataContext } from '../../context/BusinessDataContext';
import { ViewContext } from '../../context/ViewContext';
import {gsap, Power1} from 'gsap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HiX, HiPlus, HiMinus } from 'react-icons/hi';
import Button from '../button/Button';
import NavContext from '../../context/NavContext';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import { formatSize, returnPack2Images } from '../../utils/methods';
import otherImages from '../../data/otherImages.json';
import { useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';



const MobileQuickView = () => {


    const {showQuickShop, setShowQuickShop, quickProduct, handleCart} = useContext(BusinessDataContext);

	const { setUnScroll, setSlideCart } = useContext(NavContext);
	const { mobile } = useContext(ViewContext);
    const [productImages, setProductImages] = useState([]);
    const [otherAvailableSizes, setOtherAvailableSizes] = useState([]);



    const [itemQuantity, setItemQuantity] = useState(1);


	const navigate = useNavigate();
	
	const MquickConRef = useRef();
	const MquickContainerRef = useRef();
  
	const tl = useRef();



	// console.log(showQuickShop);
  
  
  
	useEffect(() => {
		
		tl.current = gsap.timeline({ paused: true });
  
		tl.current.to(MquickContainerRef.current, {
			display: "block",
			duration: 0,
			ease: Power1.easeInOut
		});
  
		tl.current.to(MquickConRef.current, {
			right: 0,
			duration: 0.5,
			ease: Power1.easeInOut
		});
		
  
  
	}, []);
  
  
	useEffect(() => {
		
	 (showQuickShop && mobile) ? tl.current.play() : tl.current.reverse()
  
  
  
	}, [showQuickShop, mobile]);

    const responsive = {
        tablet: {
            breakpoint: { max: 960, min: 540 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 540, min: 0 },
            items: 1
        },
    }

	
    

    const handlePlus = () =>{
        
        setItemQuantity(itemQuantity + 1);
    }

    const handleMinus = () =>{
        
        if(itemQuantity === 1){
            return;
        }else{
            setItemQuantity(itemQuantity - 1);

        }
    }


	  
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


    const handleQuickClose = () => {
    setShowQuickShop(false);
    setUnScroll(false);
    }


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


    const cld = new Cloudinary({
        cloud: {
            cloudName: 'greenietec'
        }
    }); 



    const goToAvailableSize = (name, size) => {
  
		navigate(`products/${name}/${size}`);
		setShowQuickShop(false);

  
	}



  return (
    <>
        <div className="m-slide-container" ref={MquickContainerRef}>
            <div className="m-quick-slide" ref={MquickConRef}>



                <div className="m-quick-slide-top">

                    <div className="m-quick-slide-hdr">
                        <HiX 
                            className='close-icon'
                            onClick={handleQuickClose}
                            
                        />
                    </div>

                    <div className="m-company-name">kerryCo</div>

                    <div className="m-quick-view-product-title">                        
                        {quickProduct?.ProductName}

                    </div>

                    <div className="m-quick-view-details-price">                        
                        {`£${parseFloat(quickProduct?.Variations[0].UnitPrice).toFixed(2).toString()}`}

                    </div>

                </div>



                { !quickProduct ? <Loader />

                    :
                
                    <div className="m-quick-slide-bottom">

                        <div className="m-quick-slide-bottom-inner">


                            <div className="imgs-con">
                                <Carousel 
                                    responsive={responsive}
                                    swipeable={true}
                                    arrows={false}
                                    showDots={true}
                                    
                                >

                                    {
                                        productImages.map((img, i) => (

                                            <div className="m-images-con-outer"  key={i}>
                                                <div className="m-images-con-inner">
                                                    <div className="m-product-img">
                                                        <AdvancedImage style={{maxWidth: '100%', maxHeight: '100%'}} cldImg={cld.image(img.image)} />
                                                
                                                    </div>
                                                </div>

                                            </div>
                                            
                                        ))
                                    }

                                </Carousel>

                            </div>




                            <div className="m-details-con">
                            

                                <div className="m-quick-view-color">
                                    
                                    <span className="m-quick-view-color-span">
                                        
                                        {quickProduct?.Variations[0].Color}

                                    </span>
                                    

                                    <div className="m-quick-view-available-color"></div>

                                </div>

                                <div className="m-quick-view-size">
                                    {formatSize(quickProduct?.Variations[0].Size)}
                                </div>

                                <div className="m-quick-details-qty-con">
                                    <span className="m-quick-lbl">Quantity:</span>
                                    <div className="m-quick-qty-con">
                                        <span className="m-quick-qty-minus-btn" onClick={handleMinus}>
                                            <HiMinus />
                                        </span>

                                        <span className="m-quick-qty-text">{itemQuantity}</span>

                                        <span className="m-quick-qty-plus-btn" onClick={handlePlus}>
                                            <HiPlus />
                                        </span>
                                    </div>

                                </div>


                                <div className="m-quick-view-btn-con">
                                    <Button
                                        action={addToBag}
                                        cName="add-to-bag-btn"
                                        name="Add To Bag"

                                    />
                                </div>

                                

                                <div className="m-full-details-btn"
                                    onClick={goToFullDetails}
                                >
                                    view Full Details
                                </div>

                                <div className="m-quick-product-choices-con">
                                    <span className="m-quick-product-choices-text">Also Available In,</span>

                                    <div className="m-quick-product-choices">
                                        {
                                            otherAvailableSizes.map((size, i) => (
                                                <span 
                                                    className="m-quick-product-choices-el" 
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

                }
               

            </div>

        </div>
    
    </>
  )
}

export default MobileQuickView;