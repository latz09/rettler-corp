import Link from 'next/link';
import Logo from '../lib/Logo';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { navigationLinks } from '@/data/navigationLinks';
const currentYear = new Date().getFullYear();
const CLIENT_BUSINESS_NAME = 'Rettler Corporation';

const Footer = () => {
	return (
		<footer>
			<div className='py-16 grid place-items-center text-center gap-12 '>
				<Logo height={200} width={200} />
				<FooterNav />
				<Socials />
			</div>
			<CopyRight />
		</footer>
	);
};

export default Footer;

const FooterNav = () => {
	return (
		<div className='grid  gap-4 '>
			{navigationLinks.map(({ title, href }) => (
				<Link href={href} key={title} className='text-dark text-xl'>
					{title}
				</Link>
			))}
		</div>
	);
};

const CopyRight = () => {
	// Get the current year

	return (
		<div className='text-center pb-3 mt-2 px-2  grid gap-3 text-dark'>
			<Link href='/legal/privacy-policy'>
				<span className='text-xs font-semibold'>Privacy Policy</span>
			</Link>
			<a
				href='https://www.latzwebdesign.com'
				target='_blank'
				rel='noopener noreferrer'
				className='flex items-center justify-center gap-2  text-dark '
			>
				<p>
					{`© ${currentYear} by ${CLIENT_BUSINESS_NAME}. Handcrafted with care by `}
					<span className='font-bold '>LatzWebDesign.</span>
				</p>
			</a>
		</div>
	);
};

const Socials = () => {
	return (
		<div className='flex gap-8 lg:gap-16 items-center'>
			<div>
				<FaFacebookF className='text-3xl text-primary' />
			</div>
			<div>
				<AiFillInstagram className='text-3xl text-primary' />
			</div>
			<div>
				<FaLinkedinIn className='text-3xl text-primary' />
			</div>
		</div>
	);
};
