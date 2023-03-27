function ToggleBtn(props) {
  return (
    <div className='my-4'>
      <label htmlFor={props.id} className='flex cursor-pointer items-center'>
        <div className='relative'>
          <input type='checkbox' id={props.id} className='peer sr-only' />
          <div className='h-8 w-14 rounded-full bg-gray-600 peer-checked:bg-prim-400'></div>
          <div className='absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-full'></div>
        </div>
        <div className='ml-6 font-medium capitalize text-white'>
          {props.label}
        </div>
      </label>
    </div>
  );
}

export default ToggleBtn;
