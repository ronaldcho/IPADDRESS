import React, { Component } from "react";

var xhr;

class IPAddressContainer extends Component {
	//constructor
	constructor(props) {
		super(props);

		this.state = {
			ip_address: "..Nothing showing"
		};

		this.processRequest = this.processRequest.bind(this);
	}
	
	ComponentDidMount() {
		xhr = new XMLHttpRequest();
		xhr.open("GET", "https://ipinfo.io/json", true);
		xhr.send();

		xhr.addEventListener("readystatechange", this.processRequest, false);
	}

	processRequest() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var response = JSON.parse(xhr.responseText);
			console.log(response);

			this.setState({
				ip_address: response.ip
			});
		}
		/*
		var response = JSON.parse(xhr.responseText);
		this.setState({
			ip_address: response.ip
		});	*/
	}

	render(){
		return(
			<div>{this.state.ip_address}</div>
		);
	}
};
export default IPAddressContainer;
