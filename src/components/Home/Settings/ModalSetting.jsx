import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHead from './ModalHead';

function ModalSetting({ state, toggle }) {
  return (
    state && (
      <div className='absolute inset-0 h-screen w-screen'>
        <div
          onClick={() => {
            toggle(!state);
          }}
          className='z-20 h-full w-full bg-black opacity-40'
        ></div>
        <div className='relative left-1/2 bottom-1/2 z-30 w-9/12 -translate-y-1/2 -translate-x-1/2 space-y-6 rounded-lg bg-txt-dark text-white'>
          <div className='flex items-center justify-center px-4 pt-4'>
            <svg
              className='h-8 w-8 fill-white'
              onClick={() => {
                toggle(!state);
              }}
            >
              <use xlinkHref={`../../assets/icons.svg#close`}></use>
            </svg>
            <h1 className='flex-grow text-center text-2xl'>PaRA</h1>
          </div>
          <ModalHead />
          <ModalBody />
          <ModalFooter />
        </div>
      </div>
    )
  );
}

export default ModalSetting;
