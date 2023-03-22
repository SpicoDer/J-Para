import FormBtn from '../../Form/FormBtn.jsx';
import InputForm from '../../Form/FormInput';
import Btn from '../../Ui/Btn.jsx';
import Svg from '../../Ui/svg';

function LoginForm() {
  return (
    <>
      <form id='sign-in' className='mb-20 space-y-4'>
        <InputForm type='email' />
        <InputForm type='password' />
        <p className='cursor-pointer text-center text-sm capitalize underline'>
          forgot password?
        </p>
      </form>
      <FormBtn label='sign in' form='sign-in' />
      <Btn label='sign in with google' color='gray-100'>
        <Svg icon='google' />
      </Btn>
    </>
  );
}

export default LoginForm;
