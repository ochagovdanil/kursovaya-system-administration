const Download = () => {
	return (
		<>
			<p className='article-desc'>
				Данный раздел представлен в презентации PowerPoint. Для
				просмотра раздела нажмите на кнопку ниже.
			</p>
			<a
				href='../../ИЦТМС-3-3_ОчаговДО-бэкапы.pptx'
				download='ИЦТМС-3-3_ОчаговДО-бэкапы.pptx'
				className='inline-block text-center text-sm text-accent-dark bg-black-title px-6 py-3 mt-4 rounded-full cursor-pointer outline-none hover:text-accent hover:bg-black-desc lg:text-base'
			>
				Скачать презентацию
			</a>
		</>
	);
};

export default Download;
