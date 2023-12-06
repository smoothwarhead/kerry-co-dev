
import { formatSize } from '../../utils/methods';
import Button from '../button/Button';
import './product-details.css';
import '../quickProductView/quickproductview.css';
import { HiMinus, HiPlus } from 'react-icons/hi';











const BusinessProductDetails = (props) => {


    const {addToBag, itemName, itemSize, itemColor, itemQuantity, setItemQuantity, itemDescription,  itemPrice } = props

    


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
    <div className="product-details-con">
        <div className="p-details-name">{itemName}</div>
        <div className="p-details-price">{`£${parseFloat(itemPrice).toFixed(2).toString()}`}</div>

        <span className="p-details-color">											
            {itemColor}
        </span>


        <div className="p-details-size">
            {formatSize(itemSize)}

        </div>
       
        <div className="p-details-qty-con">
            <span className="p-lbl">Quantity:</span>
            <div className="qty-con">
                <span className="qty-minus-btn" onClick={handleMinus}>
                    <HiMinus />
                </span>

                <span className="qty-text">{itemQuantity}</span>

                <span className="qty-plus-btn" onClick={handlePlus}>
                    <HiPlus />
                </span>
            </div>

        </div>

        <Button
            action={addToBag}
            cName="add-to-bag-btn"
            name="Add To Bag"
        />

        <div className="product-description">
            {itemDescription}
        </div>


    </div>
  )

  
}

export default BusinessProductDetails;