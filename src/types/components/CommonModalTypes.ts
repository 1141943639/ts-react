import { ModalProps } from '@arco-design/web-react';
import { ReactNode } from 'react';

export interface CommonModalPropsType extends ModalProps {
  visible: boolean;
  children: ReactNode;
  title: ReactNode;
  warnContent: ReactNode;
  className?: string;
}
