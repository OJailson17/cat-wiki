import { Header } from '@/components/Header';
import React from 'react';
import { Discover } from './components/Discover';
import { CatBenefits } from './components/CatBenefits';
import { Footer } from '@/components/Footer';

const Home = () => {
	return (
		<>
			<Header />
			<Discover />
			<CatBenefits />
			<Footer />
		</>
	);
};

export default Home;
