import React from 'react';

import { Container, DecorEmoji } from '../Shared';

const Header = () => {
	return (
		<Container>
			<header className="page-header">
				<div
					style={{ display: 'flex', alignItems: 'center', marginTop: '3rem' }}
				>
					<h1 style={{ margin: '0 0.5rem 0 0', letterSpacing: '-0.03em' }}>
						<em>poolstats</em>
					</h1>
					<DecorEmoji style={{ marginTop: '0.25rem' }}>🍹🌴🦩🍸</DecorEmoji>
				</div>
			</header>
			<hr />
		</Container>
	);
};

export default Header;
