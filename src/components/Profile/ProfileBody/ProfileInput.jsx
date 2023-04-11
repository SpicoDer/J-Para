function ProfileInput({ type, value }) {
  return (
    <input
      type={type}
      className='w-full border-none px-4 py-2 focus:outline-prim-400 '
      defaultValue={value}
    />
  );
}

export default ProfileInput;
