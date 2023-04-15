function ProfileInput({ name, id, type, value, onChange, placeholder }) {
  return (
    <div className='grid grid-flow-col-dense items-center'>
      <span className='w-8'>{name}</span>
      <input
        autoComplete='off'
        id={id}
        onChange={onChange}
        type={type}
        className='w-full border-none px-4 py-2 focus:outline-prim-400 '
        defaultValue={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default ProfileInput;
