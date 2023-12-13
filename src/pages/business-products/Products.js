import React, { useContext, useState, useLayoutEffect, useEffect } from 'react'
import './products.css';
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
import SortSlide from '../../component/slides/sort/SortSlide';
import useFetch from '../../hooks/useFetch';
import FilterItem from '../../component/filter-items/FilterItem';
// import products from '../../data/products.json'
// const URL = "/products";



gsap.registerPlugin(ScrollTrigger);


const Products = () => {

  const{ data, loading } = useFetch(`business-products`);

 
  // console.log(products);


  const { businessProducts, filterItems, removeAllFilters, setBusinessProducts, setPendingData,  pendingData, setSelectedProduct, setQuickProduct } = useContext(BusinessDataContext);

  const { unScroll, setUnScroll, slide, slideMenu, setSlideSort } = useContext(NavContext);
  
  const { mobile } = useContext(ViewContext);
  const [sticky, setSticky] = useState(false);

  


  const navigate = useNavigate();






  
  useEffect(() => {
    if(loading){
      setPendingData(true);
    }else{
      setPendingData(false);



      if(filterItems.length === 0){
        setBusinessProducts(data);
      }else{

        let newProducts = [];


			  const checkPackTag = filterItems.find(f => f.tag === 'packSize');

        if(checkPackTag){
          const filtered = data.filter(p => p.Variations[0].NumberInPack.toString() === checkPackTag.pack.toString());

          newProducts = filtered;


        };

			  const checkSizeTag = filterItems.find(f => f.tag === 'size');

        if(checkSizeTag){

          if(checkPackTag){
            
            const filtered = newProducts.filter(p => p.Variations[0].Size === checkSizeTag.size);

            newProducts = filtered;

          }else{

            const filtered = data.filter(p => p.Variations[0].Size === checkSizeTag.size);

            newProducts = filtered;

          }

         

        }

			  const checkPriceTag = filterItems.find(f => f.tag === 'price');

        if(checkPriceTag){
          if(checkPackTag || checkSizeTag){

            const filtered = newProducts.filter(p => p.Variations[0].UnitPrice > checkPriceTag.minPrice && p.Variations[0].UnitPrice <= checkPriceTag.maxPrice);

            newProducts = filtered;


          }else{
            const filtered = data.filter(p => p.Variations[0].UnitPrice > checkPriceTag.minPrice && p.Variations[0].UnitPrice <= checkPriceTag.maxPrice);

            newProducts = filtered;
  
          }

        }else{

          setBusinessProducts(data);
        }

        setBusinessProducts(newProducts);
        







      }



    }
  }, [setBusinessProducts, filterItems, data, setPendingData, loading])



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

  const openFilter = () =>{
    if(!mobile){
      return;
    }else{
      setSlideSort(true);
    }
  }
 

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      if(pendingData){
        return;
      }else{

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

      }
      

    })

    return () => ctx.revert();

  }, [mobile, loading, pendingData]);





 

  if(pendingData) return <Loader />;  

  return (
    <>


      <SortSlide />
       

      <div className={!mobile ? "product-page" : `m-product-page ${unScroll ? "unscroll" : ""}`}>

        <div className={!mobile ? "product-page-con" : "mobile-product-page-con"}>


              <>
                
                <div 
                  className={!mobile ? "filter-sort-con" : `m-filter-sort-con ${sticky ? "sticky" : ""}`}
                  >
                  <div className="filter-title">
                    <div className="filter-title-con" onClick={openFilter}>
                      <LuListFilter className="filter-title-icon" />
                      <span className='filter-title-lbl'>{`Filter & Sort ${filterItems.length > 0 ? `(${filterItems.length})` : ""}`}</span>

                    </div>
                    

                    {filterItems.length > 0 &&
                      <span 
                        className="clear-all-btn"
                        onClick={() => removeAllFilters()}
                      >
                        Clear All
                      </span>

                    }
                    
                  
                    
                  </div>

                  {
                    !mobile && 
                      <Sort />
                     
                  }

                </div>

                <div className={!mobile ? "product-con" : "m-product-con"}>

                  {filterItems.length > 0 &&
                    <div className="product-filters">
                      {
                        filterItems.map((item, i) => (
                          <FilterItem
                            newItem={item}
                            key={i}

                          />

                        ))
                      }
                    </div>
                  }


                  {businessProducts.length === 0 ?


                    filterItems.length > 0 ?
                      <div className="no-data-con">
                        <span className="no-data">No available product that matches the applied filter criteria</span>

                      </div>
                      :

                      <div className="no-data-con">
                        <span className="no-data">No product in stock at the moment. please check back later</span>


                      </div>

                  
                    :

                    businessProducts.map((product, i) => (
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

            
          
        </div>


      </div>

    </>
  )
}

export default Products;