import React, { useContext } from 'react'
import './menu-btn.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { HiXMark } from "react-icons/hi2";
import NavContext from '../../context/NavContext';


const MenuBtn = () => {

    const {  setSlideMenu, slide, setSlide, setUnScroll } = useContext(NavContext);


    const handleMenuOpen = () => {

        setSlide(true);
        setSlideMenu(true);
        setUnScroll(true);


    }


    const handleMenuClose = () => {

        
        setSlide(false);
        setSlideMenu(false);
        setUnScroll(false);
        
    }

    

  
  return (
    <>
        <div className="menu-btn-con">
           {!slide ?
                <RxHamburgerMenu 
                    className='menu-icon'
                    onClick={handleMenuOpen}
                />

                :

                <HiXMark
                    className='menu-icon'
                    onClick={handleMenuClose}
                />

            }
        </div>
    </>
  )
}

export default MenuBtn