import React from "react";
import Chips from "./Chips";
import CandyBar from "./CandyBar";
import Soda from "./Soda";
import VendingMachine from "./VendingMachine";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navbar = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path="/chips"
					element={<Chips />}
				/>
				<Route
					exact
					path="/soda"
					element={<Soda />}
				/>
				<Route
					exact
					path="/candybar"
					element={<CandyBar />}
				/>
				<Route
					exact
					path="/"
					element={<VendingMachine />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Navbar;
