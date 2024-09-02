import Footer from './components/navigation/Footer';
import NavigationContainer from './components/navigation/NavigationContainer';
import './globals.css';

import { Lato } from 'next/font/google';
// import Footer from '@/components/navigation/Footer';

const poppins = Lato({
	weight: ['100', '300', '400',  '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	metadataBase: new URL('https://www.latzwebdesign.com/'),
	title: {
		default: 'Starter - Latz Web Design',
		template: `%s | Latz Web Design `,
	},
	description: ``,
	twitter: {
		card: 'summary_large_image',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<NavigationContainer />
				{children}
				<Footer />
			</body>
		</html>
	);
}
