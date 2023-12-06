import { createContext, useEffect, useRef, useState } from 'react';


export const NavContext = createContext({});

export const NavProvider = ({ children }) => {

    

    const [isDark, setIsDark] = useState(true);
    const [slideAccount, setSlideAccount] = useState(false);
    const [slideCart, setSlideCart] = useState(false);
    const [slideSort, setSlideSort] = useState(false);
    const [slideSearch, setSlideSearch] = useState(false);
    const [slideForgot, setSlideForgot] = useState(false);
    const [slideMenu, setSlideMenu] = useState(false);
    const [slideProfile, setSlideProfile] = useState(false);
    const [unScroll, setUnScroll] = useState(false);
	const [openUser, setOpenUser] = useState(false);
    const [slide, setSlide] = useState(false);

    const searchInputRef = useRef();


    



    

    useEffect(() => {
        if(slide){
            return
        }else{
            setSlideAccount(false);
            setSlideMenu(false);
            setUnScroll(false);
        }
    }, [slide, setSlideAccount, setSlideMenu, setUnScroll]);


    
    


    return (
        <NavContext.Provider value={{ 
            slideAccount, 
            setSlideAccount,
            slideCart, 
            setSlideCart,
            slideSearch, 
            setSlideSearch,
            slideForgot, 
            setSlideForgot,
            slideMenu, 
            setSlideMenu,
            searchInputRef,
            isDark, 
            setIsDark,
            slideProfile, 
            setSlideProfile,
            unScroll, setUnScroll,
            slide, setSlide,
            openUser, setOpenUser,
            slideSort, setSlideSort

          }}
        >
            {children}
        </NavContext.Provider>
    )

}

export default NavContext;