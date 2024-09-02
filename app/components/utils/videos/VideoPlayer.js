'use client';

import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';

const VideoPlayer = ({ url }) => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true); // Ensure this runs only on the client

		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		handleResize(); // Set initial width
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const isMobile = windowWidth <= 768;
	const maxWidth = 800; // Max width for larger screens

	if (!isClient) {
		// Render nothing on the server
		return null;
	}

	return (
		<div>
			<div
				style={{
					position: 'relative',
					paddingTop: isMobile ? '56.25%' : '0',
					paddingBottom: isMobile ? '0' : '56.25%', // Maintain aspect ratio of 16:9
					height: isMobile ? 'auto' : 0,
					width: '100%',
					maxWidth: isMobile ? '100%' : `${maxWidth}px`,
					margin: isMobile ? '0 auto' : '20px auto', // Adjust margin for centering
				}}
			>
				<ReactPlayer
					url={url}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: isMobile ? '100%' : '100%',
					}}
					width='100%'
					height='100%'
					controls
				/>
			</div>
		</div>
	);
};

export default VideoPlayer;
