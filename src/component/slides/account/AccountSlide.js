import '../menu/menu-slide.css';
import './account-slide.css';
import { useRef, useEffect, useContext, useState } from 'react';
import { gsap, Power1 } from 'gsap';
// import ForgotSlide from './ForgotSlide';
import { Link } from 'react-router-dom';
import { signInInputs } from '../../../utils/inputs';
import NavContext from '../../../context/NavContext';
import usePasswordToggle from '../../../hooks/usePasswordToggle';
import FormInput from '../../forms/formInput/FormInput';
import { HiX, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { hasEmpty } from '../../../utils/methods';
import { ViewContext } from '../../../context/ViewContext';















const initialValues = {
    email: "",
    password: ""
}

const AccountSlide = () => {

    const accountRef = useRef();
    const containerRef = useRef();


    const [values, setValues] = useState(initialValues);

    const [error, setError] = useState(false);



    const {setSlideMenu, slideAccount, setSlideAccount, setSlideForgot} = useContext(NavContext);


    const { mobile } = useContext(ViewContext);

    const {InputType, Icon} = usePasswordToggle();

   

    const tl = useRef();


    useEffect(() => {
        
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(containerRef.current, {
            display: "block",
            duration: 0,
            ease: Power1.easeInOut
        });

        if(!mobile){
            tl.current.to(accountRef.current, {
                right: 0,
                duration: 0.5,
                ease: Power1.easeInOut
            });
        }else{
            tl.current.to(accountRef.current, {
                left: 0,
                duration: 0.5,
                ease: Power1.easeInOut
            });
        }

        
        


    }, [mobile]);


    useEffect(() => {
        
     slideAccount ? tl.current.play() : tl.current.reverse();



    }, [slideAccount]);


    const handleForgotClick = () => {
        if(slideAccount){
            setSlideAccount(false);
          }
      
          setSlideForgot(true);
    }


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
    }


    const handleSubmit = () => {
        // e.preventDefault();

        if(hasEmpty(values)){
            setError(true);
        }
        
      
        else{
            console.log(values);
        }


    }

    const accountReturn = () => {
        setSlideAccount(false);
        setSlideMenu(true);
    }

    // const closeAcccount = () => {
    //     navigate("/register");
    //     setSlide(false);
    // }

    

  return (
    <>
        {/* <ForgotSlide /> */}
        <div className={!mobile ? 'slide-container': 'menu-slide-container'} ref={containerRef}>
            <div 
                className={!mobile ? "account-slide" : "mobile-menu-container" }
                ref={accountRef}
            >

                
                <div className={!mobile ? "account-slide-hdr" : "mobile-account-slide-hdr"}>
                    {!mobile ?
                        <HiX 
                            className='close-icon'
                            onClick={() => setSlideAccount(false)}
                            
                        />
                        :
                        <HiOutlineArrowNarrowLeft
                            className='close-icon'
                            onClick={accountReturn}

                        />
                    }
                
                </div>

                <div className="account-container">
                    <div className="act-title">Sign In</div>
                    <div className="inp-container">


                        {
                            signInInputs.map((input, index) => (
                                <FormInput 
                                    key={index}
                                    inputType={input.name === "email" ? "email" : !input.name === "email" && !input.isPassword ? "text" : InputType}
                                    {...input}
                                    icon={!input.isPassword ? null : Icon}    
                                    value={values[input.name]} 
                                    handleChange={handleChange}  
                                    isPassword={input.isPassword}
                                    validate={input.validate}
                                    errorMessage = {input.errorMessage}
                                    error = {error}
                                    cName = "input"

                                />
                            ))
                        }


                    </div>

                    <div className="forget-password" onClick={handleForgotClick}>Forgot Password?</div>

                    <div className="sign-in-btn" onClick={handleSubmit}>Sign in</div>

                    <div className="no-act-link">
                        <span>Don't have an account?</span>
                       <Link to="/register" onClick={() => setSlideAccount(false)}><span className='create-link'>Create Account</span></Link> 
                    </div>
                </div>


            </div>
        </div>
    
    </>
  )
}

export default AccountSlide;