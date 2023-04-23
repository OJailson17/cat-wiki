import { Header } from '@/components/Header';
import { BreedsCharacteristics } from './components/BreedsCharacteristics';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export default function BreedDetail() {
	return (
		<>
			<Header />

			<div className='w-[90%]  mx-auto mt-12 flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between lg:w-[80%]'>
				<div className='w-52 h-52 relative lg:w-[370px] lg:h-[370px] rounded-3xl'>
					<Image
						src='https://source.unsplash.com/featured/208x208'
						alt=''
						fill
						style={{ objectFit: 'cover' }}
						className={`rounded-3xl`}
					/>
				</div>

				<div className='lg:w-1/2'>
					<h2 className='mt-6 font-semibold text-2xl text-primary-text-color lg:mt-0'>
						Bengal
					</h2>

					<p className='mt-6 text-base font-medium text-primary-text-color'>
						Bengals are a lot of fun to live with, but they&apos;re definitely
						not the cat for everyone, or for first-time cat owners. Extremely
						intelligent, curious and active, they demand a lot of interaction
						and woe betide the owner who doesn&apos;t provide it.
					</p>

					<div className='mt-8 flex flex-col gap-8'>
						<p className='font-medium'>
							<strong>Temperament:</strong> Alert, Agile, Energetic, Demanding,
							Intelligent
						</p>
						<p className='font-medium'>
							<strong>Origin:</strong> United States
						</p>
						<p className='font-medium'>
							<strong>Life Span:</strong> 12 - 15 years
						</p>
					</div>

					<div className='mt-8 flex flex-col gap-8'>
						<BreedsCharacteristics
							characteristic='Adaptability'
							characteristic_level={5}
						/>
						<BreedsCharacteristics
							characteristic='Affection level'
							characteristic_level={5}
						/>
						<BreedsCharacteristics
							characteristic='Child Friendly'
							characteristic_level={4}
						/>
						<BreedsCharacteristics
							characteristic='Grooming'
							characteristic_level={1}
						/>
						<BreedsCharacteristics
							characteristic='Intelligence'
							characteristic_level={5}
						/>
						<BreedsCharacteristics
							characteristic='Health issues'
							characteristic_level={3}
						/>
						<BreedsCharacteristics
							characteristic='Social needs'
							characteristic_level={5}
						/>
						<BreedsCharacteristics
							characteristic='Stranger friendly'
							characteristic_level={3}
						/>
					</div>
				</div>
			</div>

			<div className='w-[90%] mx-auto mt-12'>
				<h2 className='font-semibold text-2xl'>Other photos</h2>

				<div className='grid grid-cols-2 gap-4 mt-10 lg:grid-cols-4'>
					{[...Array(8)].map((el, i) => (
						<Image
							src='https://source.unsplash.com/featured/278x278'
							key={`${el} - ${i}`}
							width={278}
							height={278}
							alt=''
							className={` rounded-3xl`}
						/>
					))}
				</div>
			</div>

			<Footer />
		</>
	);
}
