import { useLocation, useNavigate } from 'react-router';

/**
 * Component for the sign-in/sign-up navigation bar.
 *
 * @returns {JSX.Element} JSX element containing the navigation bar.
 */
function SignNav() {
  const location = useLocation();
  const navigate = useNavigate();

  /** * Checks if the given path is active based on the current location.
   *
   *
   *  @param {string} path - The path to check.
   * @returns {string} The active-styles for element if the path is active, or an empty string otherwise.
   */
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
export default SignNav;
