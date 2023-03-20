import React from "react";
import { Link, useParams } from "react-router-dom";

const ColorPage = ({ getHex }) => {
	const { color } = useParams();
	const hex = getHex(color);
	return (
		<div style={{ backgroundColor: hex, width: "100vw", height: "100vh" }}>
			<p style={{ color: "black" }}>This is {color}</p>
			<Link to="/colors">Go Back</Link>
		</div>
	);
};

export default ColorPage;
