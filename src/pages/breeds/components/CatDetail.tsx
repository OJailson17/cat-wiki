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
			<div className={`w-32 h-32 rounded-3xl ${catImage}`} />

			<div className='w-[40%]'>
				<h2 className='font-semibold text-2xl'>{catBreed}</h2>

				<p className='mt-2 font-medium text-base text-ellipsis overflow-hidden whitespace-pre-wrap line-clamp-3'>
					{catDescription}
				</p>
			</div>
		</div>
	);
};
