import React from "react";
import axios from "axios";
import Quote from "./Quote";

import { useState,useEffect } from "react";

function AuthorQuotes({ data }) {
	const quoteData = data.data[0];

	const [authorQuoteData, setAuthorQuoteData] = useState([]);

	useEffect(() => {
		axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${quoteData.quoteAuthor}&limit=3`).then((res) => {
			// console.log(res.data.data);
			setAuthorQuoteData(res.data.data);
		});
	}, []);

	return (
		<div className="authorQuotes-container">
			<div className="authorName-container">
				<p>{quoteData.quoteAuthor}</p>
			</div>
			<div>
				{authorQuoteData.map((data) => {
					return <Quote key={data._id} quoteData={data} />;
				})}
			</div>
		</div>
	);
}

export default AuthorQuotes;
