import { useContext, useEffect, useRef } from 'react';
import './menu-slide.css'
import { gsap, Power1 } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";

import NavContext from '../../../context/NavContext';
import { ViewContext } from '../../../context/ViewContext';









const MenuSlide = () => {

    const { setSlide, slideMenu, setSlideMenu, setSlideAccount } = useContext(NavContext);
    const { mobile} = useContext(ViewContext);

    const navigate = useNavigate();



     const menuRef = useRef();
     const containerRef = useRef();

    const tl = useRef();

 


    useEffect(() => {
        
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(containerRef.current, {
            display: "block",
            duration: 0,
            ease: Power1.easeInOut
        });

        tl.current.to(menuRef.current, {
            left: 0,
            duration: 0.5,
            ease: Power1.easeInOut
        });

               


    }, [])





    useEffect(() => {
        
     (slideMenu && mobile) ? tl.current.play() : tl.current.reverse()



    }, [slideMenu, mobile]);


    const handleSignInClick = () => {
        if(slideMenu){
            setSlideMenu(false);
        }
      
          setSlideAccount(true);
      
    }

    const goToRegister = () => {
        setSlide(false);
        navigate("/register");
    }

    const goToTrackOrder = () => {
        setSlide(false);
        navigate("/track-order");
    }


  return (
    <>
        
        <div className='menu-slide-container' ref={containerRef}>
            <div className="mobile-menu-container" ref={menuRef}>
                <div className="menu-user">
                    <span className="menu-user-els"
                     onClick={handleSignInClick}
                    >
                        <span className='menu-user-el'>Sign In</span> 
                        <RiArrowRightSLine />
                    </span>

                    <span className="menu-user-els"
                     onClick={goToRegister}

                    >
                        <span className='menu-user-el'>Create Account</span> 
                        <RiArrowRightSLine />
                    </span>

                    <span className="menu-user-els"
                        onClick={goToTrackOrder}

                    >
                        
                        <span className='menu-user-el'>Track order</span> 
                        <RiArrowRightSLine />
                    </span>

                </div>


                <div className="menu-nav-items">

                    <span className="menu-nav-items-els">
                        <span className='menu-nav-item-el'>New Arrivals</span> 
                        <RiArrowRightSLine />
                    </span>

                    <span className="menu-nav-items-els">
                        <span className='menu-nav-item-el'>Categories</span> 
                        <RiArrowRightSLine />
                    </span>

                </div>
            
            </div>
        </div>
    </>
  )
}

export default MenuSlide;