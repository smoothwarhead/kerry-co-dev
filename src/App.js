// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import BodyAndNewsletter from "./component/bodyAndNewsletter/BodyAndNewsletter";
import SignUp from "./pages/signup/SignUp";
import TrackOrder from "./pages/trackorder/TrackOrder";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/trackorder" element={<TrackOrder />} />
			</Routes>
			<BodyAndNewsletter />
		</div>
	);
}

export default App;
