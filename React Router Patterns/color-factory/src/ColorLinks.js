import React from "react";
import { Link } from "react-router-dom";

const ColorLinks = ({ colors }) => {
	return (
		<div>
			<p>Please select a color</p>
			<div>
				{Object.keys(colors).map(color => (
					<p className="color-link">
						<Link to={`/colors/${color}`}>{color}</Link>
					</p>
				))}
			</div>
		</div>
	);
};

export default ColorLinks;
