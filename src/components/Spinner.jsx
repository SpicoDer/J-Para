import { ImSpinner2 } from 'react-icons/im';

function Spinner() {
  return (
    <>
      <div className='grid h-full w-full place-items-center bg-white'>
        <div className='space-y-4'>
          <ImSpinner2 className='mx-auto h-20 w-20 animate-spin text-prim-400' />
          <p className='text-lg text-txt-light'>Loading...</p>
        </div>
      </div>
    </>
  );
}

export default Spinner;
