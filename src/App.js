import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Tasks from './Tasks';
import Profile from './Profile';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
