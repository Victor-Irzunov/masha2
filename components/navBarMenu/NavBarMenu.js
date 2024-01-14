"use client"
import { useState, useContext, useEffect } from 'react'
import avatar from '../../public/images/logo2.webp'
import { motion } from "framer-motion"
import Link from 'next/link'
import { navBar } from '../../constans/Constans'
import { MenuOutlined } from '@ant-design/icons'
import { observer } from 'mobx-react-lite'
import DrawerMenu from './drawerMenu/DrawerMenu'
import { useScreens } from '../../constans/constScreens'
import Image from 'next/image'


const linkAnimation = {
	hidden: {
		y: -100,
		opacity: 0
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.1
		}
	})
}
const imgAnimation = {
	hidden: {
		y: -100,
		opacity: 0
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.1,
			duration: 1
		}
	})
}

export const NavBarMenu = observer(() => {
	const [open, setOpen] = useState(false)
	const screens = useScreens()
	const [openMenu, setOpenMenu] = useState(false);


	const showDrawer = () => {
		setOpenMenu(true);
	};

	const showModal = () => {
		setOpen(true)
	}

	const exit = () => {
		localStorage.removeItem('token_psy')
		user.setIsAuth(false)
		user.setUser(false)
		user.setUserData({})
	}

	return (
		screens.lg ?
			<header className='w-1/5 border-r border-[#bcbdbe] overflow-hidden'>
				<nav className='bg-[#cdcecf] h-screen fixed top-0 left-0 pl-10 pr-10 pt-20 pb-2'>
					<motion.div
						initial="hidden"
						whileInView="visible"
						className='flex flex-col justify-between h-full'
					>
						<div className=''>
							<ul
								className='tracking-wider text-[#191c1d] uppercase text-sm'
							>
								{
									navBar.map(el => {

										return (
											<motion.li
												variants={linkAnimation}
												key={el.key}
												custom={el.key}
												className='mb-3'>
												<Link
													href={`${process.env.NEXT_PUBLIC_BASE_URL}${el.link}`}
													className='relative before:border-b before:border-black before:transition-all before:duration-300 before:ease-in-out before:absolute before:-bottom-1 before:h-0 hover:before:h-full before:w-0 hover:before:w-full'
												>
													{el.label}
													<span className='lowercase text-xs block'>
														{el.span && el.span}
													</span>
												</Link>
											</motion.li>
										)

									})
								}

							</ul>
						</div>
						<motion.div
							variants={imgAnimation}
							custom={16}
							className='text-center'>
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}`}>
								<Image
									src={avatar}
									className='border-lime-600 shadow-2xl rounded-full w-20 mx-auto'
									alt='Аватар психолога Ирзуновой Марии'
								/>
								<p className='uppercase font-extrabold text-xl text-[#191c1d] mb-2'>мария ирзунова</p>
								<p className='uppercase font-light text-xs text-[#191c1d] mb-2'>психолог</p>
							</Link>
						</motion.div>
					</motion.div>
				</nav>


			</header>
			:
			<header>
				<div className='fixed top-3 right-4 p-2 border z-50'>
					<MenuOutlined
						className='text-3xl'
						onClick={showDrawer}
					/>
				</div>
				<DrawerMenu
					setOpenMenu={setOpenMenu}
					openMenu={openMenu}
					exit={exit}
					showModal={showModal}
					imgAnimation={imgAnimation}
					open={open} setOpen={setOpen}
				/>
			</header>
	)
})
