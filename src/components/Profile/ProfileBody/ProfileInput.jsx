function ProfileInput({ icon, type, value }) {
  return (
    <div className='flex items-center gap-4'>
      <svg className='icon'>
        <use xlinkHref={`../../../assets/icons.svg#${icon}`}></use>
      </svg>
      <input
        type={type}
        className='w-full border-none px-4 py-2 focus:outline-prim-400 '
        defaultValue={value}
      />
    </div>
  );
}

export default ProfileInput;
