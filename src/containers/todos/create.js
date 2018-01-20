import { connect } from 'react-redux';

import TodoCreate from '../../components/todos/create';
import TodoActions from '../../actions/todo';

function mapDispatchToProps(dispatch) {
	return {
		CreateTodo: (data) => {
			const promise = dispatch(TodoActions.Create(data));
			return promise;
		}
	};
}

export default connect(null, mapDispatchToProps)(TodoCreate);