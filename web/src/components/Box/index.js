import React from 'react';

import { Container } from './styles';

const Box = ({ children, ...rest }) => <Container {...rest}>{children}</Container>;

export default Box;
