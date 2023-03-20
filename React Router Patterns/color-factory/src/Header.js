import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header style={{ backgroundColor: "black" }}>
			<h1 style={{ color: "white" }}>Welcome to the Color Factory</h1>
			<Link
				to="/colors/new"
				style={{ color: "white" }}>
				Add a color
			</Link>
		</header>
	);
};

export default Header;
