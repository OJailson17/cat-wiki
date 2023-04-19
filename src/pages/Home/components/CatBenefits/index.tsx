/* eslint-disable @next/next/no-img-element */
import { BsArrowRight } from 'react-icons/bs';

export const CatBenefits = () => {
	return (
		<section className='w-[90%] max-w-[1200px] mx-auto mt-16 flex flex-col items-center gap-16 min-[500px]:flex-row lg:mt-24 lg:px-28'>
			<div className='mt-1'>
				<div className='w-12 h-1  bg-primary-text-color rounded-full' />

				<h2 className='text-4xl font-bold text-primary-text-color mt-4'>
					Why should you have a cat?
				</h2>

				<p className='mt-10 text-lg  text-primary-text-color font-medium'>
					Having a cat around you can actually trigger the release of calming
					chemicals in your body which lower your stress and anxiety leves
				</p>

				<div className='flex items-center gap-3 mt-6'>
					<p className='text-xs font-bold text-[#29150799] cursor-pointer'>
						READ MORE
					</p>
					<BsArrowRight color='#29150799' />
				</div>
			</div>

			<div className='grid grid-cols-2 gap-4'>
				<div className='flex flex-col gap-4 items-center'>
					<img src='/assets/image-1.png' alt='' />
					<img src='/assets/image-2.png' alt='' className='w-[75%] self-end' />
				</div>
				<img src='/assets/image-3.png' alt='' />
			</div>
		</section>
	);
};
