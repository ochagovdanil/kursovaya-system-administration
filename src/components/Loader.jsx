import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
	return (
		<h2 className='text-base text-black-desc xl:text-xl'>
			Загружаем статью <FontAwesomeIcon icon={faSpinner} spin />
		</h2>
	);
};

export default Loader;
