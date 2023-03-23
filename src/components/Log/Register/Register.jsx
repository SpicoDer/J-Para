import LogContainer from '../LogContainer';
import LogNav from '../LogNav';
import RegisterForm from './RegisterForm';

function Register() {
  return (
    <LogContainer>
      <LogNav />
      <div className='mt-8'>
        <RegisterForm />
      </div>
    </LogContainer>
  );
}

export default Register;
