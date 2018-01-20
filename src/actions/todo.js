import TodoAPI from '../apis/todo';
import ACTIONS from '../constants/action-types';

const TodoActions = {
	Create: (data) => {
		return (dispatch) => {
			const promise = TodoAPI.Create(data);
			promise.then(() => {
				dispatch({
					type: ACTIONS.todo.create,
					payload: data
				});
			});
			return promise;
		};
	}
};

export default TodoActions;