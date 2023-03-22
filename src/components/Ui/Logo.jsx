function Logo() {
  return (
    <a href='/sign-in' className='flex items-center justify-center'>
      <img
        src='../../assets/logo.svg'
        alt='logo'
        className='relative bottom-1 h-12 w-12'
      />
      <h1 className='text-center text-5xl font-bold text-prim-400'>PaRA</h1>
    </a>
  );
}

export default Logo;
