import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_HOME_PAGE_DATA as query } from '@/data/queries/pages/FETCH_HOME_PAGE_DATA';
import PageContainer from './components/utils/animations/PageContainer';
import AnimateUp from './components/utils/animations/AnimateUp';
import LandingPageHero from './components/heros/LandingPageHero';
import Intro from './components/heros/Intro';
import Affiliations from './components/lib/Affiliations';
import ServiceCards from './components/services/ServiceCards';
import WhoWeAre from './components/about/WhoWeAre';
import OurCommitment from './components/about/OurCommitment';
import { FaArrowRight } from 'react-icons/fa';

export default async function Home() {
	const data = await fetchContent(query);
	console.log(data);
	return (
		<PageContainer>
			<LandingPageHero
				image={data.landingHero.landingImage}
				heading={data.landingHero.heading}
				subheading={data.landingHero.subheading}
				logoImage={data.landingHero.logoImage}
			/>
			<WhoWeAre description={data.intro.paragraphs[3]} />
			<Affiliations />

			<ServiceCards data={data.services} />
			<div className='grid place-items-center'>
				<div className='mt-4 cursor-pointer py-2 px-6 bg-primary  text-light rounded-full font-bold lg:text-lg '>
					<span className=''>Get Started Now</span>
					<FaArrowRight className='inline-block ml-2' />
				</div>
			</div>
			<OurCommitment
				description1={data.intro.paragraphs[0]}
				description2={data.intro.paragraphs[1]}
				description3={data.intro.paragraphs[2]}
				videoUrl={data.intro.youtubeUrl}
			/>
		</PageContainer>
	);
}

// Animations,

export const revalidate = 1;
