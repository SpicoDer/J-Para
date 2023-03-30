function MapBtn({ icon }) {
  return (
    <button className='grid h-12 w-12 place-items-center rounded-full bg-white'>
      <svg className='h-8 w-8 fill-prim-400'>
        <use xlinkHref={`../assets/icons.svg#${icon}`}></use>
      </svg>
    </button>
  );
}

export default MapBtn;
