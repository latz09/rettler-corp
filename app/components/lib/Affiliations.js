import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_AFFILIATION_DATA as query } from '@/data/queries/components/FETCH_AFFILIATION_DATA';
import Carousel from './Carousel';

const Affiliations = async () => {
	const data = await fetchContent(query);

	return (
		<div className='  bg-primary py-8 shadow-lg shadow-primary/40'>
			<div className=' bg-white py-12 '>
				<Carousel data={data.logos} />
			</div>
		</div>
	);
};

export default Affiliations;

export const revalidate = 1;
