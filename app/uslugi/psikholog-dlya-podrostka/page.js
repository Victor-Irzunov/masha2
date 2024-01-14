import { Divider, Empty } from 'antd'
import { EyeOutlined, EditOutlined, PhoneOutlined } from '@ant-design/icons'
import { UniversalComp } from '../../../components/UniversalComp/UniversalComp'
import { useDataService } from '../../../hook/dataServiceHook'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollComp } from '../../../components/scroll/ScrollComp'
import LinkArticleClient from '../../../components/linkArticleClient/LinkArticleClient'


export const metadata = {
	title : 'Подростковый психолог в Минске | Психолог Ирзунова Мария',
	description : 'Консультация подросткового психолога в Минске по проблемам взаимоотношений со сверстниками, родителями, трудностям подросткового возраста.',
	alternates: {
		canonical: 'https://irzunova.by/uslugi/psikholog-dlya-podrostka'
  },
  og: {
	title : 'Подростковый психолог в Минске | Психолог Ирзунова Мария',
	description : 'Консультация подросткового психолога в Минске по проблемам взаимоотношений со сверстниками, родителями, трудностям подросткового возраста.',
    type: 'website',
    url: 'https://irzunova.by/uslugi/psikholog-dlya-podrostka',
    image: '/images/main/main.webp',
  },
 }


const Page = async () => {
	const { data } = await useDataService('psikholog-dlya-podrostka');


	return (
		<main className='pt-20 overflow-hidden'>
			<section>
				<div
					className='sd:px-10 xy:px-5'
				>
					<h1
						className='sd:text-6xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
					>
						{data.h1}
					</h1>
					<h2
						className='text-white sd:text-4xl xy:text-2xl font-bold'
					>
						{data.h2}
					</h2>
				</div>
				<div
					className='flex justify-between mt-28 text-[#191c1d] sd:px-10 xy:px-5 sd:flex-row xy:flex-col'
				>
					<div
						className='sd:mr-28 xy:mr-0'
					>
						<p className='text-xl text-[#191c1d] uppercase mb-8 font-semibold'>Области моей работы</p>
						<ul className='font-light sd:text-base xy:text-sm sd:tracking-wider xy:tracking-wide'>
							{
								data.myWork.map(el => {
									return (
										<li className='mb-1 hover:underline' key={el.id}>
											<ScrollComp to={el.to} label={el.label} />
											<Divider style={{ marginTop: '5px', marginBottom: '5px' }} />
										</li>
									)
								})
							}
						</ul>
					</div>

					<LinkArticleClient extraArticles='psikholog-dlya-podrostka' />
				</div>
				<div
					className='mt-12 sd:px-10 xy:px-5 flex justify-between items-center text-[#191c1d]'
				>
					<div
						className='sd:w-1/2 xy:w-full text-center'
					>
						<Image
							src={data.img.img}
							alt={data.img.alt}
							width={`50%`}
						/>
					</div>
				</div>
				<section className='mt-16'>
					<article>
						<UniversalComp data={data} />
					</article>
				</section>
				<section
					className='sd:px-10 xy:px-5'
					id={data.conclusion.id}
				>
					<h4
						className='sd:text-6xl xy:text-5xl text-white font-extrabold uppercase mb-0 pl-3'
					>
						В
					</h4>
					<h4
						className='sd:text-6xl xy:text-5xl text-[#191c1d] font-extrabold uppercase'
					>
						заключение
					</h4>
					<div
						className='mt-20 pb-10'
					>
						<div className='float-right sd:w-1/3 xy:w-full ml-6 mb-6'>
							<Image src={data.conclusion.img}
								alt={data.conclusion.alt}
								style={{
									borderRadius: '10px',
								}}
							/>
						</div>
						<p
							className='text-[#191c1d] leading-7 sd:text-base xy:text-sm'
						>
							{data.conclusion.content}
						</p>
					</div>
				</section>
				<section
					className='bg-[#191c1d] sd:px-10 xy:px-5 sd:py-10 xy:pt-2 xy:pb-5 mt-20'
				>
					<p
						className='text-white sd:text-3xl xy:text-xl font-extralight mt-12 '
					>
						{data.conclusion.content2}
					</p>
					<div
						className='flex justify-between sd:items-center xy:items-start sd:flex-row xy:flex-col mt-16'
					>
						<div className='text-white font-light'>
							<p className='mb-0'>
								Стоимость одной консультации: <span className='text-lg'>{data.price} BYN</span>
							</p>
							<p className='text-xs mb-4'>
								Продолжительность: {data.time}
							</p>
						</div>

						<Link href='/zapis-k-psikhologu' className='text-white text-[12px] uppercase'
							style={{ background: 'transparent' }}
						>
							Записаться на первую консультацию
						</Link>
					</div>
				</section>
			</section>
			<a href='tel:80298884002'>
				<div className='fixed bottom-[100px] right-3 bg-black w-16 h-16 rounded-full flex justify-center items-center'>
					<PhoneOutlined
						className='text-white
					text-3xl animate-pulse
					'
					/>
				</div>
			</a>
			<div className="fixed left-0 right-0 h-1 bg-gray-700 bottom-2" />
		</main>
	)
}
export default Page