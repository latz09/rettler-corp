"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; // Import the CSS for autoplay

import Image from 'next/image';

const ExperienceCarousel = ({ images }) => {
    return (
        <div style={{ overflow: 'hidden', width: '100%' }}>
            <Swiper
                spaceBetween={0}
                centeredSlides={true} // Center the active slide
                autoplay={{
                    delay: 3000, // Delay between scrolls
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                speed={1000} // Adjust speed for smooth transition
                loop={true}
                modules={[Autoplay]}
                slidesPerView={1} // Show only one slide at a time
                style={{ width: '100%', height: 'auto' }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image
                            src={image.imageUrl}
                            alt={`Carousel Image ${index + 1}`}
                            width={550}
                            height={550}
                            style={{ display: 'block' }}
                            className="shadow-lg shadow-primary/30 lg:rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ExperienceCarousel;

export const revalidate = 1;