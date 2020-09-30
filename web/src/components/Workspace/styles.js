import styled from 'styled-components';

export const Container = styled.div`
   grid-area: WKS;
	padding: 32px;
	overflow: auto;
	background: var(--bg-1);

	@media(max-width: 768px) {
		padding: 24px;
	}

	@media(max-width: 512px) {
		padding: 24px 12px;
	}

	@media(max-width: 415px) {
		padding: 24px 8px;
	}
`;

