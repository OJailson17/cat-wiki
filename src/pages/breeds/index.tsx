import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { CatDetail } from './components/CatDetail';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { api } from '@/lib/axios';
import { Loading } from '@/components/Loading';

interface BreedsProps {
	id: string;
	name: string;
	description: string;
	reference_image_id: string;
}

export default function Breeds() {
	const [breeds, setBreeds] = useState<BreedsProps[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const onGetBreeds = async () => {
		setIsLoading(true);

		try {
			const breedsResponse = await api.get(`/breeds?limit=10`);
			const breeds = breedsResponse.data as BreedsProps[];

			const shuffleBreeds = breeds.sort(() => 0.5 - Math.random());

			setBreeds(shuffleBreeds);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log({ error });
		}
	};

	useEffect(() => {
		onGetBreeds();
	}, []);

	if (isLoading) return <Loading />;

	return (
		<>
			<Header />

			<main className='w-[90%] max-w-7xl mx-auto lg:mt-12 md:w-[85%]'>
				<h1 className='text-2xl font-bold text-primary-text-color text-center mt-7 md:text-4xl md:text-left'>
					Top 10 most searched breeds
				</h1>

				<div className='flex flex-col gap-7 mt-7 lg:gap-14 md:mt-12'>
					{breeds.map((breed, i) => (
						<Link
							href={`/breeds/${breed.reference_image_id}`}
							key={`${breed.id} - ${i}`}
						>
							<CatDetail
								catBreed={`${i + 1}. ${breed.name}`}
								catImage={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
								catDescription={breed.description}
							/>
						</Link>
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}
