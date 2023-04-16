import { Header } from '@/components/Header';
import React from 'react';
import { Discover } from './components/Discover';
import { CatBenefits } from './components/CatBenefits';

const Home = () => {
	return (
		<>
			<Header />
			<Discover />
			<CatBenefits />
		</>
	);
};

export default Home;
