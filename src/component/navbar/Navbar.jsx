import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { ReactComponent as Storemap } from "./navicon/storemap.svg";
import { ReactComponent as Logo } from "./navicon/Logo.svg";
import { ReactComponent as Search } from "./navicon/search.svg";
import { ReactComponent as User } from "./navicon/user.svg";
import { ReactComponent as Shoppingbag } from "./navicon/shoppingbag.svg";
import Headroom from "react-headroom";
import SignInForm from "../signinform/SignInForm";
import { Link } from "react-router-dom";
import CancelSvg from "../cancelsvg/CancelSvg";
import CartBag from "../cartbag/CartBag";

function Navbar() {
	const [searchOpen, setSearchOpen] = useState(false);
	const [openSignIn, setOpenSignIn] = useState(false);
	const [openUser, setOpenUser] = useState(false);
	const [openCartBag, setOpenCartBag] = useState(false);

	const showCartBag = () => {
		setOpenCartBag(true);
		if (typeof window != "undefined" && window.document) {
			document.body.style.overflow = "hidden";
		}
	};
	const ClosecartBag = () => {
		setOpenCartBag(false);
		document.body.style.overflow = "unset";
	};
	return (
		<div className="navbar">
			<div className="top-nav">
				40% OFF EVERYTHING
				<span>
					<u>Details</u>
				</span>
			</div>
			<Headroom className="headroom">
				<div className="mid-nav-container">
					<div className="mid-nav">
						<div className="store">
							<Link to="/">
								<Storemap /> Stores
							</Link>
						</div>
						<div className="logo">
							<Link to="/">
								<Logo />
							</Link>
						</div>
						<div className="search-div">
							<Search
								style={{
									cursor: "pointer",
								}}
								onClick={() => {
									setSearchOpen(!searchOpen);
								}}
							/>
							<div className="user-over-container">
								<User
									onClick={() => {
										setOpenUser(!openUser);
									}}
									style={{ cursor: "pointer" }}
								/>
								{openUser && (
									<div className="user-menu">
										<p
											className="signin-link"
											onClick={() => {
												setOpenSignIn(!openSignIn);
												setOpenUser(!openUser);
											}}>
											Sign In
										</p>
										<p
											className="signin-link"
											onClick={() => {
												setOpenUser(!openUser);
											}}>
											<Link to="/signup">Create Account</Link>
										</p>
										<p
											className="signin-link"
											onClick={() => {
												setOpenUser(!openUser);
											}}>
											<Link to="/trackorder">Track Order</Link>
										</p>
									</div>
								)}
							</div>
							<Shoppingbag
								style={{
									width: "17px",
									height: "17px",
									fill: "#00174f",
									cursor: "pointer",
								}}
								onClick={showCartBag}
							/>
						</div>
					</div>
					<div className="down-nav">
						<ul>
							<li>
								<NavLink to="./">NewArrivals</NavLink>
							</li>
							<li>
								<NavLink to="./">Men</NavLink>
							</li>
							<li>
								<NavLink to="./">Kids</NavLink>
							</li>
							<li>
								<NavLink to="./">Home</NavLink>
							</li>
							<li>
								<NavLink to="./">Pre-owned</NavLink>
							</li>
							<li>
								<NavLink to="./">Sale</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</Headroom>
			{searchOpen && (
				<div className="search">
					<div className="search-con">
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
								setSearchOpen(!searchOpen);
							}}>
							<CancelSvg />
						</div>
					</div>
				</div>
			)}
			{openSignIn && (
				<div className="signin-container">
					<div className="sign-in">
						<div className="cancel-sign-in-btn-con">
							<button
								className="cancel-sign-in"
								onClick={() => {
									setOpenSignIn(!openSignIn);
								}}>
								<CancelSvg />
							</button>
						</div>
						<h1 className="sign-in-title">SIGN IN</h1>
						<div className="signin-form-container">
							<SignInForm />
						</div>
						<div className="signin-sign-up">
							<div className="dont-have-account">Don't have an account?</div>
							<Link
								to="/signup"
								onClick={() => {
									setOpenSignIn(!openSignIn);
								}}>
								Create Account
							</Link>
						</div>
					</div>
				</div>
			)}

			{openCartBag && <CartBag ClosecartBag={ClosecartBag} />}
		</div>
	);
}

export default Navbar;
