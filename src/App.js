import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Instruction from './Pages/Instruction';
import Previous from './Pages/Previous';
import SetStudentId from './Pages/SetStudentId';
import React, {useState} from 'react';

function App(){
    this.state = {
      sid: -1
    }
    function setId(cid) {
      sid = cid;
      console.log(sid);
    }
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/instruction" element={<Instruction />} />
        <Route exact path="/previous" element={<Previous />} />
        <Route exact path="/set" setId={setId} element={<SetStudentId />} />
      </Routes>
    );
}

export default App;
