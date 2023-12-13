import MobileBusinessProductDetails from '../../../component/product-details/mobile-details/MobileBusinessProductDetails';
import './mobile-selected-product.css';
import {AdvancedImage} from '@cloudinary/react';





const MobileSelectedBusinessProduct = (props) => {

    const { cld, itemName, selectImage, itemDescription, itemPrice, itemSize, itemColor, itemQuantity, setItemQuantity,  addToBag, productImages, selectedImage  } = props;



  return (
    <>
      <div className="mobile-selected-con">

        <div className="m-s-top">
          <div className="m-quick-view-product-title">                        
             {itemName}
          </div>

          <div className="m-quick-view-details-price">                        
            {`£${parseFloat(itemPrice).toFixed(2).toString()}`}
          </div>

        </div>


        <div className="m-s-mid">
          <div className="m-s-images-preview">
            {
                productImages.length === 0 ? <span>Loading</span>

                :

                productImages.map((img, i) => (
                    <span className={`m-s-other-img-preview ${img.selected ? "img-active" : ""}`} 
                        key={i}
                        onClick={() => selectImage(i)}
                    >
                        <AdvancedImage style={{maxWidth: '100%', maxHeight: '100%'}} cldImg={cld.image(img.image)} />

                    </span>
                ))

            
            }
          </div>

          <div className="m-s-selected-image-preview-con">

            <div className="m-s-selected-image-preview">

              <div className="m-s-selected-image">
                  { 
                  
                      !selectedImage ? <span>Loading...</span>
                          :
                      <AdvancedImage style={{maxWidth: '100%', maxHeight: '100%'}} cldImg={cld.image(selectedImage.image)} /> 
                        
                  }
                  
              </div>

            </div>

          </div>


        </div>



        <div className="m-s-bottom">


          <MobileBusinessProductDetails 
            addToBag = {addToBag}
            itemQuantity = {itemQuantity}
            setItemQuantity = {setItemQuantity}
            itemDescription = {itemDescription}
            itemSize = {itemSize}
            itemColor = {itemColor}
          
          />
        </div>



      </div>
    
    </>
  )
}

export default MobileSelectedBusinessProduct