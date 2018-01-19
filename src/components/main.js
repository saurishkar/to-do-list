import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import reducers from '../reducers';
import configRoutes from '../routes';

const createStoreWithMiddleware = applyMiddleware(logger, ReduxThunk)(createStore);

class Main extends Component {
	render() {
		return (
			<Provider store={createStoreWithMiddleware(reducers)}>
				<BrowserRouter>
					{configRoutes()}
				</BrowserRouter>
			</Provider>
		);
	}
}

export default Main;