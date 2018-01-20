import firebase from 'firebase';

import FIREBASE from '../constants/firebase';

const TodoAPI = {
	Create: (data) => {
		const promise = firebase.database().ref(FIREBASE.routes.todos).push(data);
		return promise;
	}
};

export default TodoAPI;