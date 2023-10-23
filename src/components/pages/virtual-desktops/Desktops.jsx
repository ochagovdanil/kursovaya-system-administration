import ExternalLink from '@components/ExternalLink';
import Image from '@components/Image';
import mainViewImage from '@assets/desktops-main-view.png';
import trayImage from '@assets/desktops-tray.png';
import optionsImage from '@assets/desktops-options.png';
import buttonsImage from '@assets/desktops-buttons.png';
import workspacesImage from '@assets/desktops-workspaces.png';

const Desktops = () => {
	return (
		<>
			<h1 className='article-title'>
				Desktops - приложение
				<ExternalLink href='https://learn.microsoft.com/en-us/sysinternals/downloads/desktops' />
			</h1>
			<p className='article-desc'>
				Программа Desktops была написана американскими программистами
				Марком Руссиновичем и Брюсом Когсвелом. Данное приложение
				позволяет добавить до четырех виртуальных рабочих столов,
				переключение между которыми осуществляется либо горячими
				клавишами, либо иконкой в трее.
			</p>
			<p className='article-desc'>
				Главное окно приложения имеет следующий вид:
			</p>
			<Image src={mainViewImage} />
			<p className='article-desc'>
				После запуска приложения у нас появляется иконка в трее.
				Активировав контекстное меню, появляются функции - "опции" и
				"выбрать рабочий стол".
			</p>
			<Image src={trayImage} />
			<p className='article-desc'>
				Зайдем в опции приложения. И видим основные настройки данной
				программы и небольшое описание (инструкция по работе).
			</p>
			<Image src={optionsImage} />
			<p className='article-desc'>
				Снизу присутствует опция "Запускать автоматически при входе в
				аккаунт". Данная функция запускает приложение в трее
				автоматически, когда пользователь зашел в аккаунт Windows.
			</p>
			<p className='article-desc'>
				По середине видим опции по настройке горячих клавиш для
				переключения между рабочими столами. Слева - опции для горячей
				клавиши, которая будет активировать переключение столов. Справа
				- вторая клавиша для выбора того или иного рабочего стола.
				Применим возможность переключения рабочих столов клавишей ctrl и
				клавишами f1, f2, f3, f4 для 1, 2, 3 и 4 столов соответственно.
			</p>
			<Image src={buttonsImage} />
			<p className='article-desc'>
				Воспользуемся опцией в трее "Выбрать рабочий стол", либо просто
				кликнем по иконке в трее и увидим все рабочие виртуальные окна.
				Чтобы добавить новый рабочий стол, необходимо нажать кнопку
				"Нажмите, чтобы создать рабочий стол N".
			</p>
			<Image src={workspacesImage} />
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
						Рабочие столы создаются путем создания специального
						объекта в Windows для каждого профиля. Следовательно,
						все приложения в каждом рабочем столе связаны
						исключительно с этим объектом (рабочим столом). Отсюда
						вытекает особенность, что данная программа действительно
						эмулирует виртуальный рабочий стол, а не просто
						сворачивает запущенные приложения.
					</p>
				</li>
				<li className='list-disc'>
					<p>Бесплатная.</p>
				</li>
				<li className='list-disc'>
					<p>
						Не заходя в рабочий стол, можно видеть превью запущенных
						приложений.
					</p>
				</li>
				<li className='list-disc'>
					<p>
						Присутствуют горячие клавиши для смены рабочего стола.
					</p>
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
					<p>
						Нельзя закрыть рабочий стол и саму программу в целом.
						Для этого необходим выход из аккаунта Windows.
					</p>
				</li>
				<li className='list-disc'>
					<p>
						Нет возможности перетащить приложение из одного рабочего
						стола в другой.
					</p>
				</li>
			</ul>
		</>
	);
};

export default Desktops;
