import React from "react";
import { Link } from "react-router-dom";
const VendingMachine = () => {
	return (
		<div>
			<h1>Vending Machine!</h1>
			<h2>Select an Item</h2>
			<nav>
				<h1>
					<Link exact to="chips">
						Chips
					</Link>
				</h1>
				<h1>
					<Link exact to="soda">
						Soda
					</Link>
				</h1>
				<h1>
					<Link exact to="candybar">
						Candy Bar
					</Link>
				</h1>
			</nav>
		</div>
	);
};

export default VendingMachine;
