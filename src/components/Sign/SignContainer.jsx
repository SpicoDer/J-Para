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
    <div className='h-screen'>
      {/* Container */}
      <div className='grid h-full gap-4 p-2 md:grid-cols-2'>
        {/* Map */}
        <div id='map' className='hidden bg-black md:block'></div>
        {/* Content */}
        <div>
          <div className='relative top-1/2 mx-auto max-w-md -translate-y-1/2  p-4'>
            {/* Head */}
            <div className='p-12'>
              <SignLogo />
            </div>
            {/* Body */}
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignContainer;
