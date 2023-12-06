import { useContext, useEffect, useRef } from "react";
import NavContext from "../../../context/NavContext";
import { gsap, Power1 } from 'gsap';
import { HiX } from 'react-icons/hi';
import Sort from "../../sort/Sort";





const SortSlide = () => {

  const { slideSort, setSlideSort } = useContext(NavContext);


    const sortRef = useRef();
    const containerRef = useRef();


    const tl = useRef();



    useEffect(() => {
        
        tl.current = gsap.timeline({ paused: true });
  
        tl.current.to(containerRef.current, {
            display: "block",
            duration: 0,
            ease: Power1.easeInOut
        });
  
        tl.current.to(sortRef.current, {
            right: 0,
            duration: 0.5,
            ease: Power1.easeInOut
        });
        
  
  
    }, [])
  
  
    useEffect(() => {
        
     slideSort ? tl.current.play() : tl.current.reverse()
  
  
  
    }, [slideSort]);



  return (
    <>
        <div className='slide-container' ref={containerRef}>
            <div 
                className="cart-slide" 
                ref={sortRef}
            >

                <div className="cart-slide-hdr">
                        
                    <div className="cart-title">
                        Filter & Sort
                    </div>
                    <HiX 
                        className='close-icon'
                        onClick={() => setSlideSort(false)}
                        
                    />
            
                </div>

                <div className="cart-slide-body">

                    <Sort />
                </div>

            </div>
        </div>
    </>
  )
}

export default SortSlide