/**
 * Renders a form input with the given props.
 *
 * @param {Object} props - The required props for the form input.
 * @param {string} name - The name of the input.
 * @param {string} type - The type of the input (e.g. 'text', 'email').
 *
 * @returns {React.ReactElement} The rendered form input component.
 */

function FormInput({ name, type }) {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name} className='text-sm capitalize'>
        {`${name}`}
      </label>
      <input
        type={type}
        name={name}
        className='border border-txt-light px-4 py-2 focus:outline-prim-400 '
        required
      />
    </div>
  );
}

export default FormInput;
