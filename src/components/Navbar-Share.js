import React, { Component } from 'react';
import enhanceWithClickOutside from "react-click-outside";

class Share extends Component {

	state = {
		active: false
	}

	toggleShare = () => {
		this.setState( {
			active: !this.state.active
		} )
	}

	handleClickOutside = () => {
		this.setState( {
			active: false
		} )
	}

	render () {
		return (
			<li className="share-link">
				<button className={ "navlink  share " + ( this.state.active ? "active " : "" ) } onClick={ this.toggleShare }>Share</button>
				<ul className="float">
					<li><a href="https://www.google.com">Facebook</a></li>
					<li><a href="https://www.google.com">Twitter</a></li>
					<li><a href="https://www.google.com">LinkedIn</a></li>
				</ul>
			</li>
		)
	}
}

export default enhanceWithClickOutside( Share )