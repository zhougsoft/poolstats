import React from 'react';
import Head from 'next/head';

import * as S from './styled';
import Header from './Header';
import { Container } from '../Shared';

interface LayoutProps {
	title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
	return (
		<S.PageWrapper>
			<Container>
				<Head>
					<link rel="shortcut icon" href="/favicon.ico" />
					<title>{title}</title>
				</Head>
				<Header />
				<main className="page-content">{children}</main>
			</Container>
		</S.PageWrapper>
	);
};

export default Layout;
