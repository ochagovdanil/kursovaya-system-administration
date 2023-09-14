import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const TopButton = () => {
	const [isButtonVisible, setIsButtonVisible] = useState(false);

	// show/hide the Top Button
	useEffect(() => {
		function handleScroll() {
			if (window.scrollY >= 200) setIsButtonVisible(true);
			else setIsButtonVisible(false);
		}

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// scroll to the top of the page
	function handleClick() {
		window.scrollTo(0, 0);
	}

	return (
		<>
			{isButtonVisible && (
				<button
					className='fixed bottom-6 right-6 border-none outline-none bg-amber-300 px-4 py-3 rounded-full shadow-md z-50 hover:bg-amber-400'
					onClick={handleClick}
				>
					<FontAwesomeIcon
						icon={faChevronUp}
						className='text-base text-slate-600'
					/>
				</button>
			)}
		</>
	);
};

export default TopButton;
