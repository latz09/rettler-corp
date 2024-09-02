

import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_CAROUSEL_IMAGES as query } from '@/data/queries/components/FETCH_CAROUSEL_IMAGES';
import Carousel from '../lib/Carousel';
import ExperienceCarousel from '../lib/ExperienceCarousel';

const OurExperience = async () => {
	const data = await fetchContent(query);
	
	return (
		<div className="grid place-items-center">
			<ExperienceCarousel images={data.images} />
		
		</div>
	);
};

export default OurExperience;
