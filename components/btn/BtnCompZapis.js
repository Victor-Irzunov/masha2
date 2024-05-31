'use client'

import { useState } from "react";
import ModalZapisi from "../modalZapisi/ModalZapisi"
import { Image } from "antd";

const BtnCompZapis = ({conclusion, price}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	return (
		<>
			<div
				className={` ${conclusion ? 'text-white' : 'text-[#191c1d]'} text-[12px] uppercase flex cursor-pointer`}
				style={{ background: 'transparent' }}
				onClick={showModal}
			>
				{
					conclusion ? 'Записаться на первую консультацию': 'Записаться консультацию'
				}
				<Image src={`${conclusion ? '/images/click-white.svg': '/images/click.svg'}`}
					alt="Клик для записи"
					width={20} height={20}
					className="ml-1"
					preview={false}
				/>
			</div>

			<ModalZapisi isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} price={price} />
		</>

	)
}

export default BtnCompZapis