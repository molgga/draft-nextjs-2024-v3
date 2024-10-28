import Styles from './sample-modal.module.css';

export function SampleModalHeader(props?: {
  title?: string;
  modalClose?: () => void;
}) {
  const handleClick = () => {
    props?.modalClose?.();
  };

  return (
    <div className={Styles['header-bar']}>
      <div className={Styles['header-bar-aside']}>
        <h2>{props?.title}</h2>
      </div>
      <button onClick={handleClick} type="button">
        닫기
      </button>
    </div>
  );
}
