import SignContainer from '../components/Sign/SignContainer.jsx';
import SignNav from '../components/Sign/SignNav.jsx';
import SigninForm from '../components/Sign/Signin/SigninForm.jsx';

function SignIn() {
  return (
    <SignContainer>
      <SignNav />
      <div className='mt-8'>
        <SigninForm />
      </div>
    </SignContainer>
  );
}

export default SignIn;
