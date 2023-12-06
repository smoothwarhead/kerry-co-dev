import { createContext, useEffect, useState } from "react"
import { CartManager } from "../utils/CartManager";
import { useNavigate } from "react-router-dom";









export const BusinessDataContext = createContext({});



const BusinessDataProvider = ({ children }) => {

    const [pendingData, setPendingData] = useState(false);

    const [businessProducts, setBusinessProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [discount, setDiscount] = useState(null);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [contactDetails, setContactDetails] = useState([]);
    const [orderPayload, setOrderPayload] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quickProduct, setQuickProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [hasPromo, setHasPromo] = useState(false);
    const [showQuickShop, setShowQuickShop] = useState(false);

    


    useEffect(() => {
      const items = CartManager.getCart();

      if(items){
        setCartItems(items);
      }else{
        return;
      }

    }, []);


    useEffect(() => {

      // CartManager.saveCart(cartItems);
  
      const itemsTotal = cartItems.map(c => {
        return parseFloat(parseFloat(c.itemPrice).toFixed(2) * parseInt(c.itemQuantity));
      });
  
      // console.log(itemsTotal);
  
      const newSubTotal = itemsTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
      setCartSubTotal(newSubTotal);
  
  
    }, [cartItems]);


    const handleCart = (item) => {

      CartManager.saveCart(item);

      if(cartItems.length === 0){
        setCartItems([item]);

      }else{
        const checkItem = cartItems.find(c => (c.itemId === item.itemId) && (c.itemPrice === item.itemPrice));

        if(checkItem){

          const updatedCartItems = cartItems.map(c => {
            if((c.itemId === item.itemId) && (c.itemPrice === item.itemPrice)){
              
              const newItem = {...checkItem, itemQuantity: checkItem.itemQuantity +  + item.itemQuantity};

              return newItem;
              
            }else{
              return c;
            }
          })

          setCartItems(updatedCartItems);



        }else{

          setCartItems([item, ...cartItems]);

        }



      }

      
      // if(checkItem){

      // }

    }


    const handleContactDetails = (items) => {




      // const foundObject = array.find(obj => obj.id === searchObject.id && obj.name === searchObject.name);

      if(contactDetails.length === 0){
      
        console.log("empty");

        setContactDetails(items);

       
        return;


      }else{
        console.log("not empty");

        items.forEach(item => {

          const checkItem = contactDetails.some(c => c.title.toLowerCase() === item.title.toLowerCase());

          if(checkItem){

            const updatedContactDetails = contactDetails.map(c => {
  
              if(c.title.toLowerCase() !== item.title.toLowerCase()){
                
                return c;
                
              }else{
                return item;
              }
  
  
            });
  
            setContactDetails(updatedContactDetails);
  
  
  
          }else{
  
            setContactDetails([...contactDetails, item]);
  
          }

          
          
        });




        

      }

      




    }
    

    const closeModal = () => {
      setModalOpen(false);
    }


    //clear cart.
  
    // setTimeout(() => {
      
    //   CartManager.removeCart();

    // }, [6000]);
   

   

  return (
    <BusinessDataContext.Provider value={{ 
        pendingData, setPendingData,
        businessProducts, setBusinessProducts,
        cartItems, setCartItems,
        handleCart,
        discount, setDiscount,
        cartSubTotal, setCartSubTotal,
        contactDetails, setContactDetails,
        orderPayload, setOrderPayload,
        handleContactDetails,
        modalOpen, setModalOpen,
        closeModal,
        hasPromo, setHasPromo,
        showQuickShop, setShowQuickShop,
        selectedProduct, setSelectedProduct,
        quickProduct, setQuickProduct  

    }}
    >
        {children}
    </BusinessDataContext.Provider>
  )
}

export default BusinessDataProvider;