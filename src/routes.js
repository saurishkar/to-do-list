import React from 'react';
import { Route, Switch } from 'react-router';

import ROUTES from './constants/app-routes';
import Home from './components/home';

const configRoutes = () => {
	return (
		<Switch>
			<Route path={ROUTES.home} component={Home} />
		</Switch>
	);
};

export default configRoutes;