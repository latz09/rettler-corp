'use client';

import { motion } from 'framer-motion';

const MenuIcon = ({ toggleNav, isNavOpen }) => {
	return (
		<button className=' z-[9999] text-3xl ' onClick={toggleNav}>
			<motion.div
				className='cursor-pointer'
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				<div className='flex flex-col space-y-1'>
					<span
						className={`block w-8 h-1 bg-light transition-transform ${
							isNavOpen ? 'rotate-45 translate-y-2' : 'bg-primary'
						}`}
					/>
					<span
						className={`block w-8 h-1 bg-light transition-opacity ${
							isNavOpen ? 'opacity-0' : 'bg-primary'
						}`}
					/>
					<span
						className={`block w-8 h-1 bg-light transition-transform ${
							isNavOpen ? '-rotate-45 -translate-y-2' : 'bg-primary'
						}`}
					/>
				</div>
			</motion.div>
		</button>
	);
};

export default MenuIcon;
