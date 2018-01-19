import React, { Component } from 'react';

class Modal extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="modal">
				{this.props.children}
			</div>
		);
	}
}

export default Modal;