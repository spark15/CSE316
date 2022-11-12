import { Link } from 'react-router-dom';
import '../CSS/navbar.css'
function myFunction() {
    var x = document.getElementById("resnavbar");
    var y = document.getElementById("thing");
    var z = document.getElementById("x");
    if (x.className == "resnavbar") {
        x.className = "resnavbar1";
    } else {
        x.className = "resnavbar";
    }
    if (y.className == "hel") {
        y.className = "hel1";
    } else {
        y.className = "hel";
    }
    if (z.className == "x") {
        z.className = "x1";
    } else {
        z.className = "x";
    }
}

function Navbar() {
    return (
        <div className = "block1">
            <div className="container">
                <div className="topnav" id="myTopnav">
                    <Link to="/">Home</Link>
                    <Link to="/instruction">Instructions</Link>
                    <Link to="/set" className="ares">Set Student Id</Link>
                    <Link to="/previous">Enter Previous Courses</Link>
                    <Link to="/courses">Select Courses</Link>
                    <Link to="/javascript:void(0);" className="icon"></Link>
                </div>
            </div>

            <div className="resnavbar" id="resnavbar">
                <br></br>
                <br></br>
                <br></br>
                <Link to="/" className="ares">Home</Link>
                <Link to="/instruction" className="ares">Instructions</Link>
                <Link to="/set" className="ares">Set Student Id</Link>
                <Link to="/previous" className="ares">Enter Previous Courses</Link>
                <Link to="/courses" className="ares">Select Courses</Link>
                <Link to="/javascript:void(0);" className="icon"></Link>
            </div>

            <button className="resnav" onClick={myFunction}>
                <div className="hel" id="thing">
                    <div className="ham"></div>
                    <div className="ham"></div>
                    <div className="ham"></div>
                </div>
                <div className="x" id="x">X</div>
            </button>
            <br className="br"></br>
            <br className="br"></br>
        </div>
        );
};

export default Navbar;