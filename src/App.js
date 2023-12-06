// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Products from "./pages/business-products/Products";
import SignUp from "./pages/account/signup/SignUp";
import Checkout from "./pages/checkout/Checkout";
import SelectedBusinessProduct from "./pages/selected-products/SelectedBusinessProduct";




function App() {
	

	return (
		<div className="App">
			<BrowserRouter>

				


				
				{/* customer routes */}



				<Routes>
				

					<Route path="/" element={ <MainLayout /> }> 

						{/* public routes */}
						<Route path="/register" element={ <SignUp /> } /> 

						<Route path="/" element={ <Products /> } /> 
						<Route path="/products/:id" element={ <SelectedBusinessProduct /> } /> 
						<Route path="/products/:name/:size" element={ <SelectedBusinessProduct /> } /> 

						<Route path="/checkout" element={ <Checkout /> } /> 
						{/* <Route path="/register" element={ <CreateAccount /> } /> 
						<Route path="/products/:id" element={ <SelectedBusinessProduct /> } /> 
						<Route path="/checkout" element={ <Checkout /> } />  */}


						
					</Route>


				
				</Routes>
			
			</BrowserRouter>
		</div>
	);
}

export default App;
