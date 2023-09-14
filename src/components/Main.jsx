import Header from '@components/Header';
import Navigation from '@components/Navigation';
import Article from '@components/Article';
import TopButton from '@components/TopButton';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useCallback } from 'react';

const Main = () => {
	const [isShownSidebar, setIsShownSidebar] = useState(false); // show or hide sidebar on small screens

	// open sidebar on small screen
	const handleOpenMenu = () => {
		setIsShownSidebar(true);
	};

	// hide sidebar on small screen
	const handleCloseMenu = () => {
		setIsShownSidebar(false);
	};

	return (
		<>
			<TopButton />
			<Header onMenuOpen={handleOpenMenu} />
			<div className='mx-auto px-2 flex space-x-0 mt-20 mb-6 md:px-4 lg:container xl:space-x-6'>
				<Router>
					<Navigation
						isMenuShown={isShownSidebar}
						onMenuClose={handleCloseMenu}
					/>
					<Article />
				</Router>
			</div>
		</>
	);
};

export default Main;
