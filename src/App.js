import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Instruction from './Pages/Instruction';
import Previous from './Pages/Previous';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/courses" element={<Courses />} />
      <Route exact path="/instruction" element={<Instruction />} />
      <Route exact path="/previous" element={<Previous />} />
    </Routes>
  );
}

export default App;
