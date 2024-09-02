import Image from 'next/image';
import GradientHeading from '../utils/animations/GradientHeading';
import ButtonLink from '../utils/buttons/ButtonLink';

const LandingPageHero = ({ image, heading, logoImage }) => {
	return (
		<div className='relative h-[75vh] flex flex-col justify-center items-center'>
			{/* Background Image */}
			<Image
				src={image}
				alt='Landing Background'
				fill
				priority
				style={{ objectFit: 'cover', objectPosition: 'center ' }}
				className='z-0'
				quality={100}
			/>

			{/* Background overlay */}
			<div className='absolute inset-0 bg-gradient-to-b from-dark/0 via-dark/70 to-dark/0 z-10' />

			{/* Content */}
			<div className='relative z-20 text-center grid place-items-center px-2'>
				<div className='opacity-70'>
					<Image src={logoImage} height={350} width={350} alt='Logo' />
				</div>
				<GradientHeading text={heading} />
				<div className="text-light/80 text-2xl lg:text-3xl mt-2 ">
					Bringing innovative ideas to life with precision and expertise.
				</div>
				<div className='mt-6 lg:mt-12 grid gap-4 md:flex lg:gap-8'>
					<ButtonLink href='/' title='Get Started Today' theme='primary' />
					<ButtonLink href='/' title='View Our Work' theme='secondary' />
				</div>
			</div>
		</div>
	);
};

export default LandingPageHero;
