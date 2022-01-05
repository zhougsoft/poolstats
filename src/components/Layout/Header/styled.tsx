import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	margin-bottom: 2rem;

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
	margin-bottom: 0.5rem;

	& h1 {
		font-size: 3.75rem;
		letter-spacing: -0.03em;
		font-style: italic;
		margin: 0.75rem 0;
		line-height: 0;
	}

	& span.title-decor {
		font-size: 1.25rem;
		margin-top: 0.25rem;
		margin-left: 1.25rem;
	}

	& span.twitter-link {
		font-size: 0.75em;
		margin-top: 0.75rem;
		margin-left: 0.25rem;
		font-style: italic;
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
			font-size: 0.9rem;
		}

		&:last-child {
			width: 85%;
			font-size: 0.75rem;
		}
	}
`;
