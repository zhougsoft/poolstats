import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	html, body {
		width: 100%;
	}

	body {
		font-size: 16px;
		font-family: sans-serif;
		color: ${({ theme }) => theme.colors.text};
		background-color: ${({ theme }) => theme.colors.background};

		// Increase global font size on larger viewports
		@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			font-size: 1.25em;
		}
	}
	
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.link};

		&:visited {
			color: ${({ theme }) => theme.colors.link};
		}

		&:hover {
			opacity: 0.75;
		}

	}
`;

export default GlobalStyle;
