import { Grid } from 'react-loading-icons';

export const Loading = () => {
	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			<Grid fill='black' width={30} height={30} />
		</div>
	);
};
