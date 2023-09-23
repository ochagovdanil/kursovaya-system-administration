import { memo } from 'react';

const Image = props => {
	return <img {...props} className='article-image' />;
};

export default memo(Image);
