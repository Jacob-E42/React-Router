import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
	return (
		<div>
			<ul>
				{dogs.map(dog => (
					<li key={dog.name}>
						<h4>
							<Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
						</h4>
						<img
							src={dog.src}
							alt={dog.name}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DogList;
