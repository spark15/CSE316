import Navbar from './navbar'
import '../CSS/Previous.css'
//Sungwoong Park, sungwoong.park@stonybrook.edu
//this file is about previously taken courses
var form = document.getElementById("prev");

function Previous(props) {

  //return taken courses list  to previous in App.js
  function Handler(e){
    var takenlist = [];
    if (document.getElementById('101').checked) {
      takenlist.push({id:1, cid: 101, taken: true});
    } else {
      takenlist.push({id:1, cid: 101, taken: false});
    }

    if (document.getElementById('114').checked) {
      takenlist.push({id: 2, cid: 114, taken: true});
    } else {
      takenlist.push({id: 2, cid: 114, taken: false});
    }

    if (document.getElementById('214').checked) {
      takenlist.push({id: 3, cid: 214, taken: true});
    } else {
      takenlist.push({id: 3, cid: 214, taken: false});
    }

    if (document.getElementById('215').checked) {
      takenlist.push({id: 4, cid: 215, taken: true});
    } else {
      takenlist.push({id: 4, cid: 215, taken: false});
    }

    if (document.getElementById('216').checked) {
      takenlist.push({id: 5, cid: 216, taken: true});
    } else {
      takenlist.push({id: 5, cid: 216, taken: false});
    }

    if (document.getElementById('220').checked) {
      takenlist.push({id: 6, cid: 220, taken: true});
    } else {
      takenlist.push({id: 6, cid: 220, taken: false});
    }

    if (document.getElementById('300').checked) {
      takenlist.push({id: 7, cid: 300, taken: true});
    } else {
      takenlist.push({id: 7, cid: 300, taken: false});
    }

    if (document.getElementById('303').checked) {
      takenlist.push({id: 8, cid: 303, taken: true});
    } else {
      takenlist.push({id: 8, cid: 303, taken: false});
    }

    if (document.getElementById('305').checked) {
      takenlist.push({id: 10, cid: 305, taken: true});
    } else {
      takenlist.push({id: 10, cid: 305, taken: false});
    }

    if (document.getElementById('306').checked) {
      takenlist.push({id: 11, cid: 306, taken: true});
    } else {
      takenlist.push({id: 11, cid: 306, taken: false});
    }

    if (document.getElementById('310').checked) {
      takenlist.push({id: 12, cid: 310, taken: true});
    } else {
      takenlist.push({id: 12, cid: 310, taken: false});
    }

    if (document.getElementById('312').checked) {
      takenlist.push({id: 13, cid: 312, taken: true});
    } else {
      takenlist.push({id: 13, cid: 312, taken: false});
    }

    if (document.getElementById('316').checked) {
      takenlist.push({id: 14, cid: 316, taken: true});
    } else {
      takenlist.push({id: 14, cid: 316, taken: false});
    }

    if (document.getElementById('320').checked) {
      takenlist.push({id: 15, cid: 320, taken: true});
    } else {
      takenlist.push({id: 15, cid: 320, taken: false});
    }

    if (document.getElementById('416').checked) {
      takenlist.push({id: 16, cid: 416, taken: true});
    } else {
      takenlist.push({id: 16, cid: 416, taken: false});
    }
    props.classChanger(takenlist);
  }

  var dis = {display: "none"};
  if (props.id == -1) {
    alert("Please set student id before proceeding!");
    dis = {display: "none"};
  } else {
    dis = {display: "block"};
  }

  return (
    <div>
      <p className="Heading1" style={{ textAlign: "center"}}>CourseMan ={'>'} Search/Register</p>
      <Navbar />
      <div className="block">
        <p className="block" style={{ margin: "0"}}>Student ID: {props.id}</p>
        <br></br>
        <div className="block"><p>Check off the courses you have completed with a C or better</p></div>
        <form className="prev" style={dis}>
          <div className="block">
            
            <div className="item">
              <input type="checkbox" id="101" name="101" value="CSE101" />
              <label htmlFor="101">CSE 101</label>
            </div>

            <div className="item">
              <input type="checkbox" id="114" name="114" value="CSE114" />
              <label htmlFor="114">CSE 114</label>
            </div>
            
            <div className="item">
              <input type="checkbox" id="214" name="214" value="CSE214" />
              <label htmlFor="214">CSE 214</label>
            </div>
        
            <div className="item">
              <input type="checkbox" id="215" name="215" value="CSE215" />
              <label htmlFor="215">CSE 215</label>
            </div>
        
            <div className="item">
              <input type="checkbox" id="216" name="216" value="CSE216" />
              <label htmlFor="216">CSE 216</label>
            </div>

            <div className="item">
              <input type="checkbox" id="220" name="220" value="CSE220" />
              <label htmlFor="220">CSE 220</label>
            </div>

            <div className="item">
              <input type="checkbox" id="300" name="300" value="CSE300" />
              <label htmlFor="300">CSE 300</label>
            </div>
        
            <div className="item">
              <input type="checkbox" id="303" name="303" value="CSE303" />
              <label htmlFor="303">CSE 303</label>
            </div>
        
            <div className="item">
              <input type="checkbox" id="305" name="305" value="CSE305" />
              <label htmlFor="305">CSE 305</label>
            </div>
        
            <div className="item">
              <input type="checkbox" id="306" name="306" value="CSE306" />
              <label htmlFor="306">CSE 306</label>
            </div>
        
            <div className="item">
              <input type="checkbox" id="310" name="310" value="CSE310" />
              <label htmlFor="310">CSE 310</label>
            </div>
        
            <div className="item">
              <input type="checkbox" id="312" name="312" value="CSE312" />
              <label htmlFor="312">CSE 312</label>
            </div>
        
            <div className="item">
              <input type="checkbox" id="316" name="316" value="CSE316" />
              <label htmlFor="316">CSE 316</label>
            </div>
                        
            <div className="item">
              <input type="checkbox" id="320" name="320" value="CSE320" />
              <label htmlFor="320">CSE 320</label>
            </div>
                        
            <div className="item">
              <input type="checkbox" id="416" name="416" value="CSE416" />
              <label htmlFor="416">CSE 416</label>
            </div>
          </div>
          <button className="item" onClick={Handler} type="button" value="Submit" id="courses">Set Previous Courses</button>
        </form>
      </div>
    </div>
  );
};

export default Previous;