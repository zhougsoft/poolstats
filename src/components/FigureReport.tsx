import styled from 'styled-components';

const FIGURE_SPACING = 1.5;

const FigureReport = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;

	& > *:not(:last-child) {
		margin-right: ${FIGURE_SPACING}em;
	}
`;

export default FigureReport;
