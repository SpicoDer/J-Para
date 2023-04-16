function ProfileInput({
  name,
  id,
  type,
  value,
  onChange,
  placeholder,
  readOnly,
}) {
  return (
    <div className='flex items-center gap-2'>
      <span className='w-16'>{name}</span>
      <input
        autoComplete='off'
        id={id}
        onChange={onChange}
        type={type}
        className='w-full border-none px-4 py-2 focus:outline-prim-400 '
        defaultValue={value}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </div>
  );
}

export default ProfileInput;
