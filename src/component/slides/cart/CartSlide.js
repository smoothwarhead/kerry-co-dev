import { HiX } from 'react-icons/hi';
import { useRef, useEffect, useContext } from 'react';
import { gsap, Power1 } from 'gsap';
import '../slides.css';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import NavContext from '../../../context/NavContext';
import { BusinessDataContext } from '../../../context/BusinessDataContext';
import CartItem from '../../cart/CartItem';
import Button from '../../button/Button';









const CartSlide = ( ) => {


  const { slideCart, setSlideCart, setUnScroll } = useContext(NavContext);
  const { cartItems, cartSubTotal } = useContext(BusinessDataContext);



  const navigate = useNavigate();

  const cartRef = useRef(null);
  const containerRef = useRef(null);

  const tl = useRef();



  useEffect(() => {
      
      tl.current = gsap.timeline({ paused: true });

      tl.current.to(containerRef.current, {
          display: "block",
          duration: 0,
          ease: Power1.easeInOut
      });

      tl.current.to(cartRef.current, {
          right: 0,
          duration: 0.5,
          ease: Power1.easeInOut
      });
      


  }, [])


  useEffect(() => {
      
   slideCart ? tl.current.play() : tl.current.reverse()



  }, [slideCart]);



  const goToCheckout = () => {
    setSlideCart(false);
    navigate("/checkout")
  } 


  const goToContinueShopping = () => {
    setSlideCart(false);
    setUnScroll(false);
  } 






  return (
    <div className='slide-container' ref={containerRef}>
        <div 
            className="cart-slide" 
            ref={cartRef}
        >


            <div className="cart-slide-hdr">
           
              <div className="cart-title">
                Bag
              </div>
              <HiX 
                  className='close-icon'
                  onClick={() => setSlideCart(false)}
                  
              />
              
            </div>

            <div className="cart-slide-body">

              {
                cartItems.length === 0 ?
                <span className='empty-cart'>Oh no! It appears your bag is empty.</span>

                : 
                
                <>

                  {
                    cartItems.map((item, index) => (
                      <CartItem
                        key={index}
                        item={item}

                      />
                    ))
                  }

                  <div className="sub-total-con">
                    <div className="sub-total-con-inner">

                      <span className='sub-total-title'>Subtotal</span>
                      <span className='sub-total-value'>{`$${cartSubTotal.toFixed(2)}`}</span>

                    </div>
                    
                  </div>


                  <Button
										action={goToCheckout}
										cName="checkout-btn"
										name="Checkout"

									/>

                  <Button
										action={goToContinueShopping}
										cName="continue-shipping"
										name="Continue Shopping"

									/>


                </>
              }

              

            </div>


        </div>
    </div>
  )
}

export default CartSlide