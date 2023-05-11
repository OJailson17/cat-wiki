import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchModalContent = () => {
	return (
		<>
			<form className='w-full mx-auto mt-20'>
				<div
					className='w-full h-11 mt-5 relative flex items-center justify-between gap-3 rounded-full border-[1px] border-black'
					// disabled
				>
					<input
						type='text'
						placeholder='Search'
						className='w-full h-full rounded-full text-lg text-[#291507] p-3 pr-10 placeholder:text-lg placeholder:text-[#291507] z-0'
					/>
					<button
						className='w-10 h-full border-none rounded-r-full bg-transparent flex items-center justify-center absolute right-0'
						onClick={() => alert('Hello Modal')}
					>
						<AiOutlineSearch
							className=''
							color='black'
							role='button'
							size={20}
						/>
					</button>
				</div>
			</form>

			<div className='w-full mt-9 mx-auto flex flex-col  justify-center gap-9'>
				<p className='text-lg font-medium text-black cursor-pointer'>
					American Bobtail
				</p>
				<p className='text-lg font-medium text-black cursor-pointer'>
					American Curl
				</p>
				<p className='text-lg font-medium text-black cursor-pointer'>
					American Shorthair
				</p>
				<p className='text-lg font-medium text-black cursor-pointer'>
					American Wirehair
				</p>
			</div>
		</>
	);
};
