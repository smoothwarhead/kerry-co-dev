import {AdvancedImage} from '@cloudinary/react';
import './mobile-product-details.css';
import { HiMinus, HiPlus } from 'react-icons/hi';
import Button from '../../button/Button';
import { formatSize } from '../../../utils/methods';





const MobileBusinessProductDetails = (props) => {


    const {itemSize, itemColor, addToBag, itemQuantity, setItemQuantity, itemDescription } = props;


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

   


  return (
    <div className="m-p-details-con">
       
       <span className="m-p-details-color">											
            {itemColor}
        </span>


        <div className="m-p-details-size">
            {formatSize(itemSize)}

        </div>


        <div className="m-p-details-qty-con">
            <span className="m-p-lbl">Quantity:</span>
            <div className="m-p-qty-con">
                <span className="m-p-qty-minus-btn" onClick={handleMinus}>
                    <HiMinus />
                </span>

                <span className="m-p-qty-text">{itemQuantity}</span>

                <span className="m-p-qty-plus-btn" onClick={handlePlus}>
                    <HiPlus />
                </span>
            </div>

        </div>

        <Button
            action={addToBag}
            cName="add-to-bag-btn"
            name="Add To Bag"
        />

        <div className="m-p-description">
            {itemDescription}
        </div>


    </div>
  )
}

export default MobileBusinessProductDetails;