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
      if (document.getElementById('101') != null) {
         if (document.getElementById('101').checked) {
            alr += document.getElementById('101').value;
            returned.push("1");
            alr += "\n";
         } 
      }

      if (document.getElementById('114') != null) {
         if (document.getElementById('114').checked) {
            alr += document.getElementById('114').value;
            returned.push("2");
            alr += "\n";
         } 
      }

      if (document.getElementById('214') != null) {
         if (document.getElementById('214').checked) {
            alr += document.getElementById('214').value;
            returned.push("3");
            alr += "\n";
         } 
      }

      if (document.getElementById('215') != null) {
         if (document.getElementById('215').checked) {
            alr += document.getElementById('215').value;
            returned.push("4");
            alr += "\n";
         } 
      }

      if (document.getElementById('216') != null) {
         if (document.getElementById('216').checked) {
            alr += document.getElementById('216').value;
            returned.push("5");
            alr += "\n";
         } 
      }

      if (document.getElementById('220') != null) {
         if (document.getElementById('220').checked) {
            alr += document.getElementById('220').value;
            returned.push("6");
            alr += "\n";
         } 
      }

      if (document.getElementById('300') != null) {
           if (document.getElementById('300').checked) {
              alr += document.getElementById('300').value;
              returned.push("7");
              alr += "\n";
           } 
      }

      if (document.getElementById('303') != null) {
         if (document.getElementById('303').checked) {
            alr += document.getElementById('303').value;
            returned.push("8");
            alr += "\n";
         } 
      }

      if (document.getElementById('304') != null) {
         if (document.getElementById('304').checked) {
            alr += document.getElementById('304').value;
            returned.push("9");
            alr += "\n";
         } 
      }

      if (document.getElementById('305') != null) {
         if (document.getElementById('305').checked) {
            alr += document.getElementById('305').value;
            returned.push("10");
            alr += "\n";
         } 
      }

      if (document.getElementById('306') != null) {
         if (document.getElementById('306').checked) {
            alr += document.getElementById('306').value;
            returned.push("11");
            alr += "\n";
         } 
      }

      if (document.getElementById('310') != null) {
         if (document.getElementById('310').checked) {
            alr += document.getElementById('310').value;
            returned.push("12");
            alr += "\n";
         } 
      }

      if (document.getElementById('312') != null) {
         if (document.getElementById('312').checked) {
            alr += document.getElementById('312').value;
            returned.push("13");
            alr += "\n";
         } 
      }

      if (document.getElementById('316') != null) {
         if (document.getElementById('316').checked) {
            alr += document.getElementById('316').value;
            returned.push("14");
            alr += "\n";
         } 
      }

      if (document.getElementById('320') != null) {
         if (document.getElementById('320').checked) {
            alr += document.getElementById('320').value;
            returned.push("15");
            alr += "\n";
         }
      }

      if (document.getElementById('416') != null) {
         if (document.getElementById('416').checked) {
            alr += document.getElementById('416').value;
            returned.push("16");
            alr += "\n";
         }
      }

      var actualreturn = [];
      //if chosen class has untaken previous classes, change alr.
      
      for (let i = 0; i < returned.length; i++) {
         var hasReq = props.prereq.find(element => element.course_rec_id == returned[i]);
         if (hasReq == null) {
            alert("NO problem with CSE" + props.previous[returned[i]-1].cid);
            actualreturn.push(returned[i]);
         } else {
            var shouldTaken = hasReq.course_prereq_rec_id;
            if (props.previous[shouldTaken - 1].taken == true){
               alert("NO problem with CSE" + props.previous[returned[i]-1].cid);
               actualreturn.push(returned[i]);
            } else {
               alert("You have not made the requirement for " + props.previous[returned[i]-1].cid);
               
            }
         }
        }
     alr="Courses Selected:\n";
     for (let i = 0; i < actualreturn.length; i++) {
      alr += props.courses[actualreturn[i] - 1].course_name + "\n";
     }
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
            <button style={{display: "none"}} className="reg" type="button" id="register" onClick={register}>Register</button>
            </div>
            </div>
        </div>
    );
};

export default Courses;