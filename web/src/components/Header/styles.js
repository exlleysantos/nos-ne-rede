import styled from 'styled-components';

export const Container = styled.header`
	background: var(--bg-3);
	padding: 0 24px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > div {
		display: flex;
		align-items: center;
		max-width: max-content;
	}
`;

export const Logo = styled.span`
	font-size: 22px;
	font-weight: 600;
	color: var(--heading-1);

	& > span {
		text-transform: uppercase;
		color: var(--purple);
	}
`;

export const ToggleMenu = styled.button`
	width: 60px;
	height: 60px;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: none;
	background: none;
	margin-right: 12px;
	display: none;

	&:hover {
		& > svg {
			color: var(--purple);
		}
	}

	& > svg {
		color: var(--heading-1);
		font-size: 22px;
	}

	@media (max-width: 960px) {
		display: flex;
	}
`;
