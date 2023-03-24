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
      <button type='button' className='btn-prim w-full'>
        sign up
      </button>
    </>
  );
}

export default RegisterForm;
