import Link from 'next/link';

const ButtonLink = ({ href, title, theme }) => {
	return (
		<Link
			href={href}
			className={` py-4 px-8 font-semibold rounded-full text-lg lg:text-2xl transition duration-700 hover:scale-95  ${
				theme === 'primary' ? 'bg-dark font-black text-light' : 'bg-light text-dark'
			} `}
		>
			<span>{title}</span>
		</Link>
	);
};

export default ButtonLink;
