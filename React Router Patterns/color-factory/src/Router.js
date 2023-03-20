import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Colors from "./Colors";
import ColorPage from "./ColorPage";
import NewColorForm from "./NewColorForm";

const Router = () => {
	const [colors, setColors] = useState({ blue: "blue", red: "red", green: "green" });

	const submit = form => {
		console.log(form);
		setColors(colors => {
			return { ...form, ...colors };
		});
	};

	const getHex = color => {
		const hex = colors[color];
		return hex;
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path="/colors"
					element={<Colors colors={colors} />}
				/>
				<Route
					exact
					path="/colors/:color"
					element={<ColorPage getHex={getHex} />}
				/>
				<Route
					exact
					path="/colors/new"
					element={<NewColorForm submit={submit} />}
				/>
				<Route
					path="*"
					element={<Navigate to="/colors" />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
