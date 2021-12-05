import React from 'react';

import { Container } from '../components/Shared';
import Layout from '../components/Layout';
import FigureDisplay from '../components/FigureDisplay';
import FigureReport from '../components/FigureReport';

const OPENSEA_API_URL =
	'https://api.opensea.io/collection/poolsuite-executive-member';

interface HomePageProps {
	poolData: any; // 🌴 TODO: make PoolData interface 🌴
}

const HomePage: React.FC<HomePageProps> = ({ poolData }) => {
	const {
		market_cap,
		floor_price,
		one_day_average_price,
		one_day_change,
		seven_day_change,
		total_supply,
		num_owners,
	} = poolData;

	return (
		<Layout title="poolstats">
			<Container>
				<FigureDisplay
					label="current floor price"
					value={floor_price?.toFixed(3)}
					symbol={'Ξ'}
					fontSize="6rem"
				/>

				<hr style={{ margin: '1rem 0' }} />

				<FigureReport>
					<FigureDisplay
						label="avg floor /24hr"
						value={one_day_average_price?.toFixed(3)}
						symbol={'Ξ'}
						fontSize="2rem"
					/>
					<FigureDisplay
						label="% chg /24hr"
						value={one_day_change?.toFixed(2)}
						symbol={'%'}
						fontSize="2rem"
					/>
					<FigureDisplay
						label="% chg /7d"
						value={seven_day_change?.toFixed(2)}
						symbol={'%'}
						fontSize="2rem"
					/>
				</FigureReport>

				<hr style={{ margin: '1rem 0' }} />

				<FigureReport>
					<FigureDisplay
						label="market cap"
						value={market_cap?.toLocaleString('en-US')}
						symbol={'Ξ'}
						fontSize="2rem"
					/>

					{num_owners && total_supply ? (
						<>
							<FigureDisplay
								label="unique wallets vs. total supply"
								value={`${num_owners} / ${total_supply}`}
								fontSize="2rem"
							/>

							<FigureDisplay
								label="% of supply in unique wallets"
								value={`${(num_owners / total_supply) * 100}`}
								symbol={'%'}
								fontSize="2rem"
							/>
						</>
					) : (
						<></>
					)}
				</FigureReport>
			</Container>
		</Layout>
	);
};

export const getServerSideProps = async () => {
	try {
		const result = await fetch(OPENSEA_API_URL).then(res => res.json());
		const {
			collection: { stats },
		} = result;

		if (stats) {
			const props = {
				poolData: stats,
			};
			return { props };
		}

		return { props: {} };
	} catch (error) {
		console.error(error);
	}
};

export default HomePage;
