'use client';
import { motion } from 'framer-motion';

const GradientHeading = ({ text }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1.4 }}
		>
			<motion.div
				className='glimmer-text text-light/0 z-50 font-black'
				style={{ backgroundSize: '200% 100%' }}
				animate={{
					backgroundPosition: ['-100% 0%', '100% 0%'],
					// scale: [1, .98, 1]
				}}
				transition={{
					duration: 3.7,
					ease: 'linear',
					repeat: Infinity,
					delay: 0.4,
				}}
			>
				<p className='mt-5  text-4xl md:text-5xl lg:text-7xl  uppercase '>{text}</p>
			</motion.div>
		</motion.div>
	);
};

export default GradientHeading;
