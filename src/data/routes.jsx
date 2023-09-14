import { lazy } from 'react';

const NotFound = lazy(() => import('@components/NotFound'));
const Home = lazy(() => import('@components/pages/Home'));
const AboutMe = lazy(() => import('@components/pages/AboutMe'));
const Desktops = lazy(() =>
	import('@components/pages/virtual-desktops/Desktops')
);
const VirtuaWin = lazy(() =>
	import('@components/pages/virtual-desktops/VirtuaWin')
);
const VirtualDimension = lazy(() =>
	import('@components/pages/virtual-desktops/VirtualDimension')
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
