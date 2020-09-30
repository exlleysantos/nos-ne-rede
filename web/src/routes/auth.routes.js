import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Error404 from '../pages/404';

const forbiddenRoutes = ['/home', '/register'];

const AuthStack = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Login />
				</Route>

				<Route exact path={forbiddenRoutes}>
					<Redirect to='/' />
				</Route>

				<Route exact path='*'>
					<Error404 />
				</Route>
			</Switch>
		</Router>
	);
};

export default AuthStack;
