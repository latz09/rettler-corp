import { FaShieldHeart } from 'react-icons/fa6';
import AnimateUp from '../utils/animations/AnimateUp';
import { Description, Heading } from '../utils/Typography';
import VideoPlayer from '../utils/videos/VideoPlayer';

const OurCommitment = ({ description1, description2, description3, videoUrl }) => {
	return (
		<div className='bg-dark'>
			<div className='grid lg:grid-cols-2 place-items-center gap-16 lg:px-4 max-w-7xl mx-auto  pt-12 lg:pb-16 lg:pt-16'>
				<div className=' px-2 lg:px-0 grid gap-4 mt-8 lg:mt-16 text-center lg:text-start max-w-5xl mx-auto'>
					<div className='mb-4'>
						<FaShieldHeart className='text-primary text-5xl mx-auto lg:hidden ' />
					</div>
					<Heading
						text={'Our Commitment at Rettler Corporation'}
						color='text-light'
					/>
					<AnimateUp>
						<div className="grid gap-3">
						<Description
							text={description1}
							color='text-light md:text-justify'
						/>
						<Description
							text={description2}
							color='text-light md:text-justify'
						/>
						<Description
							text={description3}
							color='text-light md:text-justify'
						/></div>
					</AnimateUp>
				</div>
				<div className='w-full '>
					<AnimateUp>
						<VideoPlayer url={videoUrl} />
					</AnimateUp>
				</div>
			</div>
		</div>
	);
};

export default OurCommitment;
