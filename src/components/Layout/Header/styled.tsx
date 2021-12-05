import styled from 'styled-components';

export const Wrapper = styled.header`
	.github-link {
		align-self: flex-end;
		font-size: 1.5em;
	}
`;

export const HeaderTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 3rem;
	margin-bottom: 0.75rem;
`;

export const Title = styled.div`
	align-items: center;
	margin-bottom: 00.5rem;

	& h1 {
		font-size: 3rem;
		letter-spacing: -0.03em;
		font-style: italic;
		margin: 0 0.5rem 0 0;
	}

	& span.title-decor {
		font-size: 1.25rem;
		margin-top: 0.25rem;
	}

	& span.twitter-link {
		margin-top: 0.75rem;
		margin-left: 0.25rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		display: flex;
	}
`;

export const SocialLinks = styled.div`
	margin-top: 1rem;

	& span {
		font-size: 0.75rem;
	}

	& svg {
		font-size: 1.75rem;
	}
`;

export const SubHeading = styled.div`
	& p {
		margin: 0;
		margin-bottom: 1.5rem;

		&:first-child {
			width: 75%;
			font-size: 1rem;
		}

		&:last-child {
			width: 85%;
		}
	}
`;
