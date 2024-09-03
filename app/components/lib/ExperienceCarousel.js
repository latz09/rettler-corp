'use client';

import { useState, useRef } from 'react';
import { motion as m } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; // Import the CSS for autoplay

import Image from 'next/image';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import the play and pause icons

const ExperienceCarousel = ({ images }) => {
	const [isPlaying, setIsPlaying] = useState(true);
	const swiperRef = useRef(null);

	const handlePlayPause = () => {
		if (isPlaying) {
			swiperRef.current.swiper.autoplay.stop();
		} else {
			swiperRef.current.swiper.slideNext(0); // Immediately move to the next slide
			swiperRef.current.swiper.autoplay.start();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<div style={{ overflow: 'hidden', width: '100%' }}>
			<div className='flex justify-center mb-8'>
				<button
					onClick={handlePlayPause}
					className='p-3 border border-primary/30 shadow-lg rounded-full text-primary font-bold lg:text-lg flex items-center justify-center'
				>
					{isPlaying ? <FaPause /> : <FaPlay />}
				</button>
			</div>
			<Swiper
				ref={swiperRef}
				spaceBetween={20}
				centeredSlides={false} // No need to center when showing multiple slides
				autoplay={{
					delay: 2500, // Delay between scrolls
					disableOnInteraction: false,
					pauseOnMouseEnter: false,
				}}
				speed={1000} // Adjust speed for smooth transition
				loop={true}
				modules={[Autoplay]}
				breakpoints={{
					1024: {
						slidesPerView: 3, // Show three slides side by side for large screens and up
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2, // Show two slides side by side for medium screens
						spaceBetween: 20,
					},
					0: {
						slidesPerView: 1, // Show one slide for small screens
						spaceBetween: 20,
					},
				}}
				style={{ width: '100%', height: 'auto' }}
			>
				{images.map((image, index) => (
					<SwiperSlide
						key={index}
						style={{
							display: 'flex',
							justifyContent: 'center',
							position: 'relative',
						}}
						className='grid place-items-center'
					>
						<div className='relative cursor-pointer lg:hover:scale-90 transition duration-500'>
							<Image
								src={image.imageUrl}
								alt={`Carousel Image ${index + 1}`}
								width={550}
								height={550}
								style={{ display: 'block' }}
								className='shadow-lg shadow-primary/30 lg:rounded-lg'
							/>
							<m.div
								className='absolute inset-0 bg-gradient-to-b from-dark/0 via-dark/40 to-dark/40 rounded-lg flex flex-col justify-center items-center text-light p-4'
								initial={{ opacity: 0}}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1, delay: 0.15 }}
							>
								<h2 className='text-lg font-bold'>{image.title}</h2>
								<p className=''>{image.location}</p>
							</m.div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ExperienceCarousel;
