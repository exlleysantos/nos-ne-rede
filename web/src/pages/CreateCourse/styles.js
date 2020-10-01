import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	& > h1 {
		margin-bottom: 24px;
	}

	& form {
		& > h3 {
			grid-column: span 4;
		}

		& > button {
			grid-column: 3/5;
		}
	}

	@media (max-width: 645px) {
		& form > button {
			grid-column: span 4;
		}
	}
`;
