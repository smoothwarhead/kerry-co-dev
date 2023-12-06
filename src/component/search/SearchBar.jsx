import React, { useContext, useRef, useEffect } from 'react'
import CancelSvg from '../cancelsvg/CancelSvg';
import { ReactComponent as Search } from "../navigation/navicon/search.svg";
import './search-bar.css';
import '../slides/slides.css'
import NavContext from '../../context/NavContext';
import { gsap, Power1 } from 'gsap';














const SearchBar = () => {

    const {  slideSearch, setSlideSearch,} = useContext(NavContext);

   

    const searchRef = useRef();
    const containerRef = useRef();
  
    const tl = useRef();
  
  
  
    useEffect(() => {
        
        tl.current = gsap.timeline({ paused: true });
  
        tl.current.to(containerRef.current, {
            display: "block",
            duration: 0,
            ease: Power1.easeInOut
        });
  
        tl.current.to(searchRef.current, {
            right: 0,
            duration: 0.5,
            ease: Power1.easeInOut
        });
        
  
  
    }, [])
  
  
    useEffect(() => {
        
     slideSearch ? tl.current.play() : tl.current.reverse()
  
  
  
    }, [slideSearch]);
    
  return (
    <>
        <div className="slide-container" ref={containerRef}>
            <div className="search-con" ref={searchRef}>
              <div className="search-inp">
                <Search />
                <input
                  type="text"
                  name="search"
                  className="search-input"
                  placeholder="What are you looking for..."
                />
              </div>

              <div
                className="cancel"
                onClick={() => {
                  setSlideSearch(false);
                }}
                >
                <CancelSvg />
              </div>

            </div>
        </div>
    
    </>
  )
}

export default SearchBar;