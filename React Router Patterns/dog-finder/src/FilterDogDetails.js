import React from "react";
import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

const FilterDogDetails = ({ dogs }) => {
	const { name } = useParams();

	const thisDog = dogs.find(dog => dog.name === name);

	return <DogDetails dog={thisDog} />;
};

export default FilterDogDetails;
