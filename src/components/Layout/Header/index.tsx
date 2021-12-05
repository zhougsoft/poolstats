import React from 'react';

import * as S from './styled';
import { Container, DecorEmoji, ExtLink, GithubIcon } from '../../Shared';

const Header: React.FC = () => {
	return (
		<Container>
			<S.HeaderTitle>
				<S.Title>
					<h1>poolstats</h1>
					<DecorEmoji className="title-decor">🍹🌴🦩🍸</DecorEmoji>
					<span className="twitter-link">
						by <ExtLink href="https://twitter.com/zhoug0x">zhoug</ExtLink>{' '}
					</span>
				</S.Title>

				<S.SocialLinks>
					<ExtLink
						className="github-link"
						href="https://github.com/zhoug0x/poolstats"
					>
						<GithubIcon />
					</ExtLink>
				</S.SocialLinks>
			</S.HeaderTitle>

			<S.SubHeading>
				<p>
					A third-party <em>business information client</em> tracking the
					<br />
					<strong>
						<em>
							<ExtLink href="https://poolsuite.net">Poolsuite</ExtLink>
							&trade; Executive Membership
						</em>
					</strong>{' '}
					<DecorEmoji>🦩</DecorEmoji>
				</p>
				<p>
					<em>Refresh</em> your Internet-connected Web Browser to get real-time
					price updates, <br />
					<em>that's the power of HTTP technology!</em>{' '}
					<DecorEmoji>🖱️</DecorEmoji>
				</p>
			</S.SubHeading>

			<hr />
		</Container>
	);
};

export default Header;
