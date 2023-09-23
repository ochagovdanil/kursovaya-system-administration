import logo from '@assets/logo.png';
import logoWide from '@assets/logo-wide.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

const Header = ({ onMenuOpen }) => {
	return (
		<header className='fixed w-screen top-0 left-0 z-50 bg-white shadow-md'>
			<div className='mx-auto px-6 flex justify-between items-center lg:container'>
				<FontAwesomeIcon
					icon={faBars}
					className='block text-2xl text-black-desc cursor-pointer xl:hidden'
					onClick={onMenuOpen}
				/>
				<img
					src={logoWide}
					alt='Логотип НИУ МГСУ'
					title='НИУ МГСУ'
					className='hidden h-14 py-2 sm:block'
				/>
				<img
					src={logo}
					alt='Логотип НИУ МГСУ'
					title='НИУ МГСУ'
					className='block h-14 py-2 sm:hidden'
				/>
			</div>
		</header>
	);
};

export default memo(Header);
