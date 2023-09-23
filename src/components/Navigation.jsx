import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouse,
	faUser,
	faDisplay,
	faGears,
	faDatabase,
	faChevronDown,
	faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navigation = ({ isMenuShown, onMenuClose }) => {
	const location = useLocation(); // selected URL paths used for marking menu items as active or not
	const navigate = useNavigate();

	// expand/collapse sidebar menu items
	const [isHiddenVirtualMenu, setIsHiddenVirtualMenu] = useState(true);
	const [isHiddenProcessMenu, setIsHiddenProcessMenu] = useState(true);
	const [isHiddenBackupMenu, setIsHiddenBackupMenu] = useState(true);

	// make menu item active or non active
	const applyLinkStyles = path => {
		if (location.pathname === path) return 'bg-sky-100 font-bold shadow-sm';
		return 'hover:bg-slate-50';
	};

	return (
		<aside
			className={`${
				isMenuShown
					? 'fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-70 z-50'
					: 'hidden bg-white w-[25rem] h-min py-8 shadow-md rounded-md xl:block 2xl:w-[30rem]'
			}`}
			onClick={onMenuClose}
		>
			<nav
				className={`${
					isMenuShown &&
					'bg-white h-screen max-w-[25rem] py-4 overflow-auto'
				}`}
				onClick={e => e.stopPropagation()}
			>
				<ul className='flex flex-col space-y-0 mr-4'>
					<li onClick={onMenuClose}>
						<Link to='/'>
							<p
								className={`sidebar-item ${applyLinkStyles(
									'/'
								)}`}
							>
								<FontAwesomeIcon
									icon={faHouse}
									className='mr-6 text-base'
								/>
								Главная
							</p>
						</Link>
					</li>
					<li onClick={onMenuClose}>
						<Link to='/about-me'>
							<p
								className={`sidebar-item ${applyLinkStyles(
									'/about-me'
								)}`}
							>
								<FontAwesomeIcon
									icon={faUser}
									className='mr-6 text-base'
								/>
								Обо мне
							</p>
						</Link>
					</li>
					<li onClick={onMenuClose}>
						<p
							className='flex items-center hover:bg-slate-50 sidebar-item'
							onClick={() => navigate('/virtual-desktops-common')}
						>
							<span>
								<FontAwesomeIcon
									icon={faDisplay}
									className='mr-6 text-base'
								/>
								Средства управления рабочим столом и создания
								дополнительных рабочих столов
							</span>
							<FontAwesomeIcon
								icon={
									isHiddenVirtualMenu
										? faChevronDown
										: faChevronUp
								}
								className='ml-4 p-3 text-base rounded-full hover:bg-slate-200'
								onClick={e => {
									e.stopPropagation();
									setIsHiddenVirtualMenu(
										!isHiddenVirtualMenu
									);
								}}
							/>
						</p>
						{!isHiddenVirtualMenu && (
							<ul>
								<li onClick={onMenuClose}>
									<Link to='/desktops'>
										<p
											className={`sidebar-item pl-10 ${applyLinkStyles(
												'/desktops'
											)}`}
										>
											Desktops
										</p>
									</Link>
								</li>
								<li onClick={onMenuClose}>
									<Link to='/virtuawin'>
										<p
											className={`sidebar-item pl-10 ${applyLinkStyles(
												'/virtuawin'
											)}`}
										>
											VirtuaWin
										</p>
									</Link>
								</li>
								<li onClick={onMenuClose}>
									<Link to='/virtual-dimension'>
										<p
											className={`sidebar-item pl-10 ${applyLinkStyles(
												'/virtual-dimension'
											)}`}
										>
											Virtual Dimension
										</p>
									</Link>
								</li>
							</ul>
						)}
					</li>
					<li onClick={onMenuClose}>
						<p
							className='flex items-center hover:bg-slate-50 sidebar-item'
							onClick={() => navigate('/process-managers-common')}
						>
							<span>
								<FontAwesomeIcon
									icon={faGears}
									className='mr-6 text-base'
								/>
								Средства управления процессами в ОС
							</span>
							<FontAwesomeIcon
								icon={
									isHiddenProcessMenu
										? faChevronDown
										: faChevronUp
								}
								className='ml-4 p-3 text-base rounded-full hover:bg-slate-200'
								onClick={e => {
									e.stopPropagation();
									setIsHiddenProcessMenu(
										!isHiddenProcessMenu
									);
								}}
							/>
						</p>
						{!isHiddenProcessMenu && (
							<ul>
								<li onClick={onMenuClose}>
									<Link to='/process-explorer'>
										<p
											className={`sidebar-item pl-10 ${applyLinkStyles(
												'/process-explorer'
											)}`}
										>
											Process Explorer
										</p>
									</Link>
								</li>
								<li onClick={onMenuClose}>
									<Link to='/process-hacker'>
										<p
											className={`sidebar-item pl-10 ${applyLinkStyles(
												'/process-hacker'
											)}`}
										>
											Process Hacker
										</p>
									</Link>
								</li>
								<li onClick={onMenuClose}>
									<Link to='/system-explorer'>
										<p
											className={`sidebar-item pl-10 ${applyLinkStyles(
												'/system-explorer'
											)}`}
										>
											System Explorer
										</p>
									</Link>
								</li>
							</ul>
						)}
					</li>
					<li onClick={onMenuClose}>
						<p
							className='flex items-center hover:bg-slate-50 sidebar-item'
							onClick={() => navigate('/backups-common')}
						>
							<span>
								<FontAwesomeIcon
									icon={faDatabase}
									className='mr-6 text-base'
								/>
								Средства резервного копирования и восстановления
								данных
							</span>
							<FontAwesomeIcon
								icon={
									isHiddenBackupMenu
										? faChevronDown
										: faChevronUp
								}
								className='ml-4 p-3 text-base rounded-full hover:bg-slate-200'
								onClick={e => {
									e.stopPropagation();
									setIsHiddenBackupMenu(!isHiddenBackupMenu);
								}}
							/>
						</p>
						{!isHiddenBackupMenu && (
							<ul>
								<li onClick={onMenuClose}>
									<Link to='/default-backup'>
										<p
											className={`sidebar-item pl-10 ${applyLinkStyles(
												'/default-backup'
											)}`}
										>
											Стандартное приложение от Windows
										</p>
									</Link>
								</li>
								<li onClick={onMenuClose}>
									<Link to='/aomei'>
										<p
											className={`sidebar-item pl-10 ${applyLinkStyles(
												'/aomei'
											)}`}
										>
											AOMEI Backupper Standard
										</p>
									</Link>
								</li>
								<li onClick={onMenuClose}>
									<Link to='/iperius'>
										<p
											className={`sidebar-item pl-10 ${applyLinkStyles(
												'/iperius'
											)}`}
										>
											Iperius Backup
										</p>
									</Link>
								</li>
							</ul>
						)}
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Navigation;
