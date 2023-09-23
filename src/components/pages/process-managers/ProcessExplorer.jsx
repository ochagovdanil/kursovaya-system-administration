import ExternalLink from '@components/ExternalLink';

const ProcessExplorer = () => {
	return (
		<>
			<h1 className='article-title'>
				Process Explorer - приложение
				<ExternalLink href='https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer' />
			</h1>
			<p className='article-desc'>Описание программы.</p>
		</>
	);
};

export default ProcessExplorer;
