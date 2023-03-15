import candyBar from "./candyBar.jpeg";
import { Link } from "react-router-dom";
const CandyBar = () => {
	return (
		<div>
			<h1>Candy Bar !</h1>
			<img
				alt="candyBar"
				src={candyBar}
			/>
			<Link
				to={"/"}
				className="GoBack">
				Go Back
			</Link>
		</div>
	);
};

export default CandyBar;
