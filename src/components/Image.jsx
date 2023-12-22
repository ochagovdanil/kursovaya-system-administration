import { memo } from 'react';

const Image = props => {
	return <img {...props} className='article-image' loading='lazy' />;
};

export default memo(Image);
