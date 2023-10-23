import ExternalLink from '@components/ExternalLink';
import Image from '@components/Image';
import mainViewImage from '@assets/virtualdimension-main-view.png';
import optionsImage from '@assets/virtualdimension-options.png';
import desktopsImage from '@assets/virtualdimension-desktops.png';
import desktopsOptionsImage from '@assets/virtualdimension-desktops-options.png';
import aboutImage from '@assets/virtualdimension-about.png';
import settingsImage from '@assets/virtualdimension-settings.png';
import displayImage from '@assets/virtualdimension-display.png';
import desktops2Image from '@assets/virtualdimension-desktops-2.png';
import osdImage from '@assets/virtualdimension-osd.png';
import shortcutsImage from '@assets/virtualdimension-shortcuts.png';
import advancedImage from '@assets/virtualdimension-advanced.png';

const VirtualDimension = () => {
	return (
		<>
			<h1 className='article-title'>
				Virtual Dimension - приложение
				<ExternalLink href='https://virt-dimension.sourceforge.net/' />
			</h1>
			<p className='article-desc'>
				Virtual Dimension - open-source приложение, которое расширяет
				возможности обычного оконного менеджера в Windows.
			</p>
			<Image src={mainViewImage} />
			<p className='article-desc'>
				Рассмотрим иконку в трее. Контекстное меню выдает пункты о
				открытых рабочих столах (в том числе и о активном), предлагает
				информацию о программе, есть функция настройки приложения и
				выхода из него.
			</p>
			<Image src={optionsImage} />
			<p className='article-desc'>
				Сменить рабочий стол можно через контекстное меню у иконки в
				трее, либо через окно о рабочих столах.
			</p>
			<Image src={desktopsImage} />
			<p className='article-desc'>
				У этого окна можно также вызвать меню с известными нам пунктами.
				Единственное, что здесь новое, так это то, что мы можем
				заблокировать положение данного окна либо убрать заголовок.
			</p>
			<Image src={desktopsOptionsImage} />
			<p className='article-desc'>
				Информация о приложении доступна в этом окне.
			</p>
			<Image src={aboutImage} />
			<p className='article-desc'>
				Сейчас перейдем в настройки приложения. и рассмотрим пункт
				"настройки". Тут мы видим настройки подсказок, отображение
				иконки в трее, автозапуск программы и прочее.
			</p>
			<Image src={settingsImage} />
			<p className='article-desc'>
				Перейдем в настройки интерфейса и увидим возможность изменять
				цвет и прозрачность окна приложения.
			</p>
			<Image src={displayImage} />
			<p className='article-desc'>
				В разделе "рабочие столы" можно поменять цвет отображения
				рабочего стола, обои, назначить горячие клавиши, изменить
				название, цвет. А самое главное можно добавлять и удалять
				рабочие столы, менять их местами.
			</p>
			<Image src={desktops2Image} />
			<p className='article-desc'>
				Во вкладке OSD можно добавить текст-подсказку с автовыключением,
				которая будет говорить на каком рабочем столе вы сейчас
				находитесь.
			</p>
			<Image src={osdImage} />
			<p className='article-desc'>
				Во вкладке "горячие клавиши" можно назначить тем или иным
				действиям свои сочетания клавиш для более быстрой работы с
				приложением.
			</p>
			<Image src={shortcutsImage} />
			<p className='article-desc'>
				В расширенных настройках можно изменить такие параметры как
				интеграция с оболочкой и что делать с окнами, которые находятся
				на другом виртуальном рабочем столе. Помимо этого вы можете
				добавить исключения для определенных программ на эти правила.
			</p>
			<Image src={advancedImage} />
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
					<p>
						Есть все немаловажные настройки для обычного
						пользователя и нет слишком сложных.
					</p>
				</li>
				<li className='list-disc'>
					<p>Бесплатная.</p>
				</li>
				<li className='list-disc'>
					<p>
						Присутствуют горячие клавиши для смены рабочего стола.
					</p>
				</li>
				<li className='list-disc'>
					<p>
						Есть возможность удалять определенные виртуальные
						рабочие столы.
					</p>
				</li>
				<li className='list-disc'>
					<p>Количество рабочих столов неограниченно.</p>
				</li>
				<li className='list-disc'>
					<p>
						Можно самим решить что делать с окнами, которые
						находятся "вне" нашего рабочего стола.
					</p>
				</li>
			</ul>
			<p className='article-desc'>Минусы:</p>
			<ul className='ml-4 article-desc'>
				<li className='list-disc'>
					<p>
						Нет возможности перетащить приложение из одного рабочего
						стола в другой.
					</p>
				</li>
				<li className='list-disc'>
					<p>
						Нет превью рабочего стола, только список запущенных
						приложений.
					</p>
				</li>
			</ul>
		</>
	);
};

export default VirtualDimension;
