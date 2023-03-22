function Svg(props) {
  return (
    <svg className='icon'>
      <use xlinkHref={`../../assets/icons.svg#${props.icon}`}></use>
    </svg>
  );
}

export default Svg;
