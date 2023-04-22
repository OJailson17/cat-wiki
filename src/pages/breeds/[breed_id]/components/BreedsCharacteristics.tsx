interface BreedsCharacteristicsProps {
	characteristic: string;
	characteristic_level: number;
}

export const BreedsCharacteristics = ({
	characteristic,
	characteristic_level,
}: BreedsCharacteristicsProps) => {
	return (
		<div className='flex flex-col'>
			<strong>{characteristic}:</strong>
			<div className='flex gap-2 mt-2'>
				{[...Array(5)].map((el, i) => (
					<div
						key={`${el} - ${i}`}
						className={`w-12 h-2 rounded-full ${
							i + 1 > characteristic_level ? 'bg-[#E0E0E0]' : 'bg-[#544439]'
						}`}
					/>
				))}
			</div>
		</div>
	);
};
