import { Link } from 'react-router-dom';
import ShortNavBar from './ShortNavBar'
import '../CSS/Courses.css'
import { useEffect, useRef, useState } from 'react';

function Courses() {
    var coursesVisible = false;
    var alr = "";
    let previousCourses = [];
    let selected = [];
    let courses = [
        { courseNumber: "CSE101", courseName: "Algorithmic Thinking", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE114", courseName: "Introduction to Object Oriented Programming", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE214", courseName: "Data Structures", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE215", courseName: "Foundations of Computer Science", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE216", courseName: "Programing Abstractions", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE220", courseName: "System Fundamentals I", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE303", courseName: "Introduction to the Theory of Computation", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE304", courseName: "Compiler Design", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE305", courseName: "Database Systems", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE306", courseName: "Operating Systems", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE310", courseName: "Computer Networks", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE316", courseName: "Software Development", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE320", courseName: "System Fundamentals II", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE331", courseName: "Computer Security Basics", seatsRemaining: 40, capacity: 40 },
        { courseNumber: "CSE416", courseName: "Software Engineering", seatsRemaining: 40, capacity: 40 },
     ];
     let coursePre = {
        'CSE101': [],
        'CSE114': [],
        'CSE214': ['CSE114'],
        'CSE215': [],
        'CSE216': ['CSE214'],
        'CSE220': ['CSE214'],
        'CSE300': [],
        'CSE303': ['CSE214', 'CSE215'],
        'CSE304': ['CSE216', 'CSE220'],
        'CSE305': ['CSE216'],
        'CSE306': ['CSE216', 'CSE320'],
        'CSE310': ['CSE214', 'CSE220'],
        'CSE312': [],
        'CSE316': ['CSE216'],
        'CSE320': ['CSE220'],
        'CSE416': ['CSE316']
    }
    let list = "";
   //load local storage and store on previousCourses
   if (window.localStorage['CSE101'] == 'true') {
      previousCourses.push('CSE101');
   } 
   if (window.localStorage['CSE114'] == 'true') {
      previousCourses.push('CSE114');
   }
   if (window.localStorage['CSE214'] == 'true') {
      previousCourses.push('CSE214');
   }
   if (window.localStorage['CSE215'] == 'true') {
      previousCourses.push('CSE215');
   }
   if (window.localStorage['CSE216'] == 'true') {
      previousCourses.push('CSE216');
   }
   if (window.localStorage['CSE220'] == 'true') {
      previousCourses.push('CSE220');
   }
   if (window.localStorage['CSE300'] == 'true') {
      previousCourses.push('CSE300');
   }
   if (window.localStorage['CSE303'] == 'true') {
      previousCourses.push('CSE303');
   }
   if (window.localStorage['CSE304'] == 'true') {
      previousCourses.push('CSE304');
   }
   if (window.localStorage['CSE305'] == 'true') {
      previousCourses.push('CSE305');
   }
   if (window.localStorage['CSE306'] == 'true') {
      previousCourses.push('CSE306');
   }
   if (window.localStorage['CSE310'] == 'true') {
      previousCourses.push('CSE310');
   }
   if (window.localStorage['CSE316'] == 'true') {
      previousCourses.push('CSE316');
   }
   if (window.localStorage['CSE320'] == 'true') {
      previousCourses.push('CSE320');
   }
   if (window.localStorage['CSE331'] == 'true') {
      previousCourses.push('CSE331');
   }
   if (window.localStorage['CSE416'] == 'true') {
      previousCourses.push('CSE416');
   }
    function search() {
        document.getElementById("list").style.display = "block";
        document.getElementById("register").style.display = "block";
        list = "";
        list += "<p>"+document.getElementById("name").value+" Here are the courses you may select.</p>";
        for (const element of courses) {
           if (element.courseName.includes(document.getElementById("word").value)) {
              list += "<div>";
              list += "<input type='checkbox' id='"+ element.courseNumber.substring(3)+"' name='"+ element.courseNumber.substring(3)+"' value='"+ element.courseName +"'>";
              list += "<label for='"+element.courseNumber.substring(3)+"'>"+element.courseNumber+": "+element.courseName+" - "+element.seatsRemaining+" of "+element.capacity+"</label>";
              list += "</div>";
           }
        }
        document.getElementById("list").innerHTML = list;
        document.getElementById("searchfor").style.display = "none";
        document.getElementById("hide").style.display = "block";
        
  
      }
    function hide(){
            document.getElementById("searchfor").style.display = "block";
            document.getElementById("hide").style.display = "none";
            document.getElementById("list").style.display = "none";
            document.getElementById("register").style.display = "none";
    }
    function register() {
        selected= [];
        alr="";
        alr += "Courses Selected:\n";
        //all of these if statement gathers all class you choose
        if (document.getElementById('101') != null) {
           if (document.getElementById('101').checked) {
              alr += document.getElementById('101').value;
              selected.push("CSE101");
              alr += "\n";
           } 
        }

        if (document.getElementById('114') != null) {
           if (document.getElementById('114').checked) {
              alr += document.getElementById('114').value;
              selected.push("CSE114");
              alr += "\n";
           } 
        }

        if (document.getElementById('214') != null) {
           if (document.getElementById('214').checked) {
              alr += document.getElementById('214').value;
              selected.push("CSE214");
              alr += "\n";
           } 
        }

        if (document.getElementById('215') != null) {
           if (document.getElementById('215').checked) {
              alr += document.getElementById('215').value;
              selected.push("CSE215");
              alr += "\n";
           } 
        }

        if (document.getElementById('216') != null) {
           if (document.getElementById('216').checked) {
              alr += document.getElementById('216').value;
              selected.push("CSE216");
              alr += "\n";
           } 
        }

        if (document.getElementById('220') != null) {
           if (document.getElementById('220').checked) {
              alr += document.getElementById('220').value;
              selected.push("CSE220");
              alr += "\n";
           } 
        }

        if (document.getElementById('300') != null) {
           if (document.getElementById('300').checked) {
              alr += document.getElementById('300').value;
              selected.push("CSE300");
              alr += "\n";
           } 
        }

        if (document.getElementById('303') != null) {
           if (document.getElementById('303').checked) {
              alr += document.getElementById('303').value;
              selected.push("CSE303");
              alr += "\n";
           } 
        }

        if (document.getElementById('304') != null) {
           if (document.getElementById('304').checked) {
              alr += document.getElementById('304').value;
              selected.push("CSE304");
              alr += "\n";
           } 
        }

        if (document.getElementById('305') != null) {
           if (document.getElementById('305').checked) {
              alr += document.getElementById('305').value;
              selected.push("CSE305");
              alr += "\n";
           } 
        }

        if (document.getElementById('306') != null) {
           if (document.getElementById('306').checked) {
              alr += document.getElementById('306').value;
              selected.push("CSE306");
              alr += "\n";
           } 
        }

        if (document.getElementById('310') != null) {
           if (document.getElementById('310').checked) {
              alr += document.getElementById('310').value;
              selected.push("CSE310");
              alr += "\n";
           } 
        }

        if (document.getElementById('312') != null) {
           if (document.getElementById('312').checked) {
              alr += document.getElementById('312').value;
              selected.push("CSE312");
              alr += "\n";
           } 
        }

        if (document.getElementById('316') != null) {
           if (document.getElementById('316').checked) {
              alr += document.getElementById('316').value;
              selected.push("CSE316");
              alr += "\n";
           } 
        }

        if (document.getElementById('320') != null) {
           if (document.getElementById('320').checked) {
              alr += document.getElementById('320').value;
              selected.push("CSE320");
              alr += "\n";
           }
        }
        if (document.getElementById('416') != null) {
           if (document.getElementById('416').checked) {
              alr += document.getElementById('416').value;
              selected.push("CSE416");
              alr += "\n";
           }
        }
        //if chosen class has untaken classes, change alr.
        for (const element of selected) {
           const prereq = coursePre[element];
           for (const x of prereq) {
              if (previousCourses.includes(x)) {

              } else {
                 alr = element +" requires "+ x;
                 break;
              }
           }

        }
     alert(alr);
   }
    if (previousCourses === null) {
        alert("Please use the Update Courses page to indicate courses you have taken. Then return here.")
     }
    return (
        <div>
        <p className="Heading1" style={{ textAlign:"center"}}>CourseMan={'>'}Search/Register</p>
        <ShortNavBar />
        <div className="SearchBox">
            <form>
                <fieldset>
                    <legend>Search Form</legend>
                    <table>
                        <tbody>
                        <tr>
                            <td><p>Name :</p></td>
                            <td><input type="text" id="name" name="name" /></td>
                        </tr>
                        <tr>
                            <td>Search for:</td>
                            <td><input type="text" id="word" name="word" /></td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="item1" type="button" value="Submit" id="searchfor" onClick={search}>Show courses</button>
                    <button className="item1" style= {{display: "none"}} type="button" value="Submit" id="hide" onClick={hide}>Hide Courses</button>
                    </fieldset>
                    
            </form>
        </div>

        <div className="pop" id="courseList">
            <div id="list" />
            <button style={{display:"none"}}type="button" id="register" onClick={register}>Hello</button>
        </div>
        </div>
    );
};

export default Courses;