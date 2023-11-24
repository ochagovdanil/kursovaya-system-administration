import ExternalLink from '@components/ExternalLink';
import Download from '@components/Download';

const Iperius = () => {
	return (
		<>
			<h1 className='article-title'>
				Iperius Backup - приложение
				<ExternalLink href='https://www.iperiusbackup.com/' />
			</h1>
			<Download />
		</>
	);
};

export default Iperius;
