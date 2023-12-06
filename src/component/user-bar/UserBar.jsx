import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import NavContext from '../../context/NavContext';

const UserBar = () => {
    const navigate = useNavigate();

    const { slideAccount, setSlideAccount, openUser, setOpenUser} = useContext(NavContext);

    const handleSignInClick = () => {
        if(!slideAccount){
            setSlideAccount(true);
            return;
        }else{
            setSlideAccount(false);
            return;
        }
    }

    const handleCreateAccount = () => {
        setOpenUser(false);
        navigate("/register")
    }

    const handleTrackOrder = () => {
        setOpenUser(false);
        navigate("/track-order");
    }


    useEffect(() => {
        if(slideAccount){
            setOpenUser(false)
        }
    }, [slideAccount, setOpenUser])

  return (
    <>

        <div className="user-menu">
            <span
                className="signin-link"
                onClick={handleSignInClick}
            >
                Sign In
            </span>

            <span
                className="signin-link"
                onClick={handleCreateAccount}
            >
                Create Account
            </span>

            <span
                className="signin-link"
                onClick={handleTrackOrder}
            >

                Track Order
            </span>
        </div>
    
    
    </>
  )
}

export default UserBar;