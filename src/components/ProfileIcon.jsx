import { getAuth } from 'firebase/auth';
import { identiconSvg } from 'https://cdn.jsdelivr.net/npm/minidenticons@3.1.2/minidenticons.min.js';

function ProfileIcon() {
  const auth = getAuth();
  const name = auth.currentUser.displayName;

  function getNameInitial(name) {
    const [first, second] = name.split(' ');
    return `${first[0]}${second[0]}`;
  }

  return (
    <div className='h-12 w-12 cursor-pointer rounded-full border border-prim-400 bg-txt-dark'>
      <identicon-svg username={getNameInitial(name)} />
    </div>
  );
}

export default ProfileIcon;
