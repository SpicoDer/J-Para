import LogContainer from '../LogContainer.jsx';
import LogNav from '../LogNav.jsx';
import LoginForm from './LoginForm.jsx';

function LogIn() {
  return (
    <LogContainer>
      <LogNav />
      <div className='mt-8'>
        <LoginForm />
      </div>
    </LogContainer>
  );
}

export default LogIn;
