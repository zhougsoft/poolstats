import React from 'react';

import Layout from '../components/Layout';
import { Container } from '../components/Shared';

const OPENSEA_API_URL =
	'https://api.opensea.io/collection/poolsuite-executive-member';

interface HomePageProps {
	poolData: any; // 🌴 TODO: make PoolData interface 🌴
}

const HomePage: React.FC<HomePageProps> = ({ poolData }) => {
	console.log('poolData', poolData);

	return (
		<Layout title="poolstats">
			<Container>
				<pre>{JSON.stringify(poolData, undefined, 2)}</pre>
			</Container>
		</Layout>
	);
};

export const getStaticProps = async () => {
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

		console.log('no stats data');
		return { props: {} };
	} catch (error) {
		console.error(error);
	}
};

export default HomePage;
