import jeep from '../../assets/Jeepney.webp';
import SignLogo from './SignLogo.jsx';

/**
 * A container for the sign-in, sign-up and forgot-password page with a map and content section.
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child elements to render in the content section.
 * @returns {JSX.Element} The SignContainer component.
 */

function SignContainer(props) {
  return (
    <div className='h-full p-4'>
      {/* Container */}
      <div className='grid h-full px-2 lg:grid-cols-2 lg:gap-8'>
        {/* Content */}
        <div>
          <div className='relative top-1/2 mx-auto max-w-md -translate-y-1/2'>
            {/* Head */}
            <div className='p-12 pt-8'>
              <SignLogo />
            </div>
            {/* Body */}
            {props.children}
          </div>
        </div>
        {/* BG Pic */}
        <img
          src={jeep}
          alt='Image of Jeepney'
          className='relative top-1/2 hidden -translate-y-1/2 lg:block'
        />
      </div>
    </div>
  );
}

export default SignContainer;
