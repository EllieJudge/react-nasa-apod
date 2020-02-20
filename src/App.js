import React, { Component } from "react";
import "./App.css";
import Headers from "./Components/Headers/Headers";
import Picture from './Components/Picture/Picture';
import Description from './Components/Description/Description';
const axios = require("axios");

class App extends Component {
	state = {
    title: "",
		date: "",
		hdurl: "",
		description: "",
		copyright: "",
	};
	componentDidMount() {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=vPIRFhKFZUMfMsoUiqSg7kQ2RQzecfrdqL1meh7F"
			)
			.then(response => {
        console.log('Success: ', response)
				this.setState({
          title: response.data.title,
					date: response.data.date,
					hdurl: response.data.hdurl,
					description: response.data.explanation,
					copyright: response.data.copyright,
				});
			})
			.catch(error => {
				console.log("Error: ", error);
			})
			.finally(() => {
				console.log("");
			});
	}
	render() {
		// console.log("state: ", this.state);
		return (
			<div className="App">
				<header className="App-header">
					<Headers title={this.state.title} />
					<Picture pic={this.state.hdurl} />
					<Description desc={this.state.description} date={this.state.date} copyright={this.state.copyright} />
				</header>
			</div>
		);
	}
}

export default App;
