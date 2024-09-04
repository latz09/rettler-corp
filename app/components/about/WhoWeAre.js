import AnimateUp from '../utils/animations/AnimateUp';
import { FaArrowRight } from 'react-icons/fa';
import { Description, Heading } from '../utils/Typography';
import Image from 'next/image';

const WhoWeAre = ({ description, image }) => {
	return (
		<div className='gap-4 grid place-items-center text-center xl:text-start xl:place-items-start  px-2  max-w-7xl mx-auto'>
			<AnimateUp>
				<div className='grid xl:grid-cols-2 place-items-center gap-8'>
					<div className='grid gap-2 place-items-center xl:place-items-start w-full md:w-3/4 xl:w-full'>
						<Heading text={'Who We Are'} />
						<Description text={description} />
						<div className='hidden xl:block'>
							<MeetOurTeam />
						</div>
					</div>
					<Image
						src={image}
						alt='Who We Are'
						className='rounded-xl'
						width={500}
						height={500}
					/>
					<div className='xl:hidden'>
						<MeetOurTeam />
					</div>
				</div>
			</AnimateUp>
		</div>
	);
};

export default WhoWeAre;

const MeetOurTeam = () => {
	return (
		<div className='mt-4 cursor-pointer py-2 px-6 bg-primary  text-light rounded-full font-bold xl:text-xl md:hover:scale-90 md:hover:opacity-80 transition duration-700'>
			<span className=''>Meet Our Team</span>
			<FaArrowRight className='inline-block ml-2' />
		</div>
	);
};
