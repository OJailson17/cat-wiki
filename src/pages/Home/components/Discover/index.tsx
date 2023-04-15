import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { Mystery_Quest } from 'next/font/google';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchModal } from '../SearchModal';

const mystery = Mystery_Quest({
	subsets: ['latin'],
	weight: ['400'],
});

export const Discover = () => {
	return (
		<div className='w-[90%] mx-auto mt-8 bg-[#E3E1DC] rounded-[42px]'>
			{/* Image section */}
			<div className='bg-hero-image-sm min-h-[150px] px-4 pb-6 bg-no-repeat bg-cover rounded-t-[42px] flex flex-col text-white'>
				<p className={`text-base ${mystery.className} mt-5`}>CatWiki</p>
				<p className='w-[60%] text-sm font-medium mt-2'>
					Get to know more about your cat breed
				</p>

				<Dialog.Root>
					<Dialog.Trigger
						className='w-32 h-8 mt-5 relative flex items-center justify-between gap-3 bg-green-500 rounded-full'
						// disabled
					>
						{/* <div className='w-32 h-8 mt-5 relative flex items-center justify-between gap-3 bg-green-500 rounded-full'> */}
						<input
							type='text'
							placeholder='Search'
							className='w-full h-full rounded-full text-xs text-[#291507] p-3 pr-7 placeholder:text-xs placeholder:text-[#291507] z-0'
						/>
						<AiOutlineSearch
							className='absolute right-2'
							color='black'
							role='button'
						/>
						{/* </div> */}
					</Dialog.Trigger>
					<SearchModal />
				</Dialog.Root>
			</div>

			<div className='px-7 pb-14 text-primary-text-color'>
				<p className='mt-5 font-medium'>Most Searched Breeds</p>

				{/* Divider */}
				<div className='w-10 h-1 mt-1 bg-primary-text-color rounded-full' />

				<h2 className='w-2/3 font-bold text-lg mt-5'>
					66+ Breeds For you to discover
				</h2>

				{/* Cats images grid */}
				<div className='grid grid-cols-2 gap-3 mt-7'>
					<div>
						<div className='w-min-[135px] h-[135px] bg-red-200 rounded-xl' />
						<p className='text-xs font-semibold mt-3'>Bengal</p>
					</div>
					<div>
						<div className='w-min-[135px] h-[135px] bg-red-200 rounded-xl' />
						<p className='text-xs font-semibold mt-3'>Savannah</p>
					</div>
					<div>
						<div className='w-min-[135px] h-[135px] bg-red-200 rounded-xl' />
						<p className='text-xs font-semibold mt-3'>Norwegian Forest Cat</p>
					</div>
					<div>
						<div className='w-min-[135px] h-[135px] bg-red-200 rounded-xl' />
						<p className='text-xs font-semibold mt-3'>Selkirk Rex</p>
					</div>
				</div>
			</div>
		</div>
	);
};
