import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHead from './ModalHead';

function ModalSetting() {
  return (
    <div className='fixed h-screen w-screen bg-black px-4 text-white opacity-80'>
      <div className='relative top-1/2 -translate-y-1/2 space-y-4 bg-txt-dark'>
        <ModalHead />
        <ModalBody />
        <ModalFooter />
      </div>
    </div>
  );
}

export default ModalSetting;
