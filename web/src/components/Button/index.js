import React, { useRef } from 'react';
import Loader from 'react-loader-spinner';

import { getButtonColor } from '../../utils/helpers/styles';

import { Container, IconButtonContainer } from './styles';

const Button = ({ children, color, icon: Icon, isGhost, size, loading, disabled, ...rest }) => {
	const ref = useRef(null);

	const onClick = (e) => {
		if (loading || disabled) {
			return;
		}

		rest.onClick && rest.onClick(e);
	};

	return (
		<Container
			{...rest}
			ref={ref}
			disabled={disabled || loading}
			size={size}
			isGhost={isGhost}
			onClick={onClick}>
			{loading ? (
				<Loader
					type='TailSpin'
					color={isGhost ? '#8D45E8' : '#FFFFFF'}
					height={21}
					width={21}
					timeout={0}
					className='loader'
				/>
			) : (
				<>
					{Icon && <Icon className='icon' />} {children}
				</>
			)}
		</Container>
	);
};

const IconButton = ({ icon: Icon, color, variant, loading, disabled, ...rest }) => {
	const onClick = (e) => {
		if (loading || disabled) {
			return;
		}

		rest.onClick && rest.onClick(e);
	};

	return (
		<IconButtonContainer
			{...rest}
			isIconButton
			disabled={disabled || loading}
			color={color || 'primary'}
			variant={variant || 'default'}
			onClick={onClick}>
			{loading ? (
				<Loader
					type='TailSpin'
					color={getButtonColor(color, variant, 'text')}
					height={21}
					width={21}
					timeout={0}
					className='loader'
				/>
			) : (
				<Icon />
			)}
		</IconButtonContainer>
	);
};

export { IconButton };
export default Button;
