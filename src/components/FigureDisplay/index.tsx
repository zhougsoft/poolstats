import * as S from './styled';

interface FigureDisplayProps {
	label: string;
	value: string | number;
	symbol?: string;
	fontSize?: string;
}

const FigureDisplay: React.FC<FigureDisplayProps> = ({
	label,
	value,
	symbol = '',
	fontSize = '1rem',
}) => (
	<S.Wrapper fontSize={fontSize}>
		<S.Label>{label}</S.Label>
		<S.Value>
			{value}
			<S.Symbol>{symbol}</S.Symbol>
		</S.Value>
	</S.Wrapper>
);

export default FigureDisplay;
