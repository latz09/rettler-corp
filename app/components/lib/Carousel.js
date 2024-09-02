'use client';

import { motion } from 'framer-motion';
import React from 'react';

const Carousel = ({ data }) => {
	
	if (!data || data.length === 0) {
		return <div>No logos to display</div>;
	}

	const logos = data.map((logo) => logo.imageUrl);

	return (
		<div className="overflow-hidden relative w-full h-full grid place-items-center">
			<motion.div
				className="flex space-x-20"
				initial={{ x: 0 }}
				animate={{ x: '-100%' }}
				transition={{
					duration: 15, // Adjust the speed as necessary
					ease: 'linear',
					repeat: Infinity, // Infinite loop
				}}
				style={{
					minWidth: '100%', // Ensure the div is at least the width of its container
				}}
			>
				{logos.concat(logos).map((url, index) => (
					<motion.img
						key={index}
						src={url}
						alt={`Logo ${index}`}
						className="h-24 w-auto" // Consistent size
					/>
				))}
			</motion.div>
		</div>
	);
};

export default Carousel;
