import '../CSS/Courses.css'
import Navbar from './navbar'
import { useEffect, useRef, useState } from 'react';

function Courses(props) {
   var coursesVisible = false;
   var alr = "";
   var previousCourses = props.previous;;
   let list = "";
   var returned = [];
   var courses = props.courses;
   var coursePre = props.previous;
   //load local storage and store on previousCourses
   
   function search() {
      console.log(props.courses);
      document.getElementById("list").style.display = "block";
      document.getElementById("register").style.display = "block";
      list = "";
      list += "<div className=\"SearchBox\">";
      list += "<p>"+document.getElementById("name").value+" Here are the courses you may select.</p>";
      for (let i = 0; i < 16; i++) {
         if (props.courses[i].course_name.includes(document.getElementById("word").value)) {
            list += "<div className=\"res\">"; 
            list += "<input type='checkbox' id='"+ props.courses[i].course_id.substring(3)+"' name='"+ props.courses[i].course_id.substring(3)+"' value='"+ props.courses[i].course_name +"'>";
            list += "<label for='"+props.courses[i].course_id.substring(3)+"'>"+props.courses[i].course_id+": "+props.courses[i].course_name+" - "+props.courses[i].course_seatsremaining+" of "+props.courses[i].course_capacity+"</label>";
            list += "</div>";
         }
      }
      list += "</div>";
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
      returned = [];
      alr="";
      alr += "Courses Selected:\n";
      //all of these if statement gathers all class you choose
      for (var i = 0; i < props.courses.length; i++) {

         if (document.getElementById(props.courses[i].course_id.substring(3)).checked != null) {
            if (document.getElementById(props.courses[i].course_id.substring(3)).checked) {
               alr += document.getElementById(props.courses[i].course_id.substring(3)).value;
               returned.push(props.courses[i].course_id);
               alr += "\n";
            }
         }
       }
      
      var actualreturn = [];
      //if chosen class has untaken previous classes, change alr.
      
      for (let i = 0; i < returned.length; i++) {
         var hasReq = props.prereq.find(element => element.course_rec_id == returned[i]);
         if (hasReq == null) {
            actualreturn.push(returned[i]);
         } else {
            var shouldTaken = hasReq.course_prereq_rec_id;
         if (props.previous[shouldTaken - 1].taken == true){
            actualreturn.push(returned[i]);
         } else {
            alert("CSE" + props.previous[returned[i]-1].cid + " requires CSE" + props.previous[shouldTaken - 1].cid);
         }}
      }
      
     alr="Courses Selected:\n";
     for (let i = 0; i < actualreturn.length; i++) {
      for (let j = 0; j < props.courses.length; j++) {
         if (actualreturn[i] == props.courses[j].course_id) {
            alr+= props.courses[j].course_id;
         }
      }
   }
     props.postTranscript(actualreturn);
     alert(alr);

   }

   if (previousCourses === null) {
        alert("Please use the Update Courses page to indicate courses you have taken. Then return here.")
   }
    return (
        <div>
        <p className="Heading1" style={{ textAlign:"center"}}>CourseMan={'>'}Search/Register</p>
        <Navbar />
        
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
            <div>
            <button className="reg" type="button" id="register" onClick={register}>Register</button>
            </div>
            </div>
        </div>
    );
};

export default Courses;