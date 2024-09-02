

import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_CAROUSEL_IMAGES as query } from '@/data/queries/components/FETCH_CAROUSEL_IMAGES';
import Carousel from '../lib/Carousel';
import ExperienceCarousel from '../lib/ExperienceCarousel';
import { Heading } from '../utils/Typography';

const OurExperience = async () => {
	const data = await fetchContent(query);
	
	return (
		<div className="grid place-items-center gap-12 ">
			<Heading text="Our Experience" color="text-dark" />
			<ExperienceCarousel images={data.images} />
		
		</div>
	);
};

export default OurExperience;
