import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { ReactComponent as Storemap } from "./navicon/storemap.svg";
import { ReactComponent as Logo } from "./navicon/Logo.svg";
import { ReactComponent as Search } from "./navicon/search.svg";
import { ReactComponent as User } from "./navicon/user.svg";
import { ReactComponent as Shoppingbag } from "./navicon/shoppingbag.svg";

function Navbar() {
	return (
		<div className="navbar">
			<div className="top-nav">
				40% OFF EVERYTHING
				<span>
					<u>Details</u>
				</span>
			</div>
			<div className="mid-nav-container">
				<div className="mid-nav">
					<div className="store">
						<Storemap /> Stores
					</div>
					<div className="logo">
						<Logo />
					</div>
					<div className="search-div">
						<Search />
						<User />
						<Shoppingbag
							style={{ width: "17px", height: "17px", fill: "#00174f" }}
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
		</div>
	);
}

export default Navbar;
