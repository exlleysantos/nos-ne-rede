import styled from 'styled-components';

export const Container = styled.main`
	width: 100vw;
	height: 100%;
	display: grid;
	grid-template-columns: 22vw auto;
	grid-template-rows: 100%;
	grid-template-areas: 'NAV WKS'; /** NAV - navigation; WKS - workspace*/

	/* @media (max-width: 1024px) {
		grid-template-columns: 100%;
		grid-template-rows: 65px auto;
		grid-template-areas:
			'NAV NAV'
			'WKS WKS'; /** NAV - navigation; WKS - workspace*/
	} */
`;
