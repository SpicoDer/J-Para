function ModalHead() {
  return (
    <div className='px-4'>
      <div className='flex gap-4'>
        <div className='grid h-12 w-12 place-items-center rounded-full bg-prim-400'>
          <p>JC</p>
        </div>
        <div className='flex-grow'>
          <h2 className='text-xl font-medium capitalize'>
            john carlo sarmiento
          </h2>
          <p className='text-sm text-gray-400'>example@gmail.com</p>
          <button className='btn-prim rounded-full px-6 py-2'>
            manage account info
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalHead;
