// /src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommonRoutes from './routes/commonRoutes';
import { ThemeProvider } from './context/ThemeContext';
import RegisterSelection from './pages/common/RegistrationSelection';
import Login from './pages/common/Login';
import TravelerSignup from './pages/user/Register_User';
import GuideSignup from './pages/guide/Register_Guide';
import UserRoute from './routes/userRoutes'; // Changed import name
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/*" element={<CommonRoutes />} />
          <Route path="/register" element={<RegisterSelection />} />
          <Route path="/traveler-signup" element={<TravelerSignup />} />
          <Route path="/guide-signup" element={<GuideSignup />} />
          <Route path="/login" element={<Login />} />
          
          {/* User routes using your working pattern */}
          {UserRoute}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;