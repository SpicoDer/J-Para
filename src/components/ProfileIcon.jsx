function ProfileIcon({ size, textSize, pad }) {
  return (
    <span
      className={`grid h-${size} ${pad} w-${size} place-items-center rounded-full ${textSize} cursor-pointer bg-prim-400 text-white`}
    >
      JC
    </span>
  );
}

export default ProfileIcon;
