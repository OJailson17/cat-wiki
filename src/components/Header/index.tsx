import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
	return (
		<header className='w-[90%] max-w-7xl mx-auto mt-3 min-[500px]:w-[85%]'>
			<Link href={'/'}>
				<Image src={'/assets/CatwikiLogo.svg'} alt='' width={128} height={43} />
			</Link>
		</header>
	);
};
