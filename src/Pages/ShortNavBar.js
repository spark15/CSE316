import { Link } from 'react-router-dom';
import '../CSS/navbar.css'

function ShortNavbar() {
    return (
        <div className = "block1">
            <div className="container">
                <div className="topnav" id="myTopnav">
                    <Link to="/">00 Home</Link>
                    <Link to="/javascript:void(0);" className="icon"></Link>
                </div>
            </div>

            <div className="resnavbar" id="resnavbar">
                <Link to="/">00 Home</Link>
                <Link to="/instruction">01 Instructions</Link>
                <Link to="/previous">02 Enter Previous Courses</Link>
                <Link to="/courses">03 Select Courses</Link>
                <Link to="/javascript:void(0);" className="icon"></Link>
            </div>

            <button className="resnav">
                <div className="hel" id="thing">
                    <div className="ham"></div>
                    <div className="ham"></div>
                    <div className="ham"></div>
                </div>
                <div className="x" id="x">X</div>
            </button>
        </div>
        );
};

export default ShortNavbar;