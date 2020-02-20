import React from "react";
import "./style.css";

function Description(props) {
	console.log("Des: ", props);

	const { desc, date, copyright } = props;
	return (
		<div>
			<p>{desc}</p>
			<p>{date}</p>
      <p>{copyright}</p>
		</div>
	);
}

export default Description;
