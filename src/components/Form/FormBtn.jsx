function FormBtn(props) {
  return (
    <button
      type='button'
      className='btn w-full bg-prim-400 text-white'
    >{`${props.label}`}</button>
  );
}

export default FormBtn;
