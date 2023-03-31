import SignContainer from '../components/Sign/SignContainer.jsx';
import SignNav from '../components/Sign/SignNav.jsx';
import SignupForm from '../components/Sign/Signup/SignupForm.jsx';

function SignUp() {
  return (
    <SignContainer>
      <SignNav />
      <div className='mt-8'>
        <SignupForm />
      </div>
    </SignContainer>
  );
}

export default SignUp;
