import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import Educators from '../pages/Educators';
import CreateCourse from '../pages/CreateCourse';
import CreateForum from '../pages/CreateForum';
import Forums from '../pages/Forums';
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

				<Route exatc path='/educators'>
					<Layout>
						<Educators />
					</Layout>
				</Route>

				<Route exatc path='/create-course'>
					<Layout>
						<CreateCourse />
					</Layout>
				</Route>

				<Route exatc path='/forums'>
					<Layout>
						<Forums />
					</Layout>
				</Route>

				<Route exatc path='/create-forum'>
					<Layout>
						<CreateForum />
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
