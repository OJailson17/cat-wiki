import * as Dialog from '@radix-ui/react-dialog';
import React, { useEffect, useState } from 'react';
import { Mystery_Quest } from 'next/font/google';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchModal } from '../SearchModal';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { api } from '@/lib/axios';

const mystery = Mystery_Quest({
	subsets: ['latin'],
	weight: ['400'],
});

interface ICats {
	id: string;
	name: string;
	reference_image_id: string;
}

export const Discover = () => {
	const [cats, setCats] = useState<ICats[]>([]);

	// Make request to get the cats breeds data
	const getCats = async () => {
		try {
			const catResponseData = await api.get('/breeds?limit=4');
			const catsData = catResponseData.data as ICats[];

			setCats(catsData);
		} catch (error) {
			console.log({ error });
		}
	};

	useEffect(() => {
		getCats();
	}, []);

	return (
		<div className='max-w-7xl w-[90%] mx-auto mt-8 bg-[#E3E1DC] rounded-[42px] '>
			{/* Image section */}
			<div className='bg-hero-image-sm min-h-[150px] px-4 pb-6 bg-cover bg-no-repeat bg-top rounded-t-[42px] flex flex-col text-white min-[500px]:h-[300px] md:bg-hero-image-md lg:bg-hero-image-lg lg:min-h-[450px] xl:min-h-[538px] lg:px-24'>
				<p className={`text-base ${mystery.className} mt-5 min-[500px]:hidden`}>
					CatWiki
				</p>

				<Image
					src={'/assets/CatwikiLogo.svg'}
					alt=''
					width={207}
					height={87}
					className=' hidden invert contrast-[150%] min-[500px]:mt-14 min-[500px]:block lg:mt-28'
				/>
				<p className='w-[60%] text-sm font-medium mt-2 lg:text-2xl lg:w-[370px]'>
					Get to know more about your cat breed
				</p>

				<Dialog.Root>
					<Dialog.Trigger
						className='w-32 h-8 mt-5 relative flex items-center justify-between gap-3 bg-green-500 rounded-full min-[500px]:w-40 lg:mt-12 lg:w-96 lg:h-11 lg:disabled'
						disabled
					>
						{/* <div className='w-32 h-8 mt-5 relative flex items-center justify-between gap-3 bg-green-500 rounded-full'> */}
						<input
							type='text'
							placeholder='Search'
							className='w-full h-full rounded-full text-xs text-[#291507] p-3 pr-7 placeholder:text-xs placeholder:text-[#291507] z-0 lg:text-lg lg:placeholder:text-lg'
						/>
						<AiOutlineSearch
							className='absolute right-2 text-black lg:text-xl'
							role='button'
						/>
						{/* </div> */}
					</Dialog.Trigger>
					<SearchModal />
				</Dialog.Root>
			</div>

			<div className='px-7 pb-14 mt-5 text-primary-text-color min-[500px]:mt-14  lg:px-28 xl:mt-24'>
				<Link href={'/breeds'} className='font-medium'>
					Most Searched Breeds
				</Link>

				{/* Divider */}
				<div className='w-10 h-1 mt-1 bg-primary-text-color rounded-full' />

				<div className='mt-5 flex justify-between'>
					<h2 className='w-2/3 font-bold text-lg md:text-3xl lg:text-5xl lg:w-[500px]'>
						66+ Breeds For you to discover
					</h2>

					<div className='hidden items-center gap-3 mt-6 min-[500px]:flex'>
						<Link href={'/'} className='text-xs font-bold text-[#29150799]'>
							READ MORE
						</Link>
						<BsArrowRight color='#29150799' />
					</div>
				</div>

				{/* Cats images grid */}
				<div className='grid grid-cols-2 gap-3 mt-7 min-[500px]:grid-cols-4 lg:gap-12 lg:mt-11'>
					{cats?.map((cat, i) => (
						<Link href={`/breeds/${cat.reference_image_id}`} key={cat?.id || i}>
							<div className='max-w-[220px] h-[135px] bg-red-200 rounded-xl relative'>
								<Image
									src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
									alt=''
									fill
									style={{ objectFit: 'cover' }}
									className={`rounded-xl`}
								/>
							</div>
							<p className='text-xs font-semibold mt-3'>{cat?.name}</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
