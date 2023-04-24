import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { CatDetail } from './components/CatDetail';
import Link from 'next/link';

export default function Breeds() {
	return (
		<>
			<Header />

			<main className='w-[90%] max-w-7xl mx-auto lg:mt-12 md:w-[85%]'>
				<h1 className='text-2xl font-bold text-primary-text-color text-center mt-7 md:text-4xl md:text-left'>
					Top 10 most searched breeds
				</h1>

				<div className='flex flex-col gap-7 mt-7 lg:gap-14 md:mt-12'>
					{[...Array(4)].map((el, i) => (
						<Link href={`/breeds/id`} key={`${el} - ${i}`}>
							<CatDetail
								catBreed='1. Bengal'
								catImage='bg-red-300'
								catDescription="Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it."
							/>
						</Link>
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}
