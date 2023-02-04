import { Alert, Modal } from '@arco-design/web-react';
import { CommonModalPropsType } from 'types/components/CommonModalTypes';
import { ReactComponent as ModalClose } from 'svg/modal_close.svg';
import { ReactComponent as ModalWarn } from 'svg/modal_warn.svg';
import './index.css';

export default function CommonModal(props: CommonModalPropsType) {
  const { visible, children, title, warnContent, className = '', ...rest } = props;

  return (
    <Modal
      className={['modal', className]}
      closeIcon={<ModalClose />}
      visible={visible}
      title={<div className="title">{title}</div>}
      {...rest}
    >
      <Alert
        className="warn"
        type="warning"
        icon={<ModalWarn />}
        content={<div className="warn-content">{warnContent}</div>}
      ></Alert>
      {children}
    </Modal>
  );
}
