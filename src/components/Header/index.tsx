import Image from 'next/image';
import React from 'react';

export const Header = () => {
	return (
		<header className='w-[90%] mx-auto mt-3 lg:w-[85%]'>
			<Image src={'/assets/CatwikiLogo.svg'} alt='' width={128} height={43} />
		</header>
	);
};
