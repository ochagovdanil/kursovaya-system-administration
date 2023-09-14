import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<>
			<h1 className='article-title'>Oops! 404 Error :&lt;</h1>
			<Link to='/'>
				<button className='border-none outline-none text-slate-600 text-base bg-sky-100 py-3 px-6 rounded-lg shadow-md hover:bg-sky-200'>
					На главную
				</button>
			</Link>
		</>
	);
};

export default NotFound;
