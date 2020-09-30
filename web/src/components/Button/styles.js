import styled, { css } from 'styled-components';
import { getButtonColor, getButtonColorOnHover } from '../../utils/helpers/styles';

export const Container = styled.button`
	grid-column: span ${({ size }) => size || 1};
	border-radius: 5px;
	background-color: ${({ isGhost }) => (isGhost ? 'transparent' : 'var(--purple)')};
	border: 1px solid var(--purple);
	color: ${({ isGhost }) => (isGhost ? 'var(--purple)' : 'var(--white)')};
	font-size: 16px;
	height: 38px;
	text-align: center;
	font-weight: 400;
	cursor: pointer;
	letter-spacing: 0.5px;
	transition: 300ms;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 32px;

	& > div.loader {
		margin-bottom: -2px;
	}

	&:hover {
		background-color: ${({ isGhost }) => isGhost ? 'var(--purple-opacity)' : 'var(--purple-hover)'};
	}

	${({ disabled }) =>
		disabled &&
		css`
			pointer-events: none !important;
			opacity: 0.7 !important;
			user-select: none;
		`}
`;

export const IconButtonContainer = styled.button`
	background-color: ${({ color, variant }) => getButtonColor(color, variant, 'bg')};
	border: 1px solid ${({ color, variant }) => getButtonColor(color, variant, 'border')};
	color: ${({ color, variant }) => getButtonColor(color, variant, 'color')};
	width: 35px;
	height: 35px;
	min-width: 35px;
	min-height: 35px;
	cursor: pointer;
	transition: 300ms;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;

	& > svg {
		font-size: 19px;
	}

	& > div.loader {
		margin-bottom: -2px;
	}

	&:hover {
		background-color: ${({ color, variant }) => getButtonColorOnHover(color, variant, 'bg')};
		border-color: ${({ color, variant }) => getButtonColorOnHover(color, variant, 'border')};
		color: ${({ color, variant }) => getButtonColorOnHover(color, variant, 'color')};
		box-shadow: 0px 6px 15px #0000ff30;
	}

	${({ disabled }) =>
		disabled &&
		css`
			pointer-events: none !important;
			opacity: 0.7 !important;
			user-select: none;
		`}
`;
