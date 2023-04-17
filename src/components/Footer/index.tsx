import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
	return (
		<footer className='w-[90%] mx-auto mt-6 py-7 px-4 flex flex-col gap-6 justify-center bg-black rounded-t-[42px] lg:flex-row lg:justify-between lg:px-8 lg:items-center lg:mt-24'>
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
