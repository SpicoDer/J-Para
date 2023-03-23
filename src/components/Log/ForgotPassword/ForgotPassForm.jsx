import { useNavigate } from 'react-router';
import Btn from '../../Ui/Btn';
import FormInput from '../../Ui/FormInput';

function ForgotPassForm() {
  const navigate = useNavigate();

  return (
    <>
      <form id='forgot-password' className='mb-20 space-y-4'>
        <FormInput name='email' type='email' />
      </form>
      <Btn
        label='reset password'
        bgColor='bg-prim-400'
        textColor='text-white'
        width='w-full'
        type='button'
      />
      <div onClick={() => navigate('/sign-in')}>
        <Btn label='back to sign in' bgColor='bg-gray-100' width='w-full'>
          <span className='text-[1.5rem]'>&#8592;</span>
        </Btn>
      </div>
    </>
  );
}

export default ForgotPassForm;
