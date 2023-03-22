function Btn(props) {
  return (
    <div
      className={`btn mt-4 flex cursor-pointer items-center justify-center gap-2 bg-${props.color}`}
    >
      {props.children}
      <p className='capitalize'>{`${props.label}`}</p>
    </div>
  );
}

export default Btn;
