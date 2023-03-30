function ProfileIcon({ size, textSize }) {
  return (
    <span
      className={`grid h-${size} w-${size} place-items-center rounded-full ${textSize} cursor-pointer bg-prim-400 text-white`}
    >
      JC
    </span>
  );
}

export default ProfileIcon;
