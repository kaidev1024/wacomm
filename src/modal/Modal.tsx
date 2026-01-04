import { ReactNode, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useIsMobile, CUTOFF_WIDTH_SM, ZeroFuncType } from 'waujs';
import H1 from '../html/H1';
import { CloseIcon } from '../icons';
import { Row } from '../containers';

interface ModalProps {
  isOpen?: boolean;
  onClose: ZeroFuncType;
  title: ReactNode;
  content: ReactNode;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  isCloseIconHidden?: boolean;
  style?: ModalStyleProps;
}

interface ModalStyleOverlayProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  backgroundColor?: string;
}

interface ModalStyleContentProps {
  top?: string;
  left?: string;
  transform?: string;
  border?: string;
  background?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  boxShadow?: string;
  padding?: string;
  overflow?: string;
}

export interface ModalStyleProps {
  overlay?: ModalStyleOverlayProps;
  content?: ModalStyleContentProps;
}

const defaultStyle = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  content: {
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    border: '1px solid #ccc',
    background: '#fff',
    borderRadius: '4px',
    height: 'fit-content',
    boxShadow: '3px 3px 2px grey',
    padding: '10px 15px',
    overflow: 'visible'
  }
};

const mergeModalStyles = (style: ModalStyleProps, width: number) => {
  if (!style) return defaultStyle;
  return {
    overlay: {
      ...defaultStyle.overlay,
      ...(style.overlay || {})
    },
    content: {
      width: `${width}px`,
      ...defaultStyle.content,
      ...(style.content || {})
    }
  };
};

function Modal({
  isOpen = true,
  onClose,
  title,
  content,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
  isCloseIconHidden = false,
  style = {}
}: ModalProps) {
  const isMobile = useIsMobile();
  const [width, setWidth] = useState(isMobile ? window.innerWidth : CUTOFF_WIDTH_SM);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rootEl = document.getElementById('__next') || document.getElementById('root');
      if (rootEl) {
        ReactModal.setAppElement(rootEl);
      } else {
        console.warn('No root element found for ReactModal (expected #__next or #root).');
      }
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWidth(isMobile ? window.innerWidth : CUTOFF_WIDTH_SM);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <ReactModal
      isOpen={isOpen}
      style={mergeModalStyles(style, width)}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onRequestClose={onClose}
    >
      <Row className="justify-between items-center w-full h-fit border-b border-gray-300 border-dashed pb-2 mb-2">
        {typeof title === 'string' ? <H1 label={title} /> : title}
        {!isCloseIconHidden && <CloseIcon className="right-1 text-gray-600" onClick={onClose} />}
      </Row>
      {content}
    </ReactModal>
  );
}

export default Modal;
