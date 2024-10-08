import Link from 'next/link';
import Logo from '../lib/Logo';

const DesktopNavbar = ({ navLinks }) => {
	return (
		<div className='hidden lg:grid items-center gap-4 max-w-7x mx-auto  '>
			<div className='mx-8 flex items-center justify-between'>
				<Logo height={250} width={250} />
				<div className='bg-primary shadow-lg font-black px-8 py-2 rounded-full text-light'>
					Call Now
				</div>
			</div>
			<div className='bg-'>
				<NavigationLinks navLinks={navLinks} />
			</div>
		</div>
	);
};

export default DesktopNavbar;

const NavigationLinks = ({ navLinks }) => {
	return (
		<div className='flex justify-around items-center w-full max-w-7xl mx-auto pt-2 pb-6'>
			{navLinks.map((link, index) => (
				<Link key={index} href={link.href} passHref>
					<span
						className={`block text-lg font-bold ${
							link.title === 'Home' ? 'text-primary font-black' : 'text-tertiary opacity-80 hover:opacity-100'
						} hover:text-primary transition cursor-pointer uppercase`}
					>
						{link.title}
					</span>
				</Link>
			))}
		</div>
	);
};
