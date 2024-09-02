import Image from 'next/image';
import { Heading, SubHeading } from '../utils/Typography';
import { FaArrowRight } from "react-icons/fa";

const ServiceCards = ({ data }) => {
	return (
		<div className='text-center space-y-16'>
			<Heading text='What We Do' color='text-primary' />
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto md:px-4'>
				{data.map((service, index) => (
					<ServiceCard
						key={index}
						title={service.serviceTitle}
						image={service.serviceImage}
					/>
				))}
			</div>
		</div>
	);
};

export default ServiceCards;

const ServiceCard = ({ title, image }) => {
	return (
		<div className='relative shadow-lg shadow-primary/40 lg:rounded-sm overflow-hidden group hover:scale-95 transition-transform duration-300 cursor-pointer'>
			<div className='relative h-64'>
				<Image
					src={image}
					alt={title}
					fill
					style={{ objectFit: 'cover' }}
					className='absolute inset-0 w-full h-full'
				/>
				<div className='absolute inset-0 bg-dark/50 group-hover:bg-dark/80 flex flex-col items-center justify-center px-2 transition-colors duration-300'>
					<SubHeading text={title} color={'text-light group-hover:text-primary'} />
				</div>
				<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center text-light gap-2 text-lg font-semibold'>
					<span className="">Learn More</span>
					<FaArrowRight className="text-primary group-hover:text-light text-2xl transition-transform duration-300 group-hover:translate-x-2 " />
				</div>
			</div>
		</div>
	);
};
