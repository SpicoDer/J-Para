import { useLocation, useNavigate } from 'react-router';

function LoginNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeLink = path =>
    location.pathname === path && 'border-b-2 border-prim-400';

  return (
    <div className='flex items-center gap-4 border-b-2 border-gray-200'>
      <span
        className={`cursor-pointer px-4 pb-2 uppercase text-txt-light ${activeLink(
          '/sign-in'
        )}`}
        onClick={() => navigate('/sign-in')}
      >
        sign in
      </span>
      <span
        className={`cursor-pointer px-4 pb-2 uppercase text-txt-light ${activeLink(
          '/sign-up'
        )}`}
        onClick={() => navigate('/sign-up')}
      >
        sign up
      </span>
    </div>
  );
}
//
export default LoginNav;
