import ExternalLink from '@components/ExternalLink';
import Image from '@components/Image';
import mainView from '@assets/processhacker-main-view.png';
import columns from '@assets/processhacker-columns.png';
import overallDetails from '@assets/processhacker-overall-details.png';
import props from '@assets/processhacker-props.png';
import description from '@assets/processhacker-description.png';
import tray from '@assets/processhacker-tray.png';
import titleMenu from '@assets/processhacker-title-menu.png';
import system from '@assets/processhacker-system.png';
import submenu from '@assets/processhacker-submenu.png';
import search from '@assets/processhacker-search.png';
import options from '@assets/processhacker-options.png';
import services from '@assets/processhacker-services.png';
import network from '@assets/processhacker-network.png';
import disk from '@assets/processhacker-disk.png';
import data from '@assets/processhacker-data.png';

const ProcessHacker = () => {
	return (
		<>
			<h1 className='article-title'>
				Process Hacker - приложение
				<ExternalLink href='https://processhacker.sourceforge.io/' />
			</h1>
			<p className='article-desc'>
				Process Hacker является бесплатной программой с открытым
				исходным кодом, написанной разработчиками wj32 и dmex, для
				управления системными службами и процессами.
			</p>
			<p className='article-desc'>
				На главном окне приложения присутствуют запущенные процессы в
				древовидном виде.
			</p>
			<Image src={mainView} />
			<p className='article-desc'>
				У каждого процесса есть своя информация разбитая по колонкам,
				эти колонки можно добавлять/удалять. Довольно много разных
				данных можно получать: нагрузка CPU, ID процесса, пользователь,
				частота I/O и пр.
			</p>
			<Image src={columns} />
			<p className='article-desc'>
				Внизу окна приложения расположена краткая информация о системе
				на данный момент времени, которую тоже можно добавлять/удалять.
			</p>
			<Image src={overallDetails} />
			<p className='article-desc'>
				Кликнув правой кнопкой мыши по какому-либо процессу, можно
				увидеть следующие функции контекстного меню: завершить процесс,
				завершить дерево процесса, приостановить, перезапустить,
				установка affinity/приоритета/IO приоритета/Page приоритета,
				путь на диске до процесса, свойства и прочее.
			</p>
			<Image src={props} />
			<p className='article-desc'>
				Если открыть свойства какого-либо процесса, то увидим следующую
				картину.
			</p>
			<Image src={description} />
			<p className='article-desc'>
				В трее у иконки есть детальная информация о запущенных процессах
				в текущий момент времени.
			</p>
			<Image src={tray} />
			<p className='article-desc'>
				В верхней части окна приложения распологаются главные элементы
				меню. Здесь можно получить справку, проверить наличие
				обновлений, посмотреть текущих пользователей, создать новый
				сервис (вкладка Tools), показать/скрыть элементы UI, открыть
				параметры приложения и многое другое.
			</p>
			<Image src={titleMenu} />
			<p className='article-desc'>
				Например, через вкладку View можно открыть информацию о системе
				(нагрузка CPU/GPU, расход ОЗУ, объем на диске, расход трафика
				сети).
			</p>
			<Image src={system} />
			<p className='article-desc'>
				Ниже основного меню присутствует дублирующее, которое позволяет
				с помощью курсора отыскать тот или иной процесс в системе,
				обновить дерево процессов, открыть параметры и т.д.
			</p>
			<Image src={submenu} />
			<p className='article-desc'>
				Дублирующее меню позволяет проводить поиск по ключевому имени
				процесса или названия DLL зависимости.
			</p>
			<Image src={search} />
			<p className='article-desc'>
				Вкладка Options позволяет настроить некоторые функции приложения
				(запуск при старте системы, показ предупреждений, поведение
				иконки трея и окна приложения и пр.). Но больше всего здесь
				уделено настройкам внешнего вида приложения.
			</p>
			<Image src={options} />
			<p className='article-desc'>
				Помимо вкладки Processes здесь присутствует информация о
				запущенных сервисах (службах).
			</p>
			<Image src={services} />
			<p className='article-desc'>
				Также есть данные о сетевых соединениях процессов.
			</p>
			<Image src={network} />
			<p className='article-desc'>
				Последняя вкладка описывает расположение процессов на диске
				системы.
			</p>
			<Image src={disk} />
			<p className='article-desc'>
				Также Process Hacker позволяет сделать выгрузку данных о
				процессе в файл с расширением .txt.
			</p>
			<Image src={data} />
			{/* -------------------------Pros and Cons-------------------------- */}
			<p className='article-desc'>Плюсы:</p>
			<ul className='ml-4 article-desc'>
				<li className='list-disc'>
					<p>Быстрая работа.</p>
				</li>
				<li className='list-disc'>
					<p>Простой и удобный интерфейс.</p>
				</li>
				<li className='list-disc'>
					<p>Бесплатная.</p>
				</li>
				<li className='list-disc'>
					<p>
						Можно быстро и легко найти процесс/поток или DLL
						зависимость по ключевым словам.
					</p>
				</li>
				<li className='list-disc'>
					<p>Есть возможность выгрузки данных в файл.</p>
				</li>
				<li className='list-disc'>
					<p>Есть подробная информация о процессах прямо из трея.</p>
				</li>
				<li className='list-disc'>
					<p>Поддержка более старых операционных систем.</p>
				</li>
				<li className='list-disc'>
					<p>Возможность запустить новый процесс.</p>
				</li>
			</ul>
			<p className='article-desc'>Минусы:</p>
			<ul className='ml-4 article-desc'>
				<li className='list-disc'>
					<p>
						Нет второго окна для одновременного просмотра
						дескрипторов или DLL зависимостей.
					</p>
				</li>
				<li className='list-disc'>
					<p>Поддерживается язык только английский.</p>
				</li>
			</ul>
		</>
	);
};

export default ProcessHacker;
