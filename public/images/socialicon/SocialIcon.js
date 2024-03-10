import { Space } from 'antd'
import Image from 'next/image';

const SocialComp = ({ isActive }) => (
	<Space size={[16, 8]} wrap>

		<a href='https://t.me/psy_irzunova' target='_blank'></a>

		<a href='https://www.instagram.com/psy_irzunova' target='_blank'>
			<Image src='/images/socialicon/instagram.svg' alt='Инстаграм психолога' width={25} height={25} />
		</a>
		<a href='https://t.me/psy_irzunova' target='_blank'>
			<Image src='/images/socialicon/telegram.svg' alt='Телеграмм психолога' width={25} height={25} />
		</a>
		<a href='viber://chat?number=%2B375298884002' target='_blank'>
			<Image src='/images/socialicon/viber.svg' alt='Вайбер психолога' width={30} height={30} />
		</a>
		<a href='http://wa.me/375298884002?text=Нужна%20консультация' target='_blank'>
			<Image src='/images/socialicon/whatsapp.svg' alt='WhatsApp психолога' width={25} height={25} />
		</a>

		{
			!isActive && (<a href='https://www.youtube.com/@psy_irzunova' target='_blank'>
				<Image src='/images/socialicon/youtube.svg' alt='Инстаграм психолога' width={30} height={30} />
			</a>
			)
		}


	</Space>
);
export default SocialComp


