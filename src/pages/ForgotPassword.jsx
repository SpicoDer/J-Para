import SignContainer from '../components/Sign/SignContainer.jsx';
import ForgotPassForm from '../components/Sign/ForgotPassword/ForgotPassForm.jsx';

function ForgotPassword() {
  return (
    <SignContainer>
      <div>
        <h1 className='m-2 text-center text-2xl font-medium'>
          Forgot Password?
        </h1>
        <p className='text-center text-sm text-txt-light'>
          No worries we'll send you reset instructions
        </p>
      </div>
      <div className='mt-12'>
        <ForgotPassForm />
      </div>
    </SignContainer>
  );
}

export default ForgotPassword;
