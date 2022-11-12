import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Instruction from './Pages/Instruction';
import Previous from './Pages/Previous';
import SetStudentId from './Pages/SetStudentId';
import React, {Component,useState, setState} from 'react';
//import getCourses from './api/courseman/getCourses';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: "-1",
      previous: [
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
    };
  };
  
  
  changeId = (cid) => {
    this.setState({id: cid})
  }
  classChanger = (takenlist) => {
    this.setState({previous: takenlist})
  }

  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/courses"  element={<Courses id={this.state.id}/>} />
        <Route exact path="/instruction" element={<Instruction />} />
        <Route exact path="/previous" element={<Previous classChanger= {this.classChanger} id={this.state.id} classes={this.state.previous}/>} />
        <Route exact path="/set"  element={<SetStudentId changeId={this.changeId}/>} />
      </Routes>
    )};
}

export default App;
