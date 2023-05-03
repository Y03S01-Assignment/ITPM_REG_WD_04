import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from './view/Login';
import Register from './view/Register';


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />

    </Routes>
  );
}

export default App;
