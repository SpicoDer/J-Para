import ModalHead from './ModalHead';

function ModalSetting() {
  return (
    // Modal Container
    <div className='fixed h-screen w-screen bg-black px-4 text-white opacity-80'>
      {/* Modal Content*/}
      <ModalHead />
    </div>
  );
}

export default ModalSetting;
