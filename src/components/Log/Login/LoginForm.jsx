import InputForm from '../../Ui/FormInput';
import Svg from '../../Ui/svg';
import { useNavigate } from 'react-router';

function LoginForm() {
  const navigate = useNavigate();
  return (
    <>
      <form id='sign-in' className='mb-20 space-y-4'>
        <InputForm name='email' type='email' />
        <InputForm name='password' type='password' />
        <p
          onClick={() => navigate('/forgot-password')}
          className='cursor-pointer text-center text-sm capitalize underline'
        >
          forgot password?
        </p>
      </form>
      <button type='button' form='sign-in' className='btn-prim w-full'>
        sign in
      </button>
      <button className='btn-sec flex w-full items-center justify-center gap-2'>
        <Svg icon='google' />
        <p>sign in with google</p>
      </button>
    </>
  );
}

export default LoginForm;
