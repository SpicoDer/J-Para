import InputForm from '../../Ui/FormInput';
import Btn from '../../Ui/Btn.jsx';
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
      <Btn
        type='button'
        label='sign in'
        bgColor='bg-prim-400'
        textColor='text-white'
        width='w-full'
      />
      <Btn label='sign in with google' width='w-full' bgColor='bg-gray-100'>
        <Svg icon='google' />
      </Btn>
    </>
  );
}

export default LoginForm;
