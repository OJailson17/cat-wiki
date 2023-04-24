import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
	return (
		<footer className='w-[90%] max-w-7xl mx-auto mt-6 py-7 px-4 flex flex-col gap-6 justify-center bg-black rounded-t-[42px] min-[500px]:mt-24 min-[500px]:flex-row min-[500px]:justify-between min-[500px]:px-8 min-[500px]:items-center'>
			<Image
				src={'/assets/CatwikiLogo.svg'}
				alt=''
				width={100}
				height={43}
				className='invert contrast-[150%]'
			/>

			<p className='text-white text-xs text-center lg:text-base'>
				&copy; created by{' '}
				<Link
					href={'https://jailsondeoliveira.vercel.app'}
					className='font-bold hover:underline'
					target='_blank'
				>
					Jailson de Oliveira
				</Link>{' '}
				- devChallenge.io 2023
			</p>
		</footer>
	);
};
