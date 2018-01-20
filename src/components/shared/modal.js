import React, { Component } from 'react';

class Modal extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={`modal modal-${this.props.show ? 'active' : 'inactive'}`}>
				<a role="button" className="closeBtn" onClick={() => this.props.hide()}>&times;</a>
				{this.props.children}
			</div>
		);
	}
}

export default Modal;