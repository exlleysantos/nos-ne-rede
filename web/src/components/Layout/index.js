import React from 'react';

import Navigation from '../Navigation';
import Workspace from '../Workspace';
import { Container } from './styles';

const Layout = ({ children }) => {
	return (
		<Container>
			<Navigation />
			<Workspace>{children}</Workspace>
		</Container>
	);
};

export default Layout;
