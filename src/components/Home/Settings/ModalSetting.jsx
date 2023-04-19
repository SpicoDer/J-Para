import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHead from './ModalHead';
import { IoClose } from 'react-icons/io5';

function ModalSetting({ state, toggle, switchState }) {
  return (
    <div className={`${state && 'absolute inset-0 z-20 h-full'}`}>
      <div
        onClick={() => {
          toggle(!state);
        }}
        className={`${state && 'h-full w-full bg-black opacity-60'}`}
      ></div>

      <div
        className={`${
          state &&
          ' relative left-1/2 bottom-1/2 z-30 max-w-[320px] -translate-y-1/2 -translate-x-1/2 rounded-lg'
        }  space-y-6 bg-txt-dark text-white`}
      >
        <div className='flex items-center justify-center px-4 pt-4 lg:mx-32 lg:py-4 '>
          <IoClose
            className='h-8 w-8 cursor-pointer text-white lg:hidden'
            onClick={() => {
              toggle(!state);
            }}
          />
          <h1 className='flex-grow text-center text-2xl lg:text-3xl'>PaRA</h1>
        </div>
        <ModalHead />
        <ModalBody switchState={switchState} />
        <ModalFooter />
      </div>
    </div>
  );
}

export default ModalSetting;
