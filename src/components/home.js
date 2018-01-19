import React, { Component } from 'react';

import Modal from './shared/modal';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<button className="btn">Create a Todo</button>
				<Modal>
					<div className="title">Create ToDo</div>
					<div className="body">
					</div>
					<div className="footer">
					</div>
				</Modal>
			</div>
		);
	}
}

export default Home;