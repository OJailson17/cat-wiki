import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { CatDetail } from './components/CatDetail';

export default function Breeds() {
	return (
		<>
			<Header />

			<main className='w-[90%] max-w-[1200px] mx-auto lg:mt-12 md:w-[85%]'>
				<h1 className='text-2xl font-bold text-primary-text-color text-center mt-7 md:text-4xl md:text-left'>
					Top 10 most searched breeds
				</h1>

				<div className='flex flex-col gap-7 mt-7 lg:gap-14 md:mt-12'>
					<CatDetail
						catBreed='1. Bengal'
						catImage='bg-red-300'
						catDescription="Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it."
					/>
					<CatDetail
						catBreed='2. Chartreux'
						catImage='bg-green-300'
						catDescription='The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.'
					/>
					<CatDetail
						catBreed='3. Khao Manee'
						catImage='bg-blue-300'
						catDescription='The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an idea lap cat.'
					/>
					<CatDetail
						catBreed='4. Maine Coon Cat'
						catImage='bg-gray-300'
						catDescription="Our largest breed, the Maine coon cat deservedly earned the nickname of 'the gentle giant,' Keiger says. 'Someone who has never seen one is often surprised at just how large they are; a male can be 20 pounds and all muscle."
					/>
				</div>
			</main>

			<Footer />
		</>
	);
}
