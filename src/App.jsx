import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Profile from './pages/Profile.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';

export default function App() {
  function loadMapScenario() {
    const map = new Microsoft.Maps.Map(document.getElementById('map'), {});
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home loadMap={loadMapScenario} />} />
          <Route
            path='/sign-in'
            element={<SignIn loadMap={loadMapScenario} />}
          />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}
