import { useState } from 'react';

function ToggleBtn({ id, label, alertState }) {
  const [isChecked, setIsChecked] = useState(alertState.alert);
  alertState.alert = isChecked;
  alertState.setAlert = setIsChecked;

  return (
    <div className='my-4'>
      <label htmlFor={id} className='flex cursor-pointer items-center'>
        <div className='relative'>
          <input
            checked={isChecked}
            type='checkbox'
            id={id}
            className='peer sr-only'
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div className='h-8 w-14 rounded-full bg-gray-600 peer-checked:bg-prim-400'></div>
          <div className='absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-full'></div>
        </div>
        <div className='ml-6 font-medium capitalize text-white'>{label}</div>
      </label>
    </div>
  );
}

export default ToggleBtn;
