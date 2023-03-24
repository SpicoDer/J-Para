/**
 * Renders a form input with the given props.
 *
 * @param {Object} props - The required props for the form input.
 * @param {string} props.name - The name of the input.
 * @param {string} props.type - The type of the input (e.g. 'text', 'email').
 *
 * @returns {React.ReactElement} The rendered form input component.
 */

function FormInput(props) {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={props.name} className='text-sm capitalize'>
        {`${props.name}`}
      </label>
      <input
        type={props.type}
        name={props.name}
        className='border border-txt-light px-4 py-2 focus:outline-prim-400 '
        required
      />
    </div>
  );
}

export default FormInput;
