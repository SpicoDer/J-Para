function FormInput(props) {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={props.type} className='text-sm capitalize'>
        {`${props.type}`}
      </label>
      <input
        type={props.type}
        name={props.type}
        className='border border-txt-light px-4 py-2 focus:outline-prim-400 '
        required
      />
    </div>
  );
}

export default FormInput;
