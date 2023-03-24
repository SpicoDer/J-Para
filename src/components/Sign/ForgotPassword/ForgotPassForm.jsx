import { useNavigate } from 'react-router';
import InputForm from '../../Utils/InputForm';

function ForgotPassForm() {
  const navigate = useNavigate();

  return (
    <>
      <form id='forgot-password' className='mb-20 space-y-4'>
        <InputForm name='email' type='email' />
      </form>
      <button type='button' form='forgot-password' className='btn-prim w-full'>
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
