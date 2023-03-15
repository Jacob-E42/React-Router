import chips from "./chips.jpeg";
import { Link } from "react-router-dom";
const Chips = () => {
	return (
		<div>
			<h1>Chips!</h1>
			<img alt="chips" src={chips} />

			<Link to={"/"} className="GoBack">
				Go Back
			</Link>
		</div>
	);
};

export default Chips;
