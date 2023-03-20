import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewColorForm = ({ submit, history }) => {
	const [formData, setFormData] = useState({ name: "", color: "" });

	const navigate = useNavigate();

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(formData => ({
			...formData,
			[name]: value
		}));
	};

	const handeSubmit = e => {
		e.preventDefault();
		submit({ [formData.name]: formData.color });
		setFormData({ name: "", color: "" });
		navigate("/colors");
	};

	return (
		<form onSubmit={handeSubmit}>
			<h4>Add a color</h4>
			<label htmlFor="name">Color Name</label>
			<input
				id="name"
				type="text"
				name="name"
				value={formData.name}
				onChange={handleChange}
			/>
			<br />
			<label htmlFor="color">Color Value</label>{" "}
			<input
				id="color"
				name="color"
				type="color"
				value={formData.color}
				onChange={handleChange}
			/>
			<br />
			<button type="submit">Submit</button>
			<button type="link">
				<Link to="/colors">Go Back</Link>
			</button>
		</form>
	);
};

export default NewColorForm;
