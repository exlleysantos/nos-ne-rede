import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Error404 from '../pages/404';

const AuthStack = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Redirect to='/home' />
				</Route>

                <Route exatc path='/home'>
                    <h1>HOME</h1>
                </Route>

				<Route path='*'>
					<Error404 />
				</Route>
			</Switch>
		</Router>
	);
};

export default AuthStack;
