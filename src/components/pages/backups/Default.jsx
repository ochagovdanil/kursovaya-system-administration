import ExternalLink from '@components/ExternalLink';

const Default = () => {
	return (
		<>
			<h1 className='article-title'>
				Стандартное приложение от Windows
				<ExternalLink href='https://support.microsoft.com/en-us/windows/backup-and-restore-in-windows-352091d2-bb9d-3ea3-ed18-52ef2b88cbef' />
			</h1>
			<p className='article-desc'>Описание программы.</p>
		</>
	);
};

export default Default;
