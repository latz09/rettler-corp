import AnimateUp from "../utils/animations/AnimateUp";
import { Description, Heading } from "../utils/Typography";

const WhoWeAre = ({ description }) => {
	return (
		<div className=' space-y-4 text- md:w-3/4  px-2 text-center lg:text-start max-w-5xl mx-auto'>
			<Heading text={'Who We Are'} />
			<AnimateUp>
				<Description text={description} />
			</AnimateUp>
		</div>
	);
};

export default WhoWeAre;
