import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const MainInfos = styled.div`
	width: 100%;
	display: flex;

	& > div.infos {
		flex: 1;
		width: 100%;
		min-height: 150px;
		margin-left: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		& > div.row {
			/* border: 1px solid blue; */
			width: 100%;
			max-width: 100%;
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			& > * {
				margin-right: 8px;
			}
		}
	}

	@media (max-width: 645px) {
		& div.row {
			margin-bottom: 12px;
		}

		& div.row:nth-child(3) {
			display: none !important;
		}
	}
`;

export const MobileFooter = styled.div`
	width: 100%;
	flex-direction: column;
	display: none;
	margin-top: 12px;

	& > div.buttons {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 8px;

		& > button {
			width: 49%;
		}
	}

	@media (max-width: 645px) {
		display: flex;
	}
`;

export const Name = styled.h3`
	color: var(--heading-1);
	font-size: 24px;
`;

export const Nickname = styled.span`
	font-size: 15px;
	color: var(--body-1);
	transform: translateY(-12px);
`;

export const Tag = styled.div`
	font-size: 15px;
	padding: 4px 16px;
	background: var(--purple-opacity);
	color: var(--purple);
	border-radius: 5px;
`;

export const SchoolName = styled.span`
	font-size: 13px;
	color: var(--body-1);
`;

export const BioInfos = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	& > div {
		display: flex;
		flex-direction: column;

		& > header {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 4px;

			& > h3 {
				font-size: 17px;
				text-transform: uppercase;
				color: var(--heading-1);
			}

			& > button {
				font-size: 17px;
				text-transform: uppercase;
				color: var(--body-1);
				border: none;
				background: none;
				padding: 8px 16px;
				border-radius: 5px;
				cursor: pointer;
				transition: background-color 300ms;
				font-weight: 500;

				&:hover {
					color: var(--purple);
					background: var(--purple-opacity);
				}
			}
		}

		& > p {
			font-size: 14px;
			color: var(--body-1);
		}
	}

	& > div ~ div {
		margin-top: 16px;
	}
`;
