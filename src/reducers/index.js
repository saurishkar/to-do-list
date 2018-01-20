import { combineReducers } from 'redux';
import {reducer as FormReducer} from 'redux-form';

import TodoReducer from './todo';

const RootReducer = combineReducers({
	form: FormReducer,
	todos: TodoReducer,
});

export default RootReducer;