import { useNavigate } from 'react-router';
import FormInput from '../../Utils/FormInput';

function ForgotPassForm() {
  const navigate = useNavigate();

  return (
    <>
      <form id='forgot-password' className='mb-20 space-y-4'>
        <FormInput name='email' type='email' />
      </form>
      <button type='button' className='btn-prim w-full'>
        reset password
      </button>
      <button
        onClick={() => navigate('/sign-in')}
        className='btn-sec flex w-full items-center justify-center gap-2'
      >
        <span className='text-[1.5rem]'>&#8592;</span>
        <p>back to sign in</p>
      </button>
    </>
  );
}

export default ForgotPassForm;
