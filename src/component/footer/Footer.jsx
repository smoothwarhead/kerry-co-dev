import React from "react";
import "./footer.css";
// import Firstlist from "./Firstlist";

function Footer() {
	// const firstListDatas = [
	// 	// {
	// 	// 	id: 99,
	// 	// 	header: "LET US HELP YOU",
	// 	// },
	// 	{
	// 		id: 1,
	// 		text: "Customer Service",
	// 	},
	// 	{
	// 		id: 2,
	// 		text: "Promotions",
	// 	},
	// 	{
	// 		id: 3,
	// 		text: "E-Gift Cards",
	// 	},
	// 	{
	// 		id: 4,
	// 		text: "Order Status",
	// 	},
	// 	{
	// 		id: 5,
	// 		text: "Your Order",
	// 	},
	// 	{
	// 		id: 6,
	// 		text: "Shipping",
	// 	},
	// 	{
	// 		id: 7,
	// 		text: "Returns",
	// 	},
	// 	{
	// 		id: 8,
	// 		text: "Size Guide",
	// 	},
	// 	{
	// 		id: 9,
	// 		text: "Group Discounts",
	// 	},
	// 	{
	// 		id: 10,
	// 		text: "Klarna",
	// 	},
	// 	{
	// 		id: 11,
	// 		text: "Store Directory",
	// 	},
	// 	{
	// 		id: 12,
	// 		text: "FAQs",
	// 	},
	// 	{
	// 		id: 13,
	// 		text: "Refer a Friend, Get 205 Off!",
	// 	},
	// ];
	// const firstlistCon = firstListDatas.map((firstList) => (
	// 	<Firstlist key={firstListDatas.id} firstList={firstList} />
	// ));
	return (
		<div className="footer">
			<div className="footer-upper-section">
				{/* {firstlistCon} */}
				<div className="footer-content">
					<div className="footer-content-header">LET US HELP YOU</div>
					<ul className="footer-ul">
						<li className="footer-li">Customer Service</li>
						<li className="footer-li">Promotions</li>
						<li className="footer-li">E-Gift Cards</li>
						<li className="footer-li">Order Status</li>
						<li className="footer-li">Your Order</li>
						<li className="footer-li">Shipping</li>
						<li className="footer-li">Returns</li>
						<li className="footer-li">Size Guide</li>
						<li className="footer-li">Group Discounts</li>
						<li className="footer-li">Klarna</li>
						<li className="footer-li">Store Directory</li>
						<li className="footer-li">FAQs</li>
						<li className="footer-li">Refer a Friend, Get 205 Off!</li>
					</ul>
				</div>
				<div className="footer-content">
					<div className="footer-content-header">GET TO KNOW US</div>
					<ul className="footer-ul">
						<li className="footer-li">Sustainability</li>
						<li className="footer-li">Careers</li>
						<li className="footer-li">Press</li>
						<li className="footer-li">Affiliate Program</li>
					</ul>
				</div>
				<div className="footer-content">
					<div className="footer-content-header">EXPL0RE</div>
					<ul className="footer-ul">
						<li className="footer-li">The Hilfiger Club</li>
						<li className="footer-li">Tommy Stories</li>
						<li className="footer-li">People's Place Program</li>
						<li className="footer-li">@TOMMYHILFIGER</li>
					</ul>
				</div>
				<div className="footer-content">
					<div className="footer-content-header">STORE LOCATOR</div>
					<div className="footer-content-header">CONTACT US</div>
					<ul className="footer-ul">
						<li className="footer-li">Newsletter Signup</li>
						<li className="footer-li">Chat</li>
					</ul>
					<div className="footer-social-icon">
						<div className="icon"></div>
						<div className="icon"></div>
						<div className="icon"></div>
						<div className="icon"></div>
						<div className="icon"></div>
					</div>
				</div>
			</div>
			<div className="footer-lower-section">
				<div className="footer-logo"></div>
				<ul className="footer-lower-section-ul">
					<li className="footer-lower-section-li">Terms & Conditions</li>
					<li className="footer-lower-section-li">Privacy Policy</li>
					<li className="footer-lower-section-li">Privacy Commitment</li>
					<li className="footer-lower-section-li">Interest Based Ads</li>
					<li className="footer-lower-section-li">
						Do Not Sell or Share My Personal Information
					</li>
					<li className="footer-lower-section-li">
						California, UK & Australia Supply Chain Disclosure
					</li>
					<li className="footer-lower-section-li">Brand Protection</li>
					<li className="footer-lower-section-li">Accessibility</li>
				</ul>
				<div className="web-id">Web ID: 598494870</div>
				<div className="copyright">
					@ 2023 Tommy Hilfiger Licensing, LLC. All rights reserved.
				</div>
			</div>
		</div>
	);
}

export default Footer;
