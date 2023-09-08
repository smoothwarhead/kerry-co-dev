// import logo from "./logo.svg";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import BodyAndNewsletter from "./component/bodyAndNewsletter/BodyAndNewsletter";
import SignUp from "./pages/signup/SignUp";
import TrackOrder from "./pages/trackorder/TrackOrder";
import Cart from "./pages/cart/Cart";

function App() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "auto" });
	}, [pathname]);
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/trackorder" element={<TrackOrder />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
			<BodyAndNewsletter />
		</div>
	);
}

export default App;
