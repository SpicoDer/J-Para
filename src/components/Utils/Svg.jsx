/**
 * A React component that renders svg element.
 *
 * @param {Object} props - The props object.
 *
 * @component
 * @return {JSX.Element} JSX element representing the svg.
 */
function Svg(props) {
  return (
    <svg className='icon'>
      <use xlinkHref={`../../assets/icons.svg#${props.icon}`}></use>
    </svg>
  );
}

export default Svg;
