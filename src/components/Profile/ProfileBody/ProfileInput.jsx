function ProfileInput({ name, id, type, value, onChange, placeholder }) {
  return (
    <div className='flex items-center gap-2'>
      <span className='w-24'>{name}</span>
      <input
        autoComplete='off'
        id={id}
        onChange={onChange}
        type={type}
        className='w-full border-2 border-gray-200 px-4 py-2 focus:outline-prim-400 '
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default ProfileInput;
