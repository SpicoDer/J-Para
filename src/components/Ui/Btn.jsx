/**
Renders a button with the given props.
@param {Object} props - The props for the button.
@param {string} [props.bgColor] - The background color of the button (optional).
@param {string} [props.textColor] - The text color of the button (optional).
@param {string} [props.width] - The width of the button (optional).
@param {string} [props.type] - The type of the button (e.g. 'submit', optional).
@param {string} [props.label] - The label to display below the button (optional).
@param {React.ReactNode} [props.children] - The child elements to display within the button.
@returns {React.ReactElement} The rendered button component.
*/
function Btn(props) {
  return (
    <button
      className={`${props.bgColor} ${props.textColor} ${props.width} mt-4 flex cursor-pointer items-center justify-center gap-2 py-3 text-center text-sm capitalize transition hover:opacity-80`}
      type={props.type}
    >
      {props.children}
      <p className='capitalize'>{`${props.label}`}</p>
    </button>
  );
}

export default Btn;
