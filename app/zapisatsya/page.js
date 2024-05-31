"use client"
import Image from 'next/image'
import FormZapisUser from '../../components/form/formZapis/FormZapisUser';
import { Link as LinkScroll } from 'react-scroll'


// export const metadata = {
// 	title: 'Записаться к психологу: Консультации в Минске',
// 	description: 'Записаться на консультацию к психологу в Минске. Профессиональная помощь и поддержка в решении личных проблем и трудностей.',
// 	alternates: {
// 		canonical: 'https://irzunova.by/zapisatsya',
// 	},
// 	og: {
// 		title: 'Записаться к психологу: Консультации в Минске',
// 		description: 'Записаться на консультацию к психологу в Минске. Профессиональная помощь и поддержка в решении личных проблем и трудностей.',
// 		type: 'website',
// 		url: 'https://irzunova.by/zapisatsya',
// 		image: '/images/main/main.webp',
// 	},
// };



const page = () => {
	return (
		<section className='pt-10 xyy:pb-16 sd:pb-0'>
			<div className='sd:px-10 xyy:px-5'>
				<div className=' sd:pl-5 xyy:pl-0' id='zapis'>
					<h1 className='sd:text-7xl xyy:text-4xl text-[#191c1d] font-extrabold uppercase'>
						Записаться к психологу
					</h1>
					<p className='mt-8'>
						Заполните форму ниже, чтобы записаться на консультацию. Предлагаем два формата консультации: в кабинете (оффлайн) и онлайн.
					</p>

				</div>

				<div className='mt-10 sd:pl-10 xyy:pl-4'>
					<FormZapisUser />
				</div>


				<article className='mt-20'>
					<h2 className='font-bold sd:text-3xl xyy:text-2xl'>
						Записаться к психологу в Минске: Путь к психологическому здоровью
					</h2>
					<div className='sd:text-base xyy:text-sm text-justify'>
						<p className='mt-6'>
							Жизнь часто бросает нам вызовы, с которыми бывает трудно справиться в одиночку. Неизбежные стрессы, тревога, депрессия или проблемы в отношениях могут оказать негативное влияние на наше эмоциональное и психическое состояние. В таких моментах важно помнить, что есть профессионалы, готовые помочь нам разобраться с нашими эмоциями, найти решения и двигаться дальше. Запись на консультацию к психологу - это первый и важный шаг на пути к психологическому благополучию.
						</p>
						<h3 className='font-semibold sd:text-2xl xyy:text-xl mt-7'>
							Зачем записываться к психологу?
						</h3>
						<p className='mt-5'>
							Психологическая консультация - это возможность обратиться к опытному специалисту, который поможет вам разобраться в вашем внутреннем мире, выявить причины негативных эмоций и научиться справляться с ними. Не оставляйте свои проблемы без внимания, ведь решение начинается с осознания их существования.
						</p>
						<h4 className='mt-4 mb-3 font-semibold'>
							Записаться на консультацию к психологу особенно важно в следующих случаях:
						</h4>
						<ul className='mt-2'>
							<li className='mb-3'>
								<span className='font-bold'>
									Стресс и Тревога:
								</span>{' '}
								Будь то связанные с работой, семейные, или личные проблемы, поиск поддержки и понимания в стрессовых ситуациях может помочь справиться с тревожными мыслями и чувствами неуверенности.
							</li>
							<li className='mb-3'>
								<span className='font-bold'>
									Депрессия и Печаль:
								</span>{' '}
								Потеря интереса к жизни, постоянное чувство уныния и грусти могут сказываться на нашем самочувствии и качестве жизни. Психолог поможет вам найти пути к восстановлению радости и удовлетворения.
							</li>
							<li className='mb-3'>
								<span className='font-bold'>
									Проблемы в Отношениях:
								</span>{' '}
								Конфликты с партнером, детьми, или коллегами могут оказывать серьезное влияние на наше эмоциональное состояние. Психологическая консультация поможет вам наладить отношения и научиться эффективно решать конфликты.
							</li>
							<li className='mb-3'>
								<span className='font-bold'>
									Самопознание и Личностный Рост:
								</span>{' '}
								Работа с психологом не только помогает решать текущие проблемы, но и способствует развитию личности, помогая понять себя лучше, раскрыть свой потенциал и достичь желаемых целей.
							</li>
						</ul>

						<p className='font-semibold mt-8'>
							Не стесняйтесь обращаться за помощью, если вы чувствуете, что не справляетесь с ситуацией самостоятельно. Запись на консультацию к психологу - это забота о своем эмоциональном и психическом здоровье, первый шаг на пути к лучшей жизни.
						</p>
					</div>



				</article>
			</div >

			<div className='mt-10 relative text-white'>
				<Image src='/zapis/zapis.webp'
					alt='Записаться к психологу'
					width={1500} height={726}
				/>
				<div className='absolute top-1/2 -translate-y-1/2 right-5 flex flex-col justify-end items-end'>
					<h5 className='font-bold sd:text-3xl xyy:text-base uppercase'>
						Запишитесь <span className='sd:inline xyy:block'>на консультацию</span>
					</h5>
					<p className='mt-4 sd:text-base xyy:text-sm'>
						Обретите душевное равновесие <span className=''>и спокойствие</span>
					</p>

					<div className='sd:mt-9 xyy:mt-4'>
						<LinkScroll to='zapis' smooth={true}>
							<span className='sd:text-3xl xyy:text-lg border border-white rounded-lg sd:px-3 sd:py-2 xyy:px-1.5 xyy:py-1 cursor-pointer'>
								Записаться
							</span>
						</LinkScroll>
					</div>
				</div>

			</div>

		</section >
	)
}

export default page
