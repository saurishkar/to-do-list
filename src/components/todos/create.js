import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import Modal from '../shared/modal';
import '../../public/stylesheets/modal.scss';
import '../../public/stylesheets/form.scss';

class TodoCreate extends Component {

	constructor(props) {
		super(props);
		this.renderInput = this.renderInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	renderInput(field) {
		return (
			<div className="form-field">
				<label htmlFor={field.input.name}>{`${field.input.name.charAt(0).toUpperCase()}${field.input.name.substr(1)}`}</label>
				<input {...field.input} className="form-control" type="text"/>
				{field.meta.touched && field.meta.error &&
       			<span className="error">{field.meta.error}</span>}
			</div>
		);
	}

	handleSubmit(values) {
		console.log(values);
	}

	render() {
		return (
			<Modal show={this.props.show} hide={this.props.hide}>
				<form className="todo-create-form" onSubmit={this.handleSubmit}>
					<div className="title">Create ToDo</div>
					<div className="body">
					
						<Field name="title" component={this.renderInput} />
						<Field name="description" component={this.renderInput} />
					
					</div>
					<div className="footer">
						<button className="btn btn-primary" type="submit">Create</button>
					</div>
				</form>
			</Modal>
		);
	}
}

export default reduxForm({
	form: 'TodoCreate'
})(TodoCreate);
