import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import Error404 from '../pages/404';

import Layout from '../components/Layout';

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

				<Route exatc path='/profile'>
					<Layout>
						<Profile />
					</Layout>
				</Route>

				<Route path='*'>
					<Error404 />
				</Route>
			</Switch>
		</Router>
	);
};

export default AuthStack;
