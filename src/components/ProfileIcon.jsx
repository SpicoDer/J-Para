import { getAuth } from 'firebase/auth';

function ProfileIcon({ size, textSize, pad }) {
  const auth = getAuth();
  const name = auth.currentUser.displayName;

  function getNameInitial(name) {
    const [first, second] = name.split(' ');
    return `${first[0]}${second[0]}`;
  }

  return (
    <span
      className={`grid border border-black h-${size} ${pad} w-${size} place-items-center rounded-full ${textSize} cursor-pointer bg-prim-400 text-white`}
    >
      {getNameInitial(name)}
    </span>
  );
}

export default ProfileIcon;
