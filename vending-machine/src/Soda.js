import soda from "./soda.jpeg";
import { Link } from "react-router-dom";
const Soda = () => {
	return (
		<div>
			<h1>Soda!</h1>
			<img
				alt="soda"
				src={soda}
			/>
			<Link
				to={"/"}
				className="GoBack">
				Go Back
			</Link>
		</div>
	);
};

export default Soda;
