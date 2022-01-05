import styled from 'styled-components';

export const Wrapper = styled.div<{ fontSize: string }>`
	font-size: ${({ fontSize }) => fontSize};
	margin-bottom: 1rem;
`;

export const Label = styled.div`
	font-size: 0.4em;
	font-style: italic;
	letter-spacing: -0.03em;
	margin-bottom: 0.25rem;
`;

export const Value = styled.div`
	display: flex;
	align-items: center;
	font-family: ${({theme}) => theme.fonts.monospace};
	letter-spacing: -0.03em;
`;

export const Symbol = styled.div`
	font-size: 0.75em;
`;
