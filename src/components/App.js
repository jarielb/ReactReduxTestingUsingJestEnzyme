import React,{ Component } from "react";
import Home from "./Home"

export default class App extends React.Component{
	render(){	
		return(
			<div className="grid-container">
				<h1>Basic Calculator</h1>
				<Home/>
			</div>
		);
	}
}