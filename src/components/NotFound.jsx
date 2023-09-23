import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<>
			<h1 className='article-title'>Oops! 404 Error :&lt;</h1>
			<Link to='/'>
				<button className='border-none outline-none text-black-desc text-base bg-primary py-3 px-6 rounded-lg shadow-md hover:bg-primary-dark'>
					На главную
				</button>
			</Link>
		</>
	);
};

export default NotFound;
