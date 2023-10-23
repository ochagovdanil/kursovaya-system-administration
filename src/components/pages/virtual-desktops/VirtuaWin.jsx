import ExternalLink from '@components/ExternalLink';
import Image from '@components/Image';
import mainViewImage from '@assets/virtuawin-main-view.png';
import optionsImage from '@assets/virtuawin-options.png';
import setupImage from '@assets/virtuawin-setup.png';
import hotkeysImage from '@assets/virtuawin-hotkeys.png';
import mouseImage from '@assets/virtuawin-mouse.png';
import modulesImage from '@assets/virtuawin-modules.png';
import expertImage from '@assets/virtuawin-expert.png';
import aboutImage from '@assets/virtuawin-about.png';
import rulesImage from '@assets/virtuawin-rules.png';
import moveImage from '@assets/virtuawin-move.png';
import desktopsImage from '@assets/virtuawin-desktops.png';

const VirtuaWin = () => {
	return (
		<>
			<h1 className='article-title'>
				VirtuaWin - приложение
				<ExternalLink href='https://virtuawin.sourceforge.io/' />
			</h1>
			<p className='article-desc'>
				Программа VirtuaWin была написана шведским программистом
				Джонаном Пикулелем. Данное ПО находится под лицензией GNU и
				представляет собой набор виртуальных рабочих столов
				"workspaces".
			</p>
			<p className='article-desc'>Главное окно программы:</p>
			<Image src={mainViewImage} />
			<p className='article-desc'>
				Активируем контекстное меню для иконки приложения в трее.
			</p>
			<Image src={optionsImage} />
			<p className='article-desc'>
				Откроем окно первичных настроек (Setup).
			</p>
			<Image src={setupImage} />
			<p className='article-desc'>
				Данный раздел позволяет разрешить автоматическое переключение с
				конца в начало списка рабочих столов, задать имя рабочему столу,
				настроить список действий при нажатии на иконку в трее, включить
				горячие клавиши, настроить действия мыши при клике на иконку.
			</p>
			<Image src={hotkeysImage} />
			<p className='article-desc'>
				Раздел горячие клавиши задает различные комбинации клавиш для
				работы с приложением.
			</p>
			<Image src={mouseImage} />
			<p className='article-desc'>
				Данный раздел позволяет настроить возможность перетаскивания
				мышью приложений на другие рабочие столы, добавить задержку
				перетаскивания, задействовать клик курсором.
			</p>
			<Image src={modulesImage} />
			<p className='article-desc'>
				Раздел модули отвечает за добавление плагинов в приложение.
			</p>
			<Image src={expertImage} />
			<p className='article-desc'>
				Раздел эксперт отвечает за более тонкие настройки в приложении.
				Например, ведение логов, форсированное обновление после смены
				рабочего стола, скрыть иконку в трее и прочие.
			</p>
			<Image src={aboutImage} />
			<p className='article-desc'>
				Раздел предоставляющий информацию о программе.
			</p>
			<Image src={rulesImage} />
			<p className='article-desc'>
				Windows Rules задает правила для каждого окна. Например,
				закрывать автоматически какое-либо приложение или всегда держать
				его поверх других окон.
			</p>
			<p className='article-desc'>
				Также в контекстном меню иконки трея есть справка о приложении,
				возможность деактивировать (приостановить) работу виртуальных
				окон, есть функция выхода из приложения, "Gather All" (перенести
				все приложения на текущий рабочий стол).
			</p>
			<p className='article-desc'>
				Для перехода между рабочими столами есть опция "поменять рабочий
				стол" или "выбрать следующий".
			</p>
			<Image src={moveImage} />
			<p className='article-desc'>
				Если кликнуть на иконку в трее, то увидим активные запущенные
				рабочие столы. Можем перетаскивать приложения между столами или
				закреплять какое-либо приложение для стола.
			</p>
			<Image src={desktopsImage} />
			{/* -------------------------Pros and Cons-------------------------- */}
			<p className='article-desc'>Плюсы:</p>
			<ul className='ml-4 article-desc'>
				<li className='list-disc'>
					<p>Быстрая работа.</p>
				</li>
				<li className='list-disc'>
					<p>
						Широкий функционал и возможность настроить тонкие детали
						работы приложения.
					</p>
				</li>
				<li className='list-disc'>
					<p>Бесплатная.</p>
				</li>
				<li className='list-disc'>
					<p>Есть горячие клавиши.</p>
				</li>
				<li className='list-disc'>
					<p>Присутствует возможность выхода из приложения.</p>
				</li>
				<li className='list-disc'>
					<p>
						Можно перетаскивать приложения между рабочими столами и
						закреплять их.
					</p>
				</li>
				<li className='list-disc'>
					<p>Есть поддержка различных сторонних модулей.</p>
				</li>
			</ul>
			<p className='article-desc'>Минусы:</p>
			<ul className='ml-4 article-desc'>
				<li className='list-disc'>
					<p>
						Дает возможность создавать только до 4-х рабочих столов.
					</p>
				</li>
				<li className='list-disc'>
					<p>Нельзя закрыть рабочий стол.</p>
				</li>
				<li className='list-disc'>
					<p>
						Более сложная, необходимо почитать инструкцию по
						применению.
					</p>
				</li>
				<li className='list-disc'>
					<p>Отсутствует превью рабочего стола.</p>
				</li>
				<li className='list-disc'>
					<p>
						Для расширения функционала придется устанавливать
						различные модули.
					</p>
				</li>
			</ul>
		</>
	);
};

export default VirtuaWin;
