import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import QuoteBody from "./QuoteBody";
import AuthorQuotes from "./AuthorQuotes";

import { Route, Switch } from "react-router-dom";

function Container() {
	const [data, setData] = useState({
		data: [
			{
				_id: "5eb17aaeb69dc744b4e72a4a",
				quoteText: "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.",
				quoteAuthor: "Bill Gates",
				quoteGenre: "business",
				__v: 0,
			},
		],
	});

	return (
		<div>
			{/* <QuoteContext.Provider value={data}> */}
			<Nav setData={setData} />

			{/* <QuoteBody data={data} /> */}
			{/* </QuoteContext.Provider> */}

			<Switch>
				<Route path="/" exact>
					<QuoteBody data={data} />
				</Route>
				<Route path="/authorquotes" exact>
					{" "}
					<AuthorQuotes data={data} />{" "}
				</Route>
			</Switch>
		</div>
	);
}

export default Container;
