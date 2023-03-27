/**

* A React component that renders a logo.
* @component
* @returns {JSX.Element} - A div element representing the profile icon.
*/
function Logo() {
  return (
    <a href='/sign-in' className='flex items-center justify-center'>
      <img
        src='../../assets/logo.svg'
        alt='logo'
        className='relative bottom-1 h-10 w-10'
      />
      <h1 className='text-center text-5xl font-bold text-prim-400'>PaRA</h1>
    </a>
  );
}

export default Logo;
