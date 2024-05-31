"use client"
import { motion } from "framer-motion"
import { titleAnimation2, titleAnimation } from '../../constans/animation/AnimationConst'
import SocialComp from '../../public/images/socialicon/SocialIcon'
import { EnvironmentTwoTone, PhoneTwoTone } from '@ant-design/icons'
import BtnCompZapis from '../../components/btn/BtnCompZapis';
import { Button } from "antd"

const ContactPage = () => {
	return (
		<section className='pt-10'>

			<motion.div
				initial="hidden"
				whileInView="visible"
				className='sd:px-10 xy:px-5'
			>
				<motion.h1
					className='sd:text-8xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
					variants={titleAnimation2}
				>
					Контакты психолога в Минске
				</motion.h1>
				<motion.h2
					className='text-white sd:text-4xl xy:text-2xl font-bold mt-10'
					variants={titleAnimation}
				>
					Ирзунова Мария Георгиевна
				</motion.h2>
			</motion.div>

			<div className='sd:mt-32 xy:mt-12'>

				<div className='sd:px-10 xy:px-5 flex flex-wrap'>
					<div className='sd:mr-10 xy:mr-0 xy:mb-10 sd:mb-0'>
						<p className='text-xl'>Адрес кабинета в Минске</p>
						<p className='font-light'><EnvironmentTwoTone twoToneColor="#52c41a" className='text-lg mr-2' /> г. Минск, ул. Франциска Скорины, 15</p>
						<p className='text-sm text-gray-600 font-light'>Первомайский район, ст.метро «Восток»</p>
						<p className='text-sm text-gray-600 font-light'>возле Национальной библиотеки</p>
					</div>

					<div className=''>
						<p className='text-xl'>Контактный телефон</p>
						<p className='font-light'><PhoneTwoTone twoToneColor="#52c41a" className='text-lg mr-2' /> +375 (29) 888-40-02</p>
					</div>
				</div>
				<div className='sd:px-10 xy:px-5 mt-10'>

					<Button className=''>
						<BtnCompZapis conclusion />
					</Button>
				</div>
				<div className='sd:px-10 xy:px-5 mt-10'>
					<SocialComp />
				</div>


				<div className='mt-20'>
				<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abea11599e2a3ce46e34ad4a47208ac9e8046b164c7bd758345bc6e56758878ba&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
				</div>
			</div>
		</section>
	)
}
export default ContactPage