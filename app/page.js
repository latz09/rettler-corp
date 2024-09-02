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

export default async function Home() {
	const data = await fetchContent(query);

	return (
		<PageContainer>
			<LandingPageHero
				image={data.landingHero.landingImage}
				heading={data.landingHero.heading}
				logoImage={data.landingHero.logoImage}
			/>
			<WhoWeAre description={data.intro.paragraphs[1]} />
			<Affiliations />

			<ServiceCards data={data.services} />
			<Intro data={data.intro} whoWeAreImage={data.whoWeAre.whoWeAreImage} />
			<OurCommitment
				description={data.intro.paragraphs[0]}
				videoUrl={data.intro.youtubeUrl}
			/>
		</PageContainer>
	);
}

// Animations,

export const revalidate = 1;
