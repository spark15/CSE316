import { Link } from 'react-router-dom';
import ShortNavBar from './ShortNavBar'
import '../CSS/Instruction.css'

const Instruction = () => {
    return (
        <div>
            <p style={{ textAlign: "left", fontWeight: "bold", fontSize: "40px", marginTop: "5px", marginBottom: "5px"}}>Instructions</p>
            <ShortNavBar />
            <br className="break"></br>
            <div className="text">
First, proceed to '02 Enter Previous Courses'. Click on each course you have completed with a C or better grade. Click Set Previous Courses.
<br></br>
<br></br>
Return to the home page and click '03 Select Courses'. Enter your name and any search term to restrict course selections with the provided string in the course name. This can be left blank to see all CSE courses.
<br></br>
<br></br>
Click the checkbox by each course for which you would like to register. Click the Register button to register. If you are missing prerequisites, you must go back and select a different set of courses. In this case, click 'ok' on the alert box and try again.
<br></br><br></br>
On success, an alert box will indicate the courses for which you have registered.
  </div>
        </div>
    );
};

export default Instruction;