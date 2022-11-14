import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Instruction from './Pages/Instruction';
import Previous from './Pages/Previous';
import SetStudentId from './Pages/SetStudentId';
import React, {Component,useState, setState, useEffect} from 'react';
//import getCourses from './api/courseman/getCourses';

function App() {
  const [id, setId] = useState("-1");
  const [iddb,setIddb] = useState("-1");
  const [previous, setPrevious] = useState(
    [
      {id: 101, taken: false},
      {id: 114, taken: false},
      {id: 214, taken: false},
      {id: 215, taken: false},
      {id: 216, taken: false},
      {id: 220, taken: false},
      {id: 300, taken: false},
      {id: 303, taken: false},
      {id: 304, taken: false},
      {id: 305, taken: false},
      {id: 306, taken: false},
      {id: 310, taken: false},
      {id: 312, taken: false},
      {id: 316, taken: false},
      {id: 320, taken: false},
      {id: 416, taken: false}
    ]
  );
  const [courses, setCourses] = useState({});
  const [prereq, setPrereq] = useState({});
  const [transcript, setTranscript] = useState({});
  const [temp, setTemp] = useState({});
  
  function changeId(cid) {
    fetch('http://localhost:4000/api/courseman/getStudentWith/'+cid)
    .then((res) => res.json())
    .then ((data) => {
      if (data.length == 1){
        setId(cid);
      } else {
        alert("Your Id doesn't exist");
      }});

  };
  function classChanger(takenlist) {
    setPrevious(takenlist)
  }

  function changeCourses(rdata){
    setCourses(rdata);
  }
  function loadPrereq(rdata) {
    setPrereq(rdata);
  }
  function loadTranscript(rdata) {
    setPrereq(rdata);
  }
  
  useEffect(() => {
    fetch('http://localhost:4000/api/courseman/getCourses')
    .then((res) => res.json())
    .then((data) => changeCourses(data));
  }, []);
  useEffect(() => {
    fetch('http://localhost:4000/api/courseman/prereqs')
    .then((res) => res.json())
    .then((data) => loadPrereq(data));
  }, []);
  useEffect(() => {
    fetch('http://localhost:4000/api/courseman/transcript')
    .then((res) => res.json())
    .then((data) => loadTranscript(data));
  }, []);
  
  
    return (
      <Routes>
        <Route exact path="/" element={<Home courses={courses}/>} />
        <Route exact path="/courses"  element={<Courses id={id}/>} />
        <Route exact path="/instruction" element={<Instruction />} />
        <Route exact path="/previous" element={<Previous classChanger= {classChanger} id={id} classes={previous}/>} />
        <Route exact path="/set"  element={<SetStudentId changeId={changeId}/>} />
      </Routes>
    )
}

export default App;
