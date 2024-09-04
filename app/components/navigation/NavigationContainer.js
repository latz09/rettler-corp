import MobileNavbar from '../utils/modals/MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import { navigationLinks } from '@/data/navigationLinks';
const NavigationContainer = () => {
	return (
		<div className=' pt-6    upperase sticky top-0 lg:static bg-light/90 backdrop-blur-sm z-[99999]'>
			<MobileNavbar navLinks={navigationLinks}/>
			
			<DesktopNavbar navLinks={navigationLinks}/>
		</div>
	);
};

export default NavigationContainer;
