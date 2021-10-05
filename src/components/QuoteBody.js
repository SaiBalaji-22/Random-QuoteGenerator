import React from "react";
import Quote from "./Quote";

import { Link } from 'react-router-dom';

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function QuoteBody({ data }) {
  const quoteData = data.data[0];
  // const dataValue = useContext(QuoteContext);
	return (
		<div className="body-container">
      <Quote quoteData={quoteData }/>
			<div className="author-btn-container">
				<Link to="/authorquotes">
					<div className="author-container">
						<div className="author-details">
              <p className="author">{quoteData.quoteAuthor }</p>
              <p className="genre">{quoteData.quoteGenre }</p>
						</div>
						<div className="arrow-icon">
              <ArrowForwardIcon fontSize="large"/>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default QuoteBody;
