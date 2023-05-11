/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from '@/components/Header';
import { BreedsCharacteristics } from '../../../components/BreedCharacteristics';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { api } from '@/lib/axios';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/Loading';

interface IBreed {
	id: string;
	name: string;
	description: string;
	temperament: string;
	life_span: string;
	adaptability: number;
	affection_level: number;
	origin: number;
	intelligence: number;
	grooming: number;
	child_friendly: number;
	health_issues: number;
	social_needs: number;
	stranger_friendly: number;
}
interface ICat {
	url: string;
	breeds: IBreed[];
}

interface ICatImages {
	id: string;
	url: string;
}

export default function BreedDetail() {
	const [breedId, setBreedId] = useState('');
	const [cat, setCat] = useState<ICat>();
	const [catImages, setCatImages] = useState<ICatImages[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const pathname = usePathname();

	// console.log({ breedId });

	const getCat = async () => {
		setIsLoading(true);

		try {
			const response = await api.get(`/images/${breedId}`);
			const cat = response.data as ICat;

			// console.log({ cat });

			setCat(cat);

			await getCatImages(cat.breeds[0].id);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log({ error });
		}
	};

	const getCatImages = async (catBreed: string) => {
		try {
			const catImagesResponse = await api(
				`/images/search?breed_ids=${catBreed}&limit=8&has_breeds=1`,
			);
			const catImages = catImagesResponse.data as ICatImages[];
			// console.log({ catImages });

			setCatImages(catImages);
		} catch (error) {
			console.log({ error });
		}
	};

	useEffect(() => {
		if (breedId.trim() !== '') {
			getCat();
		}
	}, [breedId]);

	useEffect(() => {
		if (pathname) {
			const splitPathname = pathname?.split('/');
			const breedId = splitPathname[splitPathname?.length - 1];
			setBreedId(breedId);
		}
	}, [pathname]);

	if (isLoading) return <Loading />;

	return (
		<>
			<Header />

			<div className='w-[90%] max-w-7xl  mx-auto mt-12 flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between lg:w-[80%]'>
				<div className='w-52 h-52 relative md:w-72 md:h-72 lg:w-[370px] lg:h-[370px] rounded-3xl'>
					<Image
						src={cat?.url || 'https://source.unsplash.com/featured/208x208'}
						alt=''
						fill
						style={{ objectFit: 'cover' }}
						className={`rounded-3xl`}
					/>
				</div>

				<div className='lg:w-1/2'>
					<h2 className='mt-6 font-semibold text-2xl text-primary-text-color lg:mt-0'>
						{cat?.breeds[0].name}
					</h2>

					<p className='mt-6 text-base font-medium text-primary-text-color'>
						{cat?.breeds[0].description}
					</p>

					<div className='mt-8 flex flex-col gap-8'>
						<p className='font-medium'>
							<strong>Temperament:</strong> {cat?.breeds[0].temperament}
						</p>
						<p className='font-medium'>
							<strong>Origin:</strong> {cat?.breeds[0].origin}
						</p>
						<p className='font-medium'>
							<strong>Life Span:</strong> {cat?.breeds[0].life_span}
						</p>
					</div>

					<div className='mt-8 flex flex-col gap-8'>
						<BreedsCharacteristics
							characteristic='Adaptability'
							characteristic_level={cat?.breeds[0].adaptability || 0}
						/>
						<BreedsCharacteristics
							characteristic='Affection level'
							characteristic_level={cat?.breeds[0].affection_level || 0}
						/>
						<BreedsCharacteristics
							characteristic='Child Friendly'
							characteristic_level={cat?.breeds[0].child_friendly || 0}
						/>
						<BreedsCharacteristics
							characteristic='Grooming'
							characteristic_level={cat?.breeds[0].grooming || 0}
						/>
						<BreedsCharacteristics
							characteristic='Intelligence'
							characteristic_level={cat?.breeds[0].intelligence || 0}
						/>
						<BreedsCharacteristics
							characteristic='Health issues'
							characteristic_level={cat?.breeds[0].health_issues || 0}
						/>
						<BreedsCharacteristics
							characteristic='Social needs'
							characteristic_level={cat?.breeds[0].social_needs || 0}
						/>
						<BreedsCharacteristics
							characteristic='Stranger friendly'
							characteristic_level={cat?.breeds[0].stranger_friendly || 0}
						/>
					</div>
				</div>
			</div>

			<div className='w-[90%] max-w-7xl mx-auto mt-12'>
				<h2 className='font-semibold text-2xl'>Other photos</h2>

				<div className='grid grid-cols-2 gap-4 mt-10 md:grid-cols-3 lg:grid-cols-4'>
					{catImages?.map((image, i) => {
						if (i <= 7) {
							return (
								<div
									key={image.id}
									className='w-full h-[150px] relative lg:h-[200px] xl:h-[278px]'
								>
									{/* <Image
										src={image.url}
										// key={image.id}
										// width={278}
										// height={278}
										fill
										style={{ objectFit: 'cover' }}
										alt=''
										className={`rounded-3xl`}
									/> */}
									<img
										src={image?.url || ''}
										alt=''
										className='w-full h-full object-cover rounded-3xl'
									/>
								</div>
							);
						}
					})}
				</div>
			</div>

			<Footer />
		</>
	);
}
