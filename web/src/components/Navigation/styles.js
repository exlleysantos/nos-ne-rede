import styled, { css } from 'styled-components';

export const Container = styled.div`
	grid-area: NAV;
	background: var(--bg-2);
	overflow-y: auto;
`;

export const PicContainer = styled.div`
	padding: 24px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-bottom: 1px solid var(--gray-3);

	& > div {
		margin-top: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;

		& > p {
			font-size: 16px;
			font-weight: 500;
			color: var(--heading-1);
			text-transform: cappitalize;
		}

		& > span {
			font-size: 13px;
			color: var(--body-1);
		}
	}
`;

export const Menu = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 24px 0;
`;

export const LinkItem = styled.span`
	display: flex;
	align-items: center;
	color: var(--heading-1);
	padding: 12px;
	font-size: 16px;
	transition: color 300ms;
	margin-bottom: 4px;
	cursor: pointer;
	position: relative;

	& > svg {
		font-size: 24px;
		margin-right: 6px;
	}

	& > svg.chevron {
		position: absolute;
		top: 50%;
		right: 8px;
		transform: translateY(-50%);
		font-size: 22px;
		color: var(--heading-1);
		transition: 300ms;
	}

	& > svg.rotate {
		transform: translateY(-50%) rotate(180deg);
	}

	&:hover {
		color: var(--purple);

		& > svg {
			color: var(--purple) !important;
		}
	}

	${({ active }) =>
		active &&
		css`
			color: var(--purple);
			background: var(--purple-opacity);
		`}
`;

export const Forums = styled.ul`
	width: 100%;
`;

export const Forum = styled.li`
	font-size: 13px;
	color: var(--heading-1);
	font-weight: 500;
	padding: 8px 8px 8px 32px;

	&:hover {
		color: var(--purple);
	}

	${({ active }) =>
		active &&
		css`
			color: var(--purple);
		`}
`;

export const collapseTheme = {
	collapse: 'ReactCollapse--collapse',
	content: 'ReactCollapse--content',
};
