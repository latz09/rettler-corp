"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

const ExperienceCarousel = ({ images }) => {
    const controls = useAnimation();

    // Duplicate images for seamless looping
    const extendedImages = [...images, ...images];

    useEffect(() => {
        if (images && images.length > 0) {
            controls.start({
                x: ['0%', '-100%'], // Move from 0% to -100% of the container width
                transition: {
                    x: {
                        repeat: Infinity, // Repeat indefinitely
                        repeatType: 'loop',
                        duration: 10, // Adjust the duration for speed
                        ease: 'linear', // Linear movement for smooth scrolling
                    },
                },
            });
        }
    }, [images, controls]);

    return (
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%', height: 'auto' }}>
            <motion.div
                className="space-x-4 grid place-items-center m-8" 
                animate={controls}
                style={{ display: 'flex' }}
            >
                {extendedImages.map((image, index) => (
                    <motion.div key={index} style={{ flexShrink: 0 }}>
                        <Image
                            src={image.imageUrl}
                            alt={`Carousel Image ${index + 1}`}
                            width={700} // Or set a dynamic width based on your needs
                            height={700} // Or set a dynamic height based on your needs
                            style={{ display: 'block' }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ExperienceCarousel;
