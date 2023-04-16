import { useNavigate } from 'react-router';
import InputForm from '../InputForm.jsx';
import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { BsArrowLeft } from 'react-icons/bs';
import { toast } from 'react-toastify';

/**

A component for the Forgot Password form.
@returns {JSX.Element} JSX Element that displays the Forgot Password form.
*/

function ForgotPassForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const emailChangeHandler = function (e) {
    setEmail(e.target.value);
  };

  const submitHandler = async function (e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent');
    } catch (error) {
      toast.error('Could not send reset password');
    }

    setEmail('');
  };
  return (
    <>
      <form
        id='forgot-password'
        onSubmit={submitHandler}
        className='mb-20 space-y-4'
      >
        <InputForm
          label='email'
          name='email'
          type='email'
          value={email}
          handler={emailChangeHandler}
        />
      </form>
      <button type='submit' form='forgot-password' className='btn-prim w-full'>
        reset password
      </button>
      <button
        onClick={() => navigate('/sign-in')}
        className='btn-sec flex w-full items-center justify-center gap-2'
      >
        <BsArrowLeft className='h-4 w-4' />
        <p>back to sign in</p>
      </button>
    </>
  );
}

export default ForgotPassForm;
