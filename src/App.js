import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './SignUp';
import FileUpload from './FileUpload';
import Login from './Login';
function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/FileUpload" element={<FileUpload />} />

      </Routes>

    </Router>
  );
}

export default App;
