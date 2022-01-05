import React from 'react';
import { PageBreak, ExtLink, DecorEmoji } from '../components/Shared';
import Layout from '../components/Layout';
import FigureDisplay from '../components/FigureDisplay';
import FigureReport from '../components/FigureReport';

const OPENSEA_API_URL =
	'https://api.opensea.io/collection/poolsuite-executive-member';

interface HomePageProps {
	poolData: {
		market_cap: number;
		floor_price: number;
		total_supply: number;
		num_owners: number;
	};
}

const HomePage: React.FC<HomePageProps> = ({ poolData }) => {
	const { market_cap, floor_price, total_supply, num_owners } = poolData;

	return (
		<Layout title="poolstats">
			<FigureDisplay
				label="💳 membership floor price"
				value={floor_price?.toFixed(3)}
				symbol={'Ξ'}
				fontSize="6.5rem"
			/>

			<PageBreak />

			<FigureReport>
				<FigureDisplay
					label="total market capitalization"
					value={market_cap?.toFixed(2)}
					symbol={'Ξ'}
					fontSize="2rem"
				/>

				{num_owners && total_supply ? (
					<>
						<FigureDisplay
							label="unique members vs. available memberships"
							value={`${num_owners} / ${total_supply}`}
							fontSize="2rem"
						/>

						<FigureDisplay
							label="% of unique members"
							value={`${((num_owners / total_supply) * 100).toFixed(2)}`}
							symbol={'%'}
							fontSize="2rem"
						/>
					</>
				) : (
					<></>
				)}
			</FigureReport>
			<p
				style={{ fontSize: '0.75rem', margin: '2rem 0', lineHeight: '0.5rem' }}
			>
				<DecorEmoji>💡</DecorEmoji>
				<em>
					<strong>Interested in becoming a member?</strong>
				</em>
				<p>
					<ExtLink style={{ marginLeft: '1rem' }}>
						Hyperlink to the Open Sea&trade;
					</ExtLink>
				</p>
			</p>
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
