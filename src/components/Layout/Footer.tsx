import React from 'react';

import { Container, ExtLink, GithubIcon } from '../Shared';

const Footer: React.FC = () => (
	<Container>
		<footer className="page-footer">
			<hr />
			<small style={{ fontSize: '0.75rem' }}>
				by <ExtLink href="https://twitter.com/zhoug0x">zhoug</ExtLink>{' '}
			</small>
			<ExtLink
				style={{ fontSize: '0.6rem' }}
				href="https://github.com/zhoug0x/poolstats"
			>
				<GithubIcon />
			</ExtLink>
		</footer>
	</Container>
);

export default Footer;
