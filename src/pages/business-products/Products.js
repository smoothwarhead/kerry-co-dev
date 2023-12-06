import React, { useContext, useState, useLayoutEffect, useEffect } from 'react'
import './products.css';
import products from "../../data/products.json";
import ProductCard from '../../component/product-cards/ProductCard';
import Loader from '../../component/loader/Loader';
import { BusinessDataContext } from '../../context/BusinessDataContext';
import { LuListFilter } from "react-icons/lu";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import NavContext from '../../context/NavContext';
import { ViewContext } from '../../context/ViewContext';
import { useNavigate } from 'react-router-dom';
import Sort from '../../component/sort/Sort';

// const URL = "/products";



gsap.registerPlugin(ScrollTrigger);


const Products = () => {

  const { pendingData, setSelectedProduct, setQuickProduct } = useContext(BusinessDataContext);

  const { unScroll, setUnScroll, slide, slideMenu } = useContext(NavContext);
  
  const { mobile } = useContext(ViewContext);
  const [sticky, setSticky] = useState(false);


  const navigate = useNavigate();


  
  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

     

      if(!mobile){

        const ASIDE = document.querySelector('.filter-sort-con');
        const ENDHEIGHT = document.querySelector('.product-con');
        const PIN_DISTANCE = ENDHEIGHT.offsetHeight;
  
  
        ScrollTrigger.create({
          trigger: ASIDE,
          pin: true,
          start: `top top`,
          end: PIN_DISTANCE,
          pinSpacing: true,
          invalidateOnRefresh: true,
          // markers: true
        });

      }else{

    
        ScrollTrigger.killAll();
        return;
      }

    })

    return () => ctx.revert();

  }, [mobile]);



  useEffect(() => {

    if((slide || slideMenu) && mobile){
      setUnScroll(true);

    }else{
      setUnScroll(false);

    }

  }, [slide, slideMenu, mobile, setUnScroll])




  const handleMobileScroll = () => {
      const position = window.pageYOffset;

      const ASIDE  = document.querySelector('.m-filter-sort-con')
      const height = ASIDE?.offsetTop;
      
      if(position > height){
        setSticky(true)

      }else{
        setSticky(false);
      }
      // setScrollPosition(height);
  };


  useEffect(() => {
      window.addEventListener('scroll', handleMobileScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleMobileScroll);
      };
  }, []);



  const selectProduct = (product) => {
    setSelectedProduct(product);
    navigate(`/products/${product.ProductId}`);

  }


  const selectQuickProduct = (product) =>{
    setQuickProduct(product)
  }
  // console.log(scrollPosition);


  return (
    <>
       

      <div className={!mobile ? "product-page" : `m-product-page ${unScroll ? "unscroll" : ""}`}>

        <div className={!mobile ? "product-page-con" : "mobile-product-page-con"}>

          

            {pendingData ? 

              <Loader />

              :
              <>
                <div className={!mobile ? "filter-sort-con" : `m-filter-sort-con ${sticky ? "sticky" : ""}`}>
                  <div className="filter-title">
                    <LuListFilter className="filter-title-icon" />
                    <span className='filter-title-lbl'>Filter & Sort</span>
                    
                  </div>

                  <Sort />

                </div>

                <div className={!mobile ? "product-con" : "m-product-con"}>
                  {
                  
                    products.map((product, i) => (
                      <ProductCard
                        key={i}
                        product={product}
                        selectProduct={selectProduct}
                        selectQuickProduct = {selectQuickProduct}
                      
                      />
                    ))


                  }
                </div>

              </> 
            }
          
        </div>


      </div>

    </>
  )
}

export default Products;