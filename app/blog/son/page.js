import moment from "moment"
import '../../../node_modules/moment/locale/ru'
import Link from "next/link"
import Image from "next/image"
import dataArticles from "../../../constans/Articles/dataArticle"
moment.locale('ru');

export const metadata = {
	title: 'К чему снится вертолет? | Статья психолога  Ирзуновой Марии',
	description: 'Узнайте значение сновидений о вертолете из психологической перспективы. Расшифруем символику снов и поможем вам понять, какие эмоции они могут вызывать. Исследуйте мир подсознания через толкование сновидений с опытным психологом.',
	alternates: {
		canonical: 'https://irzunova.by/blog/son'
	},
	og: {
		title: 'К чему снится вертолет? | Статья психолога  Ирзуновой Марии',
		description: 'Узнайте значение сновидений о вертолете из психологической перспективы. Расшифруем символику снов и поможем вам понять, какие эмоции они могут вызывать. Исследуйте мир подсознания через толкование сновидений с опытным психологом.',
		type: 'website',
		url: 'https://irzunova.by/blog/son',
		image: '/articles/4.webp',
	},
}


const ArticleUniversalPage = () => {
	const data = dataArticles.find(article => article.link === 'son');

	if (!data) {
		return null;
	}


	return (
		<section className='pt-10 pb-20 overflow-hidden'>
			<div className='container mx-auto'>
				<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/`}>
					<div className="flex justify-start items-center pr-1 cursor-pointer">
						<Image src='/arrow-left.svg' alt="Кнопка возврата меню" className="invert" width={20} height={20} />
						<span className="text-black ml-2 uppercase text-xs">Назад</span>
					</div>
				</Link>
				<div

					className='sd:px-10 xy:px-5 mt-10'
				>
					<h1
						className='sd:text-6xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
					>
						{data.title}
					</h1>
					<h2
						className='text-white sd:text-4xl xy:text-2xl font-bold sd:mt-10 xy:mt-2'
					>
						{data.description}
					</h2>
				</div>
				<div className='h-20' />
				<article className="sd:px-10 xy:px-5 flex flex-col relative">
					<div>
						{data.article}
					</div>
					<div className="flex justify-between mt-10 sd:flex-row xy:flex-col sd:text-base xy:text-sm">
						<p className="font-light">Дата публикации: {moment(data.dateTime).format('LLL')}</p>
						<p className="italic font-light">Автор: Мария Ирзунова</p>
					</div>
				</article>
			</div>
		</section>
	)
}

export default ArticleUniversalPage