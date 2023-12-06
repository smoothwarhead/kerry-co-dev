import { Outlet } from 'react-router-dom';
import '../App.css';
import Footer from '../component/navigation/footer/Footer';
import Navbar from '../component/navigation/navbar/Navbar';
import MobileQuickView from '../component/mobile-quick-view/MobileQuickView';
import { useContext } from 'react';
import { ViewContext } from '../context/ViewContext';
import QuickProductView from '../component/quickProductView/QuickProductView';






const MainLayout = () => {

  const { mobile } = useContext(ViewContext);




  return (

    <>

			{mobile && <MobileQuickView />}

      {!mobile && <QuickProductView />}

    
    
      <div className="main-page">

        <Navbar />


        <div className="body-section">
            <Outlet />
        </div>

        <Footer />

        
      </div>

    </>
  )
}

export default MainLayout;