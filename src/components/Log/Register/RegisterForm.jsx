import Btn from '../../Ui/Btn';
import FormInput from '../../Ui/FormInput';

function RegisterForm() {
  return (
    <>
      <form id='sign-up' className='mb-20 space-y-4'>
        <FormInput name='name' type='text' />
        <FormInput name='email  ' type='email' />
        <FormInput name='password' type='password' />
        {/* <FormInput name="confirm password" type="password" /> */}
      </form>
      <Btn
        type='button'
        bgColor='bg-prim-400'
        textColor='text-white'
        width='w-full'
        label='sign up'
      />
    </>
  );
}

export default RegisterForm;
