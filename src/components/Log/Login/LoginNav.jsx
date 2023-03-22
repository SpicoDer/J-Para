function LoginNav() {
  return (
    <div className='flex items-center gap-4 border-b-2 border-gray-200'>
      <span className='cursor-pointer border-b-2 border-prim-400 px-4 pb-2 uppercase text-txt-light'>
        sign in
      </span>
      <span className='cursor-pointer px-4 pb-2 uppercase text-txt-light'>
        sign up
      </span>
    </div>
  );
}

export default LoginNav;
