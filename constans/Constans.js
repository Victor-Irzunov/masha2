import infertility from '../public/images/imgSection/infertility.webp'
import family from '../public/images/imgSection/family.webp'
import child from '../public/images/imgSection/child.webp'
import woman from '../public/images/imgSection/woman.webp'
import clinik from '../public/images/imgSection/clinik.webp'
import depression from '../public/images/imgSection/depression.webp'
import { HomeOutlined } from '@ant-design/icons'

export const itemsSection = [
	{
		id: 1,
		img: infertility,
		nav: '#бесплодие',
		title: 'Не могу забеременеть',
		content: 'Нет больше сил и нужна помощь?',
		link: '/uslugi/besplodie',
		navId: 'besplodie'
	},
	{
		id: 2,
		img: family,
		nav: '#семейные проблемы',
		title: 'Проблемы в семейных отношениях',
		content: 'Нужна помощь специалиста?',
		link: '/uslugi/semeinii-psikholog',
		navId: 'semeiya',
	},
	{
		id: 3,
		img: child,
		nav: '#проблемы у подростка',
		title: 'Проблемы у подростка',
		content: 'Не знаете что дальше делать и вам нужна помощь?',
		link: '/uslugi/psikholog-dlya-podrostka',
		navId: 'podrostok',
	},
	{
		id: 4,
		img: woman,
		nav: '#женский психолог',
		title: 'Проблемы у женщины',
		content: 'Вы уcтали и нет больше сил?',
		link: '/uslugi/zhenskii-psikholog',
		navId: 'zhenskij',
	},
	{
		id: 5,
		img: clinik,
		nav: '#клинический психолог',
		title: 'Клинический психолог',
		content: 'Трудно понять проблема со здоровьем или с психологическим состоянием',
		link: '/uslugi/klinicheskij-psikholog',
		navId: 'klinicheskij',
	},
	{
		id: 6,
		img: depression,
		nav: '#депрессия',
		title: 'Депрессия',
		content: 'У Вас угнетённое, подавленное, тоскливое, тревожное, боязливое или безразличное — настроение и снижение или утрата способности получать удовольствие?',
		link: '/uslugi/lechenie-depressii',
		navId: 'depressiya',
	},
]

export const textCollapse = [
	{
		key: 1,
		label: 'Кто такой психолог?',
		children: `Психолог - это специалист, который изучает человеческую психику и поведение. Основная задача психолога - помочь людям решить их психологические проблемы и улучшить качество жизни.

		Психолог может работать в разных областях:
		
		Клинический психолог помогает людям, у которых есть психические расстройства, например, депрессия, тревожные состояния. Он проводит психотерапию.
		Детский психолог работает с проблемами в развитии, обучении и поведении детей.
		Психолог-консультант консультирует людей по разным вопросам - семейным отношениям, кризисам, стрессам. Помогает найти решения и ведет к позитивным изменениям.
		Организационный психолог анализирует поведение сотрудников в компаниях, создает благоприятный психологический климат.
		Все психологи имеют специальное образование. Они умеют слушать, анализировать и находить оптимальные решения для каждого человека. Их работа направлена на то, чтобы помочь людям жить счастливее.`,
	},
	{
		key: 2,
		label: 'Кто такой клинический психолог?',
		children: `Клинический психолог – это специалист, который помогает людям, у которых есть эмоциональные или психологические проблемы. Он работает как детектив, исследуя, почему люди чувствуют себя так, как чувствуют, и почему ведут себя так, как ведут. Клинический психолог слушает людей, чтобы понять, что их беспокоит, и затем помогает им найти способы справляться с этими проблемами. Он может давать рекомендации, учить методам расслабления и давать инструменты для улучшения психического состояния. В общем, клинический психолог помогает людям стать более счастливыми и находить путь к психическому благополучию.`,
	},
	// {
	// 	key: 3,
	// 	label: 'В чем разница между психологом и клиническим психологом?',
	// 	children: `Психолог – это как детектив, который изучает, как работает наш мозг и почему мы ведем себя так, как ведем. Он интересуется, как мы чувствуем себя, думаем и общаемся.
	// 	Клинический психолог – это специальный вид психолога, который помогает людям, которые испытывают трудности в своих эмоциях и поведении. Он работает как доктор для психического здоровья, помогая тем, кто чувствует себя грустно, тревожно или неуравновешенно. Клинический психолог помогает таким людям найти способы улучшить свое психическое состояние и научиться лучше справляться с жизненными трудностями.`,
	// },
	{
		key: 3,
		label: 'Чем занимается психолог?',
		children: <div className=''>
			<h3>
				Вот короткое и понятное объяснение того, чем занимается психолог:
			</h3>
			<ul>
				<li>
					Изучает особенности человеческой психики и поведения
				</li>
				<li>
					Проводит тесты и опросы, чтобы выявить проблемы
				</li>
				<li>
					Анализирует мысли, эмоции, поступки людей
				</li>
				<li>
					Консультирует по личным, семейным и рабочим вопросам
				</li>
				<li>
					Помогает преодолеть стресс, тревогу, депрессию
				</li>
				<li>
					Лечит психологическими методами (психотерапия)
				</li>
				<li>
					Развивает навыки и способности
				</li>
				<li>
					Улучшает отношения в семье и коллективе
				</li>
				<li>
					Создаёт условия для гармоничного развития личности
				</li>
				<li>
					Проводит тренинги личностного роста
				</li>
				<li>
					Предотвращает и преодолевает психологические проблемы
				</li>
				<li>
					Помогает адаптироваться к трудным жизненным ситуациям
				</li>
			</ul>
			<p>
				В целом психолог помогает людям решать проблемы и жить счастливее.
			</p>
		</div>,
	},
	{
		key: 4,
		label: 'С чем можно обратиться к психологу?',
		children: <div className=''>
			<p>Вы можете обратиться к психологу по разным вопросам:</p>
			<ul>
				<li>
					Эмоциональное состояние: Если вы чувствуете грусть, тревогу, страх или другие неприятные эмоции, психолог поможет вам разобраться и справиться с ними.
				</li>
				<li>
					Отношения: Если у вас есть трудности в отношениях с другими людьми – в семье, с друзьями или коллегами, психолог может помочь вам разрешить конфликты и улучшить общение.
				</li>
				<li>
					Стресс и адаптация: Психолог поможет вам справиться со стрессом, связанным с изменениями в жизни, например, переездом, потерей работы или другими событиями.
				</li>
				<li>
					Самооценка: Если у вас низкая самооценка или проблемы с уверенностью в себе, психолог может помочь вам почувствовать себя более уверенно.
				</li>
				<li>
					Психосоматические проблемы: Это физические проблемы, вызванные стрессом и эмоциональными состояниями. Психолог может помочь разобраться в их причинах.
				</li>
				<li>
					Личное развитие: Если вы хотите лучше понять себя, свои цели и желания, психолог может помочь вам на этом пути.
				</li>
				<li>
					Психологическая поддержка: Временами все нуждаются в комфортной обстановке, чтобы выговориться и получить поддержку. Психолог может стать таким собеседником.
				</li>
				<p>
					Важно помнить, что обращение к психологу – это нормально, и это может помочь вам справиться с разными жизненными ситуациями и чувствами.
				</p>
			</ul>
		</div>,
	},
	{
		key: 5,
		label: 'В чем разница между психологом и психиатром?',
		children: <div>
			
			<ul>
				<li>
					Психолог имеет психологическое образование, психиатр - медицинское.
				</li>
				<li>
					Психолог занимается изучением психики и поведения человека. Психиатр - диагностикой и лечением психических заболеваний.
				</li>
				<li>
					Психолог проводит психодиагностику, консультирование, психотерапию. Психиатр назначает медикаментозное лечение, госпитализацию.
				</li>
				<li>
					К психологу обращаются за помощью при проблемах личностного характера. К психиатру направляют пациентов с явными признаками психического расстройства.
				</li>
				<li>
					Психолог работает с психически здоровыми людьми, у которых могут быть временные проблемы. Психиатр лечит тех, у кого есть хронические психические заболевания.
				</li>
				<li>
					Цель психолога - гармонизация личности, повышение устойчивости к стрессам. Психиатр направлен на биологическое лечение расстройств.
				</li>
				<li>
					Психолог не имеет права выписывать лекарства и ставить психиатрические диагнозы. Психиатр может это делать.
				</li>
			</ul>
			<p>
				Таким образом, психолог и психиатр работают в тесной взаимосвязи, но их роли, компетенции и методы отличаются. Они дополняют друг друга.
			</p>
		</div>,
	},
	{
		key: 6,
		label: 'Кто такой перинатальный психолог?',
		children: <div className=''>
			<p className='mb-3'>
				Перинатальный психолог помогает женщинам и семьям справляться с разнообразными эмоциональными и психологическими аспектами, связанными с материнством и родительством. Он может:
			</p>
			<ul>
				<li>
					Помогать будущим родителям справляться с эмоциональными изменениями во время беременности, связанными с ожиданием и подготовкой к родам.
				</li>
				<li>
					Оказывать поддержку женщинам, проходящим через сложности в беременности, например, в случае осложнений или потери ребенка.
				</li>
				<li>
					Помогать решать эмоциональные и психологические вопросы, связанные с процессом родов, такие как тревога, страхи, неуверенность.
				</li>
				<li>
					Поддерживать женщин и их партнеров в адаптации к новой роли родителей после рождения ребенка.
				</li>
				<li>
					Работать с женщинами, сталкивающимися с постпартумной депрессией, тревожностью или другими эмоциональными проблемами после родов.
				</li>
			</ul>
			<p className='mt-6'>
				Перинатальный психолог помогает создать психологически благоприятную среду для будущих и новых родителей, что способствует более гармоничному переживанию этого важного периода в жизни.
			</p>
		</div>,
	},
	{
		key: 7,
		label: 'Сколько длится консультация?',
		children: <div className=''>
			<p className='mb-3'>
				- продолжительность индивидуальной консультации - 60 минут
			</p>
			<p className='mb-3'>
				- продолжительность парной консультации - 90 минут
			</p>
		</div>,
	},
	{
		key: 8,
		label: 'Сколько нужно консультаций?',
		children: <div className=''>
			<p className='mb-3'>
				Количество и частота встреч согласуется с клиентом и подбирается индивидуально в зависимости от разных факторов. Кому-то достаточно одной консультации, кому-то необходим курс еженедельных встреч.
			</p>
		</div>,
	},
	{
		key: 9,
		label: 'Вы только перинатальный психолог?',
		children: <div className=''>
			<p className='mb-3'>
				Я Клинический Психолог, поэтому работаю с разными запросами, которые касаются не только околородового периода. Специализация в Перинатальной Психологии даёт любому психологу возможность понять- с чего история человека начинается.
			</p>
		</div>,
	},
	{
		key: 10,
		label: ' С какими запросами можно обратиться к вам?',
		children: <div className=''>
			<ul className=''>
				<li className='mb-2'>
					1. Семейные и любовные отношения
				</li>
				<li className='mb-2'>
					2. Тревожные расстройства
				</li>
				<li className='mb-2'>
					3. Стрессы, депрессия, апатия, страхи и фобии
				</li>
				<li className='mb-2'>
					4. Саморазвитие и самопознание
				</li>
				<li className='mb-2'>
					5. Ревность, измена
				</li>
				<li className='mb-2'>
					6. Постановка цели и поиск смыслов ЖИЗНИ
				</li>
				<li className='mb-2'>
					7. Потери и горечь утраты
				</li>
				<li className='mb-2'>
					8. Психологическое мужское и женское бесплодие/ бесплодие неясного генеза/ подготовка к ЭКО/ ВРТ/ суррогатное материнство/ донорские клетки
				</li>
				<li className='mb-2'>
					9. Беременность/ послеродовая адаптация
				</li>
				<li className='mb-2'>
					10. Послеродовая депрессия
				</li>
			</ul>
		</div>,
	},
]

export const navBar = [

	{
		link: '/',
		label: (<HomeOutlined className='text-xl' />),
		key: 0
	},
	{
		link: '/uslugi',
		label: 'мои услуги',
		key: 2
	},

	{
		link: '/stoimost-psihologa',
		label: 'стоимость',
		key: 3
	},

	{
		link: '/blog',
		label: 'мои статьи',
		key: 4
	},
	{
		link: '/smi',
		label: 'я в СМИ',
		key: 5
	},
	{
		link: '/psiholog-mariya-irzunova',
		label: 'обо мне',
		key: 6
	},
	{
		link: '/otzivi',
		label: 'отзывы',
		key: 7
	},
	{
		link: '/kontakti',
		label: 'контакты',
		key: 8
	},

]

