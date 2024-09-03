

import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_CAROUSEL_IMAGES as query } from '@/data/queries/components/FETCH_CAROUSEL_IMAGES';
import Carousel from '../lib/Carousel';
import ExperienceCarousel from '../lib/ExperienceCarousel';
import { Heading } from '../utils/Typography';
import { FaArrowRight } from 'react-icons/fa';

const OurExperience = async () => {
	const data = await fetchContent(query);
	
	return (
		<div className="grid place-items-center gap-4 ">
			<Heading text="Our Experience" color="text-dark" />
			<div className='grid place-items-center mb-4 md:mb-12'>
				<div className='mt-4 cursor-pointer py-2 px-6 bg-primary  text-light rounded-full font-bold lg:text-lg '>
					<span className=''>View All Case Studies</span>
					<FaArrowRight className='inline-block ml-2' />
				</div>
			</div>
			<ExperienceCarousel images={data.images} />
		
		
		</div>
	);
};

export default OurExperience;
