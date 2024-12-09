import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignUpForm } from './components/SignUpForm';
import { LoginForm } from './components/LoginForm';

function App() {
 
  return (
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
   
  )
}

export default App;
