import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import TodoCreate from './todos/create';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showCreateModal: false
		};
		this.hideCreateModal = this.hideCreateModal.bind(this);
	}

	hideCreateModal() {
		this.setState({
			showCreateModal: false
		});
	}

	render() {
		return (
			<div className="home">
				<button className="btn" onClick={() => this.setState({showCreateModal: true})}>Create a Todo</button>
				<TodoCreate show={this.state.showCreateModal} hide={this.hideCreateModal} />
			</div>
		);
	}
}

export default Home;