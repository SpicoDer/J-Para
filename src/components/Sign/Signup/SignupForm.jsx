import InputForm from '../../Utils/InputForm.jsx';

function SignupForm() {
  return (
    <>
      <form id='sign-up' className='mb-20 space-y-4'>
        <InputForm name='name' type='text' />
        <InputForm name='email  ' type='email' />
        <InputForm name='password' type='password' />
        {/* <InputForm name="confirm password" type="password" /> */}
      </form>
      <button type='button' form='sign-up' className='btn-prim w-full'>
        sign up
      </button>
    </>
  );
}

export default SignupForm;
