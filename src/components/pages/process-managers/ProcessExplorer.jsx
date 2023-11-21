import ExternalLink from '@components/ExternalLink';
import Image from '@components/Image';
import mainView from '@assets/processexplorer-main-view.png';
import columns from '@assets/processexplorer-columns.png';
import overallData from '@assets/processexplorer-overall-data.png';
import contextMenu from '@assets/processexplorer-context-menu.png';
import props from '@assets/processexplorer-props.png';
import titleMenu from '@assets/processexplorer-title-menu.png';
import menu from '@assets/processexplorer-menu.png';
import search from '@assets/processexplorer-search.png';
import opacity from '@assets/processexplorer-opacity.png';
import command from '@assets/processexplorer-command.png';
import details from '@assets/processexplorer-details.png';
import dll from '@assets/processexplorer-dll.png';
import system from '@assets/processexplorer-system.png';
import data from '@assets/processexplorer-data.png';
import tray from '@assets/processexplorer-tray.png';

const ProcessExplorer = () => {
	return (
		<>
			<h1 className='article-title'>
				Process Explorer - приложение
				<ExternalLink href='https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer' />
			</h1>
			<p className='article-desc'>
				Программа Process Explorer была написана компанией Microsoft.
				Данный софт позволяет просмотреть запущенные процессы и потоки в
				ОС, узнать какие дескрипторы и процессы DLL были открыты или
				загружены той или иной программой.
			</p>
			<p className='article-desc'>
				Данная программа имеет следующий вид:
			</p>
			<Image src={mainView} />
			<p className='article-desc'>
				Process Explorer представляет дерево процессов, используя такую
				информацию как ID процесса, имя процесса, название компании,
				нагрузка CPU и пр. Кликнув правой кнопкой мыши, можно добавить
				новые свойства, которые будут отображаться у каждого процесса.
			</p>
			<Image src={columns} />
			<p className='article-desc'>
				В нижней части окна представлена краткая информация о самой
				системе.
			</p>
			<Image src={overallData} />
			<p className='article-desc'>
				У каждого процесса/потока можно вызвать контекстное меню, где
				есть следующие функции: работа с окном (закрыть, свернуть,
				перенести на главный план и пр.), установка приоритетности и
				affinity, уничтожить процесс или само дерево процесса,
				перезапустить процесс, приостановить процесс, открыть свойства и
				т.д.
			</p>
			<Image src={contextMenu} />
			<p className='article-desc'>
				Свойства процесса/потока представлены ниже.
			</p>
			<Image src={props} />
			<p className='article-desc'>
				У приложения имеется меню в верхней части экрана, которое
				позволяет совершать все те же действия, которые были описаны
				ранее. В добавок к этому здесь есть возможности вывода справки,
				просмотра пользователей системы, поиска процесса, изменение
				внешнего вида приложения и многое другое.
			</p>
			<Image src={titleMenu} />
			<p className='article-desc'>Аналогичное меню присутствует ниже.</p>
			<Image src={menu} />
			<p className='article-desc'>
				Есть возможность поиска процесса по имени или DLL.
			</p>
			<Image src={search} />
			<p className='article-desc'>
				Из настроек внешнего вида приложения можно, например, поменять
				прозрачность окна.
			</p>
			<Image src={opacity} />
			<p className='article-desc'>
				Нажав файл-{'>'}запустить, можно выполнять запуск комманд в
				Windows.
			</p>
			<Image src={command} />
			<p className='article-desc'>
				Есть возможность более детального вывода информации о системе.
			</p>
			<Image src={system} />
			<p className='article-desc'>
				Также есть возможность посмотреть детальные свойства каждого
				процесса/потока (дескрипторы).
			</p>
			<Image src={details} />
			<p className='article-desc'>
				Либо же можно посмотреть DLL зависимости.
			</p>
			<Image src={dll} />
			<p className='article-desc'>
				Данные о целом дереве процесса можно выгрузить в отдельный файл
				с расширением .txt.
			</p>
			<Image src={data} />
			<p className='article-desc'>
				В трее есть очень краткая информация о системе.
			</p>
			<Image src={tray} />
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
					<p>Есть возможность просмотра DLL зависимостей.</p>
				</li>
				<li className='list-disc'>
					<p>Бесплатная.</p>
				</li>
				<li className='list-disc'>
					<p>Удобный просмотр информации состояния системы.</p>
				</li>
				<li className='list-disc'>
					<p>Есть возможность выгрузки данных в файл.</p>
				</li>
			</ul>
			<p className='article-desc'>Минусы:</p>
			<ul className='ml-4 article-desc'>
				<li className='list-disc'>
					<p>
						На данный момент (2023 год) официально поддерживается с
						Windows 8.1+.
					</p>
				</li>
				<li className='list-disc'>
					<p>Очень мало информации доступной в трее.</p>
				</li>
				<li className='list-disc'>
					<p>Нельзя создать новый процесс.</p>
				</li>
				<li className='list-disc'>
					<p>Поддерживается язык только английский.</p>
				</li>
			</ul>
		</>
	);
};

export default ProcessExplorer;
