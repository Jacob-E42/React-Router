import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ names }) => {
	console.log(names);
	return (
		<nav>
			<NavLink
				end
				key="home"
				to="/dogs">
				Home
			</NavLink>
			{names.map(name => {
				return (
					<NavLink
						key={name}
						to={`/dogs/${name}`}>
						{name}
					</NavLink>
				);
			})}
		</nav>
	);
};

export default Nav;
