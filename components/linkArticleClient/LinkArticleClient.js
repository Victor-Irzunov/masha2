"use client"
import { transliterate } from '../../transliterate/transliterate';
import moment from 'moment';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import Link from 'next/link';
import '../../node_modules/moment/locale/ru'
import dataArticles from '../../constans/Articles/dataArticle'


moment.locale('ru');

const LinkArticleClient = ({ extraArticles }) => {

	const data = dataArticles.filter((article) => article.group === extraArticles);
	return (
		<>
			{
				Object.keys(data).length ?
					<div
						className='w-1/2 text-[#191c1d] flex flex-col justify-start items-start sd:mt-0 xy:mt-6'
					>
						<p className='sd:text-lg xy:text-sm uppercase mb-2'>
							Статьи по теме
						</p>
						<ul className='font-light sd:text-base xy:text-xs'>
							{data.map(el => {
								return (
									<li className='mb-1' key={el.id}
										onClick={() => countPlusOne(el.id)}
									>
										<Link href={{ pathname: `/blog/${el.link}/` }}
											className='underline'
										>
											{el.title}
										</Link>
										<div className='flex 
									justify-start 
									items-center
									text-[10px]
									text-gray-700
									leading-4
				 '>
											<div className='mr-3'>
												<EditOutlined />
												<span className='ml-1'>
													{moment(el.dateTime).format('LLL')}
												</span>
											</div>
											<div>
												<EyeOutlined />
												<span className='ml-1'>
													{el.view}
												</span>
											</div>
										</div>
									</li>
								)
							})}
						</ul>
					</div>
					:
					null
			}
		</>
	)
}

export default LinkArticleClient;