function ModalTitle() {
  return (
    <div className='flex items-center justify-center py-4'>
      <svg className='h-8 w-8 fill-white'>
        <use xlinkHref={`../../assets/icons.svg#close`}></use>
      </svg>
      <h1 className='flex-grow text-center text-2xl'>PaRA</h1>
    </div>
  );
}

export default ModalTitle;
