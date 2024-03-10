
import { Modal } from 'antd';
import FormZapisUser from '../form/formZapis/FormZapisUser';

const ModalZapisi = ({ isModalOpen,setIsModalOpen, price}) => {

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<Modal title="Записаться на консультацию"
				open={isModalOpen} onCancel={handleCancel}
				footer={false}
			>
				<FormZapisUser price={price} handleCancel={handleCancel} />
			</Modal>
		</>
	);
};
export default ModalZapisi;