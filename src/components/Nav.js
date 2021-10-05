import React from "react";
import { useState } from "react";
import AutorenewIcon from "@material-ui/icons/Autorenew";

import { Link } from 'react-router-dom';

import axios from "axios";

function Nav({setData}) {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(true);

		axios.get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
			.then((response) => {
				// console.log(response.data);
				setData(response.data);
				setIsActive(false);
			});
		
	};
	return (
		<>
			<div className="button-container">
				<Link to="/" className={`btn`} onClick={handleClick}>
					<span>Random</span>
					<AutorenewIcon className={`icon ${isActive ? "spin" : null}`} color="inherit" fontSize="medium" />
				</Link>
			</div>
		</>
	);
}
export default Nav;
