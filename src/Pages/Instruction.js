import { Link } from 'react-router-dom';
import NavBar from './navbar'
import '../CSS/Instruction.css'

const Instruction = () => {
    return (
        <div>
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px", marginTop: "5px", marginBottom: "5px"}}>CourseMan!</p>
            <NavBar />
            <br className="break"></br>
            <div className="text" style={{ textAlign: "center"}}>
First, proceed to 'Set Student Id' and enter your 9 digit student id. Click the 'Set Student Id' button to save it.
<br></br>
<br></br>
Next, proceed to 'Enter Previous Courses'. Click on each course you have completed with a C or better grade. Click Set Previous Courses.
<br></br>
<br></br>
Return to the home page and click 'Select Courses'. Enter your name and any search term to restrict course selections with the provided string in the course name. This can left blank to see all CSE courses.
<br></br><br></br>
Click the checkbox by each course for which you would like to register. Click the Register button to register. If you are missing prerequisites, you must go back and select a different set of courses. In this case, click 'ok' on the alert box and try again.
<br></br><br></br>
On success, an alert box will indicate the courses for which you have registered.
  </div>
        </div>
    );
};

export default Instruction;