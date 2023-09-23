import { memo } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExternalLink = ({ href = '#' }) => {
	return (
		<a href={href} target='_blank' rel='noopener noreferrer'>
			<FontAwesomeIcon
				icon={faArrowUpRightFromSquare}
				className='text-base text-accent-dark m-2'
			/>
		</a>
	);
};

export default memo(ExternalLink);
