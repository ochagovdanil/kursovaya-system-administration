import ExternalLink from '@components/ExternalLink';
import Image from '@components/Image';
import mainView from '@assets/systemexplorer-main-view.png';
import columns from '@assets/systemexplorer-columns.png';
import details from '@assets/systemexplorer-details.png';
import dll from '@assets/systemexplorer-dll.png';
import submenu from '@assets/systemexplorer-submenu.png';
import titleMenu from '@assets/systemexplorer-title-menu.png';
import options from '@assets/systemexplorer-options.png';
import tray from '@assets/systemexplorer-tray.png';
import search from '@assets/systemexplorer-search.png';
import modules from '@assets/systemexplorer-modules.png';
import system from '@assets/systemexplorer-system.png';
import network from '@assets/systemexplorer-network.png';
import data from '@assets/systemexplorer-data.png';

const SystemExplorer = () => {
	return (
		<>
			<h1 className='article-title'>
				System Explorer - приложение
				<ExternalLink href='https://systemexplorer.net/' />
			</h1>
			<p className='article-desc'>
				System Explorer - это мощный мониторинг процессов в операционной
				системе. Данный софт был написан разработчиком Mister Group.
			</p>
			<p className='article-desc'>
				Главное окно приложения имеет следующий вид.
			</p>
			<Image src={mainView} />
			<p className='article-desc'>
				Как мы видим - все процессы находятся в правой части экрана и
				представлены в виде дерева. Снизу видная краткая информация о
				самой системе.
			</p>
			<p className='article-desc'>
				Информация о процессах представлена в различных колонках,
				которые можно добавлять/удалять.
			</p>
			<Image src={columns} />
			<p className='article-desc'>
				Через контекстное меню можно попасть в свойства процесса,
				установить ему приоритетность/Affinity, завершить процесс,
				приостановить, перезапустить, сделать поиск процесса на диске и
				прочее.
			</p>
			<Image src={details} />
			<p className='article-desc'>
				DLL зависимости находятся во вкладке Modules.
			</p>
			<Image src={dll} />
			<p className='article-desc'>
				Над списком процессов есть меню, отвечающее за возможность
				просканировать процессы на угрозы, поиск процесса по
				перетаскиванию окна, вкл/выкл режим дерева, показать
				сервисы/Microsoft элементы/элементы всех пользователей.
			</p>
			<Image src={submenu} />
			<p className='article-desc'>
				В приложении есть основное меню, где есть: справка; быстрый
				доступ к системным утилитам (System Utilities) - групповая
				политика, управление компьютером и другие; настройка вида
				приложения и частоты обновления данных; создание нового
				процесса; открытие окна настроек.
			</p>
			<Image src={titleMenu} />
			<p className='article-desc'>
				Через основное меню можно произвести поиск процессов по ключевым
				словам.
			</p>
			<Image src={search} />
			<p className='article-desc'>
				В окне настроек можно поменять язык приложения, сменить тему и
				изменить дизайн окна, настроить историю процессов и многое
				другое.
			</p>
			<Image src={options} />
			<p className='article-desc'>
				В трее есть детальная информация о самой системе.
			</p>
			<Image src={tray} />
			<p className='article-desc'>
				Слева в окне приложения предлагается список критериев, по
				которым мы можем искать нужные нам данные. Например, можно
				искать модули DLL.
			</p>
			<Image src={modules} />
			<p className='article-desc'>
				Есть возможность вывести содержимое информации о системе.
			</p>
			<Image src={system} />
			<p className='article-desc'>
				Есть сетевая активность и многое другое.
			</p>
			<Image src={network} />
			<p className='article-desc'>
				Можно сохранить данные о любом процессе прямо в файл с
				расширением .txt.
			</p>
			<Image src={data} />
			{/* -------------------------Pros and Cons-------------------------- */}
			<p className='article-desc'>Плюсы:</p>
			<ul className='ml-4 article-desc'>
				<li className='list-disc'>
					<p>Быстрая работа.</p>
				</li>
				<li className='list-disc'>
					<p>Расширенный функционал.</p>
				</li>
				<li className='list-disc'>
					<p>Есть возможность просмотра DLL зависимостей.</p>
				</li>
				<li className='list-disc'>
					<p>Бесплатная.</p>
				</li>
				<li className='list-disc'>
					<p>Есть возможность выгрузки данных в файл.</p>
				</li>
				<li className='list-disc'>
					<p>Есть подробная информация о системе прямо из трея.</p>
				</li>
				<li className='list-disc'>
					<p>Поддержка более старых операционных систем.</p>
				</li>
				<li className='list-disc'>
					<p>Возможность запустить новый процесс.</p>
				</li>
				<li className='list-disc'>
					<p>Присутствует поддержка нескольких языков.</p>
				</li>
			</ul>
			<p className='article-desc'>Минусы:</p>
			<ul className='ml-4 article-desc'>
				<li className='list-disc'>
					<p>Чуть более сложный интерфейс.</p>
				</li>
				<li className='list-disc'>
					<p>
						Нет второго окна для одновременного просмотра
						дескрипторов или DLL зависимостей.
					</p>
				</li>
			</ul>
		</>
	);
};

export default SystemExplorer;
