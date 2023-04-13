import Image from 'next/image';
import React from 'react';

export const Header = () => {
	return (
		<header className='w-[90%] mx-auto mt-3'>
			<Image src={'/assets/CatwikiLogo.svg'} alt='' width={128} height={43} />
		</header>
	);
};
