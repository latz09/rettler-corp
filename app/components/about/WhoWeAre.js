import AnimateUp from '../utils/animations/AnimateUp';
import { FaArrowRight } from "react-icons/fa";
import { Description, Heading } from '../utils/Typography';

const WhoWeAre = ({ description }) => {
	return (
		<div className='gap-4 grid place-items-center text-center lg:text-start lg:place-items-start   text- md:w-3/4  px-2  max-w-5xl mx-auto'>
			<Heading text={'Who We Are'} />
			<AnimateUp>
				<Description text={description} />
			</AnimateUp>
			<div className='mt-4 cursor-pointer py-2 px-6 bg-primary  text-light rounded-full font-bold lg:text-lg'>
				<span className="">Meet Our Team</span>
                <FaArrowRight className='inline-block ml-2' />
			</div>
		</div>
	);
};

export default WhoWeAre;
