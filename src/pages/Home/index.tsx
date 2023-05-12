import { Header } from '@/components/Header';
import React from 'react';
import { Discover } from '../../components/Discover';
import { CatBenefits } from '../../components/CatBenefits';
import { Footer } from '@/components/Footer';
import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Home | Cat Wiki</title>
			</Head>

			<Header />
			<Discover />
			<CatBenefits />
			<Footer />
		</>
	);
};

export default Home;
