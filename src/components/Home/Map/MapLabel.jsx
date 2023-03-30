function MapLabel({ address, timeMins }) {
  return (
    <div className='absolute bottom-2 left-4 right-4 z-10 rounded-lg bg-prim-400 p-2 text-center text-sm text-white'>
      <p>{address}</p>
      <p>Estimated time: {timeMins} mins</p>
    </div>
  );
}

export default MapLabel;
