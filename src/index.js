import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

import Main from './components/main';
import FIREBASE from './constants/firebase';

const fb = firebase.initializeApp(FIREBASE.config);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
