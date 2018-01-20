import ACTIONS from '../constants/action-types';

const TodoReducer = (state = {}, action) => {
	switch(action.type) {
	case ACTIONS.todo.create: return state;

	default: return state;
	}
};

export default TodoReducer;