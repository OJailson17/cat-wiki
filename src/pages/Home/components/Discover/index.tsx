import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { Mystery_Quest } from 'next/font/google';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchModal } from '../SearchModal';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

const mystery = Mystery_Quest({
	subsets: ['latin'],
	weight: ['400'],
});

export const Discover = () => {
	return (
		<div className='max-w-[1200px] w-[90%] mx-auto mt-8 bg-[#E3E1DC] rounded-[42px] '>
			{/* Image section */}
			<div className='bg-hero-image-sm min-h-[150px] px-4 pb-6 bg-no-repeat bg-cover rounded-t-[42px] flex flex-col text-white lg:bg-hero-image-lg lg:min-h-[538px] lg:px-24'>
				<p className={`text-base ${mystery.className} mt-5 lg:hidden`}>
					CatWiki
				</p>

				<Image
					src={'/assets/CatwikiLogo.svg'}
					alt=''
					width={207}
					height={87}
					className=' hidden invert contrast-[150%] mt-28 lg:block'
				/>
				<p className='w-[60%] text-sm font-medium mt-2 lg:text-2xl lg:w-[370px]'>
					Get to know more about your cat breed
				</p>

				<Dialog.Root>
					<Dialog.Trigger
						className='w-32 h-8 mt-5 relative flex items-center justify-between gap-3 bg-green-500 rounded-full lg:mt-12 lg:w-96 lg:h-11 lg:disabled'
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

			<div className='px-7 pb-14 mt-5 text-primary-text-color lg:mt-24 lg:px-28'>
				<p className=' font-medium'>Most Searched Breeds</p>

				{/* Divider */}
				<div className='w-10 h-1 mt-1 bg-primary-text-color rounded-full' />

				<div className='mt-5 flex justify-between'>
					<h2 className='w-2/3 font-bold text-lg  lg:text-5xl lg:w-[500px]'>
						66+ Breeds For you to discover
					</h2>

					<div className='hidden items-center gap-3 mt-6 lg:flex'>
						<p className='text-xs font-bold text-[#29150799] cursor-pointer'>
							READ MORE
						</p>
						<BsArrowRight color='#29150799' />
					</div>
				</div>

				{/* Cats images grid */}
				<div className='grid grid-cols-2 gap-3 mt-7 lg:grid-cols-4 lg:gap-12 lg:mt-11'>
					<div>
						<div className='max-w-[220px] h-[135px] bg-red-200 rounded-xl' />
						<p className='text-xs font-semibold mt-3'>Bengal</p>
					</div>
					<div>
						<div className='max-w-[220px] h-[135px] bg-red-200 rounded-xl' />
						<p className='text-xs font-semibold mt-3'>Savannah</p>
					</div>
					<div>
						<div className='max-w-[220px] h-[135px] bg-red-200 rounded-xl' />
						<p className='text-xs font-semibold mt-3'>Norwegian Forest Cat</p>
					</div>
					<div>
						<div className='max-w-[220px] h-[135px] bg-red-200 rounded-xl' />
						<p className='text-xs font-semibold mt-3'>Selkirk Rex</p>
					</div>
				</div>
			</div>
		</div>
	);
};
