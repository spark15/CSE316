import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Instruction from './Pages/Instruction';
import Previous from './Pages/Previous';
import Login from './Pages/Login';
import React, {useState, useEffect} from 'react';
import { hashutil } from './hashutil.mjs';

function App() {
  const [id, setId] = useState("-1");
  const [iddb, setIddb] = useState("-1");
  const [previous, setPrevious] = useState(
    [
      {id: 1, cid: 101, taken: false},
      {id: 2, cid: 114, taken: false},
      {id: 3, cid: 214, taken: false},
      {id: 4, cid: 215, taken: false},
      {id: 5, cid: 216, taken: false},
      {id: 6, cid: 220, taken: false},
      {id: 7, cid: 300, taken: false},
      {id: 8, cid: 303, taken: false},
      {id: 9, cid: 304, taken: false},
      {id: 10, cid: 305, taken: false},
      {id: 11, cid: 306, taken: false},
      {id: 12, cid: 310, taken: false},
      {id: 13, cid: 312, taken: false},
      {id: 14, cid: 316, taken: false},
      {id: 15, cid: 320, taken: false},
      {id: 16, cid: 416, taken: false}
    ]
  );
  const [courses, setCourses] = useState({});
  const [prereq, setPrereq] = useState({});
  const [transcript, setTranscript] = useState({});

  function changeId(cid, pwd) {
    fetch('http://localhost:4000/api/courseman/getStudentWith/'+cid)
    .then((res) => res.json())
    .then((data)=>{
      if (data[0] != null){
        if (hashutil(data[0].first_name, data[0].last_name, pwd) == data[0].password) {
          setIddb(data[0].id);
          setId(data[0].student_id)
          alert("Your Id has been successfully changed")
        } else {
          alert("Your password is wrong!");
        }
      } else {
        alert("Your id doesn't exist on database!")
      }
    })
  };

  function classChanger(takenlist) {
    setPrevious(takenlist);
    console.log(takenlist);
  }

  function changeCourses(rdata){
    setCourses(rdata);
  }
  function loadPrereq(rdata) {
    setPrereq(rdata);
  }

  function postTranscript(rdata) {
    for (let i = 0; i < rdata.length; i++) {
      fetch('http://localhost:4000/api/courseman/postTranscript/'+ id+'/' + rdata[i], {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Test",
          body: "I am testing!",
          userId: 1,
        }),
      }).then((response) => console.log(response));
      fetch('http://localhost:4000/api/courseman/getCourses/' + rdata[i], {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Test",
          body: "I am testing!",
          userId: 1,
        })});
    }
    fetch('http://localhost:4000/api/courseman/getCourses')
    .then((res) => res.json())
    .then((data) => changeCourses(data));
  }

  function loadTranscript(rdata) {
    setTranscript(rdata);
  }
  
  useEffect(() => {
    fetch('http://localhost:4000/api/courseman/getCourses')
    .then((res) => res.json())
    .then((data) => changeCourses(data));
    fetch('http://localhost:4000/api/courseman/prereqs')
    .then((res) => res.json())
    .then((data) => loadPrereq(data));
    fetch('http://localhost:4000/api/courseman/transcript')
    .then((res) => res.json())
    .then((data) => loadTranscript(data));
  }, []);
  
  
    return (
      <Routes>
        <Route exact path="/" element={<Home courses={courses}/>} />
        <Route exact path="/courses"  element={<Courses id={id} courses={courses} previous={previous} prereq={prereq} postTranscript={postTranscript}/>} />
        <Route exact path="/instruction" element={<Instruction />} />
        <Route exact path="/previous" element={<Previous classChanger={classChanger} id={id} classes={previous} />} />
        <Route exact path="/login"  element={<Login changeId={changeId}/>} />
      </Routes>
    )
}

export default App;
