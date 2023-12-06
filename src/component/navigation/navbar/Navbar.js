import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import Headroom from "react-headroom";
import { ReactComponent as Search } from "../navicon/search.svg";
import { ReactComponent as User } from "../navicon/user.svg";
import { ReactComponent as Shoppingbag } from "../navicon/shoppingbag.svg";
import { useContext, useEffect, useState } from 'react';
import { BusinessDataContext } from '../../../context/BusinessDataContext';
import SearchBar from '../../search/SearchBar';
import UserBar from '../../user-bar/UserBar';
import { ViewContext } from '../../../context/ViewContext';
import MenuBtn from '../../menu-btn/MenuBtn';
import MenuSlide from '../../slides/menu/MenuSlide';
import NavContext from '../../../context/NavContext';
import CartSlide from '../../slides/cart/CartSlide';
import AccountSlide from '../../slides/account/AccountSlide';








const Navbar = () => {

  const { hasPromo, cartItems } = useContext(BusinessDataContext);
  const { slideMenu, openUser, setOpenUser, setSlideCart, setSlideSearch } = useContext(NavContext);
  const { mobile } = useContext(ViewContext);


  const [totalItems, setTotalItems] = useState(0);


  

	const handleSearch = () => {
    setSlideSearch(true);
    setOpenUser(false);
  }




	const handleBag = () => {
    setSlideCart(true);
    setOpenUser(false);
  }




  useEffect(() => {

    const numOfItems = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.itemQuantity, 0);

    setTotalItems(numOfItems);

  }, [cartItems]);
	

  

 
  return (
    <>

      <MenuSlide />
      <CartSlide />
      <SearchBar />
      <AccountSlide />

      {!mobile ?

        <div className="navbar">

          
          <div className="top-nav">

            <div className="nav-spacer"></div>

            {hasPromo &&
              <span className="promo-con">
                40% OFF EVERYTHING
                <span>
                  <u>Details</u>
                </span>
              </span>
            }

            <span className="nav-user-name">
              
            </span>

          
          </div>
          
          <Headroom className="headroom">
            <div className="mid-nav-container">
              <div className="mid-nav">

                <div className="store">
                  {/* <Link to="/">
                    Stores
                  </Link> */}
                </div>

                <div className="logo">
                  <Link to="/">
                    <span className='logo-letter'>KerryCo.</span>
                  </Link>
                </div>

                <div className="search-div">
                  <Search
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={handleSearch}
                  />

                  <div className="user-over-container">


                    <User
                      onClick={() => setOpenUser(true)}
                      style={{ cursor: "pointer" }}
                    />


                    {openUser && 

                      <UserBar />

                    }

                  </div>


                  <span className='shopping-bag-con'>
                    <Shoppingbag
                      style={{
                        width: "17px",
                        height: "17px",
                        fill: "#00174f",
                        cursor: "pointer",
                      }}
                      onClick={handleBag}
                    />

                    {`(${totalItems})`}

                  </span>

                </div>
              </div>


              <div className="down-nav">
                <ul>
                  <li>
                    <NavLink to="./">New arrivals</NavLink>
                  </li>
                  <li>
                    <NavLink to="./">Categories</NavLink>
                  </li>
                  
                </ul>
              </div>
            </div>
          </Headroom>



        </div>

        :


        <div className="mobile-navbar">

          
          <div className="top-nav">

            <div className="nav-spacer"></div>

            {hasPromo &&
              <span className="promo-con">
                40% OFF EVERYTHING
                <span>
                  <u>Details</u>
                </span>
              </span>
            }

            <span className="nav-user-name">
              
            </span>

          
          </div>
        
          <div className="mid-nav-container">
            <div className="mid-nav">

            
              <div className="logo">
                <Link to="/">
                  <span className='logo-letter'>KerryCo.</span>
                </Link>
              </div>

              <div className={`search-div ${slideMenu ? "slide-el" : ""}`}>

                {!slideMenu &&
                  <Search
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => setSlideSearch(true)}
                  />
                }


                {!slideMenu &&
                  <span className='shopping-bag-con'>
                    <Shoppingbag
                      style={{
                        width: "17px",
                        height: "17px",
                        fill: "#00174f",
                        cursor: "pointer",
                      }}
                      onClick={handleBag}
                    />

                    {`(${totalItems})`}

                </span>
                }

                <MenuBtn />


              </div>

            </div>

          </div>




        </div>


      }































    {/* 


      <div className="mobile-navbar">
        mobile-navabar

      </div> */}

    </>
  )
}

export default Navbar;