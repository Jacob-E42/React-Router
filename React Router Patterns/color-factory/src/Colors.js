import React from "react";
import Header from "./Header";
import ColorLinks from "./ColorLinks";

const Colors = ({ colors }) => {
	return (
		<>
			<Header />
			<ColorLinks colors={colors} />
		</>
	);
};

export default Colors;
