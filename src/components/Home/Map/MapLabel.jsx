function MapLabel({ address, timeMins }) {
  return (
    <div className='absolute bottom-2 left-4 right-4 z-10 rounded-lg bg-prim-400 p-2 py-4 text-sm text-white md:text-base lg:text-lg'>
      <p className='ml-4'>{address}</p>
      <p className='ml-4'>Estimated time: {timeMins} mins</p>
    </div>
  );
}

export default MapLabel;
