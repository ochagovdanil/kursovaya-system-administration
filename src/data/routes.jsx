import { lazy } from 'react';

const NotFound = lazy(() => import('@components/NotFound'));
const Home = lazy(() => import('@components/pages/Home'));
const AboutMe = lazy(() => import('@components/pages/AboutMe'));
const DesktopsCommon = lazy(() =>
	import('@components/pages/virtual-desktops/Common')
);
const Desktops = lazy(() =>
	import('@components/pages/virtual-desktops/Desktops')
);
const VirtuaWin = lazy(() =>
	import('@components/pages/virtual-desktops/VirtuaWin')
);
const VirtualDimension = lazy(() =>
	import('@components/pages/virtual-desktops/VirtualDimension')
);
const ProcessCommon = lazy(() =>
	import('@components/pages/process-managers/Common')
);
const ProcessExplorer = lazy(() =>
	import('@components/pages/process-managers/ProcessExplorer')
);
const ProcessHacker = lazy(() =>
	import('@components/pages/process-managers/ProcessHacker')
);
const SystemExplorer = lazy(() =>
	import('@components/pages/process-managers/SystemExplorer')
);
const BackupCommon = lazy(() => import('@components/pages/backups/Common'));
const DefaultBackup = lazy(() => import('@components/pages/backups/Default'));
const AOMEI = lazy(() => import('@components/pages/backups/AOMEI'));
const Iperius = lazy(() => import('@components/pages/backups/Iperius'));

const routes = [
	{
		path: '*',
		article: () => <NotFound />,
	},
	{
		path: '/',
		article: () => <Home />,
	},
	{
		path: '/about-me',
		article: () => <AboutMe />,
	},
	{
		path: '/virtual-desktops-common',
		article: () => <DesktopsCommon />,
	},
	{
		path: '/desktops',
		article: () => <Desktops />,
	},
	{
		path: '/virtuawin',
		article: () => <VirtuaWin />,
	},
	{
		path: '/virtual-dimension',
		article: () => <VirtualDimension />,
	},
	{
		path: '/process-managers-common',
		article: () => <ProcessCommon />,
	},
	{
		path: '/process-explorer',
		article: () => <ProcessExplorer />,
	},
	{
		path: '/process-hacker',
		article: () => <ProcessHacker />,
	},
	{
		path: '/system-explorer',
		article: () => <SystemExplorer />,
	},
	{
		path: '/backups-common',
		article: () => <BackupCommon />,
	},
	{
		path: '/default-backup',
		article: () => <DefaultBackup />,
	},
	{
		path: '/aomei',
		article: () => <AOMEI />,
	},
	{
		path: '/iperius',
		article: () => <Iperius />,
	},
];

export default routes;
