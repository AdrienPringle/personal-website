import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Contact.css";

//import components
// import Popup from "../components/Popup";
// import Pill from "../components/Pill";
import PageShade from "../components/PageShade";

//import contact info
import info from "./contactInfo.js";

export default function Contact() {
	const [clipboard, setClipboard] = useState("");

	const copy = (text) => {
		navigator.clipboard.writeText(text).then(() => setClipboard(text));
	};

	const contactGroup = (title, items) => {
		return (
			<React.Fragment key={title}>
				<div className="contact-section-header">{title}</div>
				<div className="contact-section">
					<div className="contact-section-content">
						{items.map((i) => contactItem(i))}
					</div>
				</div>
			</React.Fragment>
		);
	};
	const contactItem = ({ value, icon, active, isColored, isLink }) => {
		const isCopied = clipboard === value;
		const className = "contact-item " + (active ? "" : "inactive");
		const contents = (
			<>
				{React.createElement(icon, {
					className: "contact-icon",
					...(!isColored && { fill: "#f2d8f1" }),
					// ...(!active && { filter: "grayscale(100%)" }),
				})}
				<span>{value}</span>
			</>
		);
		return isLink ? (
			<a className={className} key={value} href={"https://" + value}>
				{contents}
			</a>
		) : (
			<div className={className} key={value} onClick={() => copy(value)}>
				{contents}
				<Popup isCopied={isCopied}>
					{isCopied ? "copied!" : active ? "copy" : "inactive"}
				</Popup>
			</div>
		);
	};

	return (
		<div id="Contact" className="Content">
			<Helmet>
				<title>Contact - Adrien Pringle</title>
				<link href="https://apringle.dev/Contact" rel="canonical"></link>
			</Helmet>
			<PageShade />
			<h2 id="header"> Contact </h2>
			<div id="contact-info">
				{Object.keys(info).map((title) => contactGroup(title, info[title]))}
			</div>
		</div>
	);
}

function Popup({ isCopied, children }) {
	return (
		<div className={`popup-positioner ${isCopied ? "anim" : ""}`}>
			<div className="contact-popup">{children}</div>{" "}
		</div>
	);
}
