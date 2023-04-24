import Image from 'next/image';

interface CatDetailProps {
	catBreed: string;
	catImage?: string;
	catDescription: string;
}

export const CatDetail = ({
	catBreed,
	catDescription,
	catImage,
}: CatDetailProps) => {
	return (
		<div className='flex gap-6'>
			<div
				className={`w-32 h-32 rounded-3xl ${catImage} max-[374px]:w-28 max-[374px]:h-28 relative`}
			>
				<Image
					src='https://source.unsplash.com/featured/208x208'
					alt=''
					fill
					style={{ objectFit: 'cover' }}
					className={`rounded-3xl`}
				/>
			</div>

			<div className='w-[50%] md:w-[67%]'>
				<h2 className='font-semibold text-2xl'>{catBreed}</h2>

				<p className='mt-2 font-medium text-base text-ellipsis overflow-hidden whitespace-pre-wrap line-clamp-3 md:line-clam-none lg:mt-6'>
					{catDescription}
				</p>
			</div>
		</div>
	);
};
