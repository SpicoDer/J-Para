import LogContainer from '../LogContainer.jsx';
import ForgotPassForm from './ForgotPassForm';

function ForgotPass() {
  return (
    <LogContainer>
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
    </LogContainer>
  );
}

export default ForgotPass;
