import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router';

import './selected-products.css';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
// import { axiosPrivate } from '../../api/axios';
// import SessionManager from '../../files/SessionManager';
import NavContext from '../../context/NavContext';
import products from '../../data/products.json';
import otherImages from '../../data/otherImages.json';
import { ViewContext } from '../../context/ViewContext';
import Loader from '../../component/loader/Loader';
import { BusinessDataContext } from '../../context/BusinessDataContext';
import BusinessProductDetails from '../../component/product-details/BusinessProductDetails';

import MobileSelectedBusinessProduct from './mobile-selected/MobileSelectedBusinessProduct';
import { formatSize, returnPack2Images } from '../../utils/methods';






const SelectedBusinessProduct = () => {

    const [itemId, setItemId] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState([]);
    const [itemPrice, setItemPrice] = useState("");
    const [itemColor, setItemColor] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [itemQuantity, setItemQuantity] = useState(1);
    const [productImages, setProductImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [itemSize, setItemSize] = useState("");
 
    


    const {handleCart } = useContext(BusinessDataContext);
    const {setSlideCart} = useContext(NavContext);
    const {smallMobile} = useContext(ViewContext);



    const { id, name, size } = useParams();

    console.log(id, name, size);

   
    const { pendingData, setPendingData } = useContext(BusinessDataContext);

    const navigate = useNavigate();


    useEffect(() => {

        let filteredProduct;
        
        if(id){

            filteredProduct = products.filter(prdt => prdt.ProductId === id);
        }else{
            
            filteredProduct = products.filter(prdt => prdt.ProductName.toString().trim() === name && formatSize(prdt.Variations[0].Size).toLowerCase().trim() === size.toLowerCase() );

        }



        const product = filteredProduct[0];

        console.log(product);

        
                    
        setItemId(product.ProductId);
        setImageUrl(product.Variations[0].ImageUrl);
        setItemName(product.ProductName);
        setItemDescription(product.ProductDescription);
        setItemColor(product.Variations[0].Color);
        setItemPrice(product.Variations[0].UnitPrice);
        setItemSize(product.Variations[0].Size);


        const newImages = returnPack2Images(product.Variations[0].NumberInPack, product.Variations[0].Color, otherImages);

        const allImages = [product.Variations[0].ImageUrl, ...newImages];

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

        setSelectedImage(mappedImages[0]);


        setPendingData(false);   




    }, [id, setPendingData, name, size])


    
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'greenietec'
        }
    }); 
  
 

    const addToBag = () => {
        const item = {
            itemId,
            itemName,
            itemQuantity,
            itemPrice,
            imageUrl,
            itemSize

        }

        handleCart(item);
        setSlideCart(true);
		// setItemQuantity(1);


    }


    const selectImage = (index) => {

        setProductImages(
            productImages.map(d => {

                if(d.id === index + 1){
                
                    d.selected = true;
                    setSelectedImage(d);


                }else{
                    d.selected = false;
                }

                
                return d;


                
            })
        );

        

        // console.log(index);
    };




    

  return (
    
        <div className="product-page-con">

            {pendingData && <Loader />}

            <div className="bus-product-details-con">
                <div className="all-product-btn" onClick={() => navigate(-1)}>
                    <HiOutlineArrowNarrowLeft className='all-product-icon' />
                    <span className='all-product-text'>All Products</span>

                </div>

               

                <div className="bus-product-details">

                    { (!smallMobile) ?

                        <>
                            
                            <div className="images-preview">
                            

                                {
                                    productImages.length === 0 ? <span>Loading</span>

                                    :

                                    productImages.map((img, i) => (
                                        <span className={`other-img-preview ${img.selected ? "img-active" : ""}`} 
                                            key={i}
                                            onClick={() => selectImage(i)}
                                        >
                                            <AdvancedImage style={{maxWidth: '100%', maxHeight: '100%'}} cldImg={cld.image(img.image)} />

                                        </span>
                                    ))

                                
                                }

                            </div>

                            <div className="product-image-pre-con">
                                <div className="product-image-pre-img">
                                    { 
                                    
                                        !selectedImage ? <span>Loading...</span>
                                            :
                                        <AdvancedImage style={{maxWidth: '100%', maxHeight: '100%'}} cldImg={cld.image(selectedImage.image)} /> 
                                         
                                    }
                                   
                                </div>

                               
                            </div>

                            <div className="main-product-details-con">
                                <BusinessProductDetails 

                                    itemId = {itemId}
                                    itemName = {itemName}
                                    itemDescription = {itemDescription}
                                    itemPrice = {itemPrice}
                                    itemSize = {itemSize}
                                    itemColor = {itemColor}
                                    setItemPrice={setItemPrice}
                                    itemQuantity={itemQuantity}
                                    setItemQuantity={setItemQuantity}
                                    addToBag={addToBag}
                                    selectImage={selectImage}
                                  
                                />
                            </div>

                        </>

                        :

                       <MobileSelectedBusinessProduct 
                       
                            itemId = {itemId}
                            itemName = {itemName}
                            itemDescription = {itemDescription}
                            itemPrice = {itemPrice}
                            itemSize = {itemSize}
                            itemColor = {itemColor}
                            setItemPrice={setItemPrice}
                            itemQuantity={itemQuantity}
                            setItemQuantity={setItemQuantity}
                            addToBag={addToBag}
                            productImages = {productImages}
                            selectedImage = {selectedImage}
                            selectImage = {selectImage}
                            cld = {cld}
                       
                       />
                    }
                    
                </div>

                   




                

            </div>

        </div>

  )


}




export default SelectedBusinessProduct;