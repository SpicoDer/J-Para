function ProfileIcon({ size, textSize, pad }) {
  return (
    <span
      className={`grid border border-black h-${size} ${pad} w-${size} place-items-center rounded-full ${textSize} cursor-pointer bg-prim-400 text-white`}
    >
      JC
    </span>
  );
}

export default ProfileIcon;
