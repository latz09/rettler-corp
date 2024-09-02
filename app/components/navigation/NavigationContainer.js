import MobileNavbar from '../utils/modals/MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import { navigationLinks } from '@/data/navigationLinks';
const NavigationContainer = () => {
	return (
		<div className=' pt-4    upperase'>
			<MobileNavbar navLinks={navigationLinks}/>
			
			<DesktopNavbar navLinks={navigationLinks}/>
		</div>
	);
};

export default NavigationContainer;
