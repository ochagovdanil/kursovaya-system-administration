import { Routes, Route } from 'react-router-dom';
import routes from '@data/routes';
import { Suspense } from 'react';
import Loader from '@components/Loader';

const Article = () => {
	return (
		<article className='relative w-full h-min bg-white shadow-md rounded-md p-6 overflow-hidden lg:p-10'>
			<div className='hidden absolute top-0 right-0 border-t-[3rem] border-l-[3rem] border-t-sky-100 border-r-transparent border-b-transparent border-l-transparent md:block'>
				{/* Triangle */}
			</div>
			<Routes>
				{routes.map(({ path, article }) => (
					<Route
						key={path}
						path={path}
						element={
							<Suspense fallback={<Loader />}>
								{article()}
							</Suspense>
						}
					/>
				))}
			</Routes>
		</article>
	);
};

export default Article;
