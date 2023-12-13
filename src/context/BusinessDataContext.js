import { createContext, useEffect, useState } from "react"
import { CartManager } from "../utils/CartManager";
import { FilterManager } from "../utils/FilterManager";










export const BusinessDataContext = createContext({});



const BusinessDataProvider = ({ children }) => {

    const [pendingData, setPendingData] = useState(true);

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
    const [filterItems, setFilterItems] = useState([]);



    useEffect(() => {
      const items = CartManager.getCart();
      const filters = FilterManager.getFilter()

      if(items){
        setCartItems(items);
      }else{
        return;
      }
      if(filters){
        setFilterItems(filters);
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


    const handleFilter = (item) => {

      FilterManager.saveFilter(item);


    
      if(filterItems.length === 0){
        setFilterItems([item]);

      }else{
        const checkItem = filterItems.find(f => (f.tag === item.tag));

        if(checkItem){

          const updatedFilterItems = filterItems.map(f => {
            if((f.tag === item.tag)){
              
              return item;
              
            }else{
              return f;
            }
          })

          setFilterItems(updatedFilterItems);



        }else{

          setFilterItems([item, ...filterItems]);

        }



      }

      
      // if(checkItem){

      // }

    }


    
    const removeFilter = (tag) => {
      const removeItem = filterItems.filter(item => item.tag !== tag);
      setFilterItems(removeItem);
      FilterManager.updateFilter(removeItem);

     
    };

    const removeAllFilters = () => {
      
      setFilterItems([]);
      FilterManager.removeFilters();     

     
    };



    // useEffect(() => {

    //   const filterProducts = () => {
    //     const filters = [
    //       {
    //         price: {
    //           id: "1",
    //           minPrice: 0,
    //           maxPrice: 20
    //         },
    //         packSize: {
    //           id: "2",
    //           item: "3"
    //         },
    //         size: {
    //           id: "3",
    //           item: "Medium"
    //         }
    //       }
    //     ];

    //     if(businessProducts.length === 0){
    //       return;
    //     }else{
    //       const updatedProducts = businessProducts.filter(product => {

    //         const variations = product.Variations[0];

    //         //all
    //         if(filters[0].packSize.item){
              
    //           if(variations.NumberInPack === filters[0].packSize.item){
    //             return product;
    //           }
    //         }

    //         //2
    //         if(filters[0].size.item){

    //           if(variations.Size === filters[0].size.item){
    //             return product
    //           }

    //         }


    //         if(filters[0].price.id){

    //           if(variations.UnitPrice > filters[0].price.minPrice && variations.UnitPrice <= filters[0].price.maxPrice){
    //             return product;
    //           }

    //         }
         
         
    //       })

    //       setBusinessProducts(updatedProducts);

    //     }
      
    //   }

    //   filterProducts();
  
    // },[businessProducts, setBusinessProducts]);

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
        quickProduct, setQuickProduct,
        filterItems, setFilterItems,
        handleFilter, removeFilter, removeAllFilters

    }}
    >
        {children}
    </BusinessDataContext.Provider>
  )
}

export default BusinessDataProvider;