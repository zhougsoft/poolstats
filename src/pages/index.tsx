import React from 'react';

import Layout from '../components/Layout';
import { ExtLink } from '../components/Shared';

const OPENSEA_API_URL =
	'https://api.opensea.io/collection/poolsuite-executive-member';

const HomePage: React.FC = ({ collection }: any) => {
	console.log('poolsuite collection:', collection);
	console.log('pool stats:', collection.stats);

	return (
		<Layout title="poolstats">
			<h1>poolstats</h1>
			<small>
				by <ExtLink href="https://github.com/zhoug0x">zhoug</ExtLink>{' '}
			</small>
		</Layout>
	);
};

export const getStaticProps = async () => {
	try {
		const data = await fetch(OPENSEA_API_URL).then(res => res.json());
		return { props: data };
	} catch (error) {
		console.error(error);
	}
};

export default HomePage;
