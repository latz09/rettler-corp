

import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_CAROUSEL_IMAGES as query } from '@/data/queries/components/FETCH_CAROUSEL_IMAGES';
import Carousel from '../lib/Carousel';
import ExperienceCarousel from '../lib/ExperienceCarousel';
import { Heading } from '../utils/Typography';
import { FaArrowRight } from 'react-icons/fa';

const OurExperience = async () => {
	const data = await fetchContent(query);
	
	return (
		<div className="grid place-items-center gap-12 ">
			<Heading text="Our Experience" color="text-dark" />
			<ExperienceCarousel images={data.images} />
			<div className='grid place-items-center'>
				<div className='mt-4 cursor-pointer py-2 px-6 bg-primary  text-light rounded-full font-bold lg:text-lg '>
					<span className=''>Get Started Now</span>
					<FaArrowRight className='inline-block ml-2' />
				</div>
			</div>
		
		</div>
	);
};

export default OurExperience;
