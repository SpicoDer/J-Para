import LogContainer from '../LogContainer.jsx';
import LoginNav from './LoginNav.jsx';
import LoginForm from './LoginForm.jsx';

function LogIn() {
  return (
    <LogContainer>
      <LoginNav />
      <div className='mt-8'>
        <LoginForm />
      </div>
    </LogContainer>
  );
}

export default LogIn;
