import styled from 'styled-components';

export const Wrapper = styled.div<{ fontSize: string }>`
	font-size: ${({ fontSize }) => fontSize};
	margin-bottom: 1rem;
`;

export const Label = styled.div`
	font-size: 0.4em;
	margin-bottom: 0.25rem;
	font-style: italic;
`;

export const Value = styled.div`
	display: flex;
	align-items: center;
`;

export const Symbol = styled.div`
	font-size: 0.75em;
`;
