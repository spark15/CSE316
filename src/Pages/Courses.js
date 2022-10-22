import { Link } from 'react-router-dom';
import Navbar from './navbar'
import '../CSS/Courses.css'

const Courses = () => {
    return (
        <div>
        <Navbar />
        <br></br>
        <div className="SearchBox">
            <form>
                <div>Search Form</div>

                <div>
                    <p>Name</p>
                    <input type="text" id="name" name="name" />
                </div>

                <div>
                    <p>Search for: </p>
                    <input type="text" id="word" name="word" />
                </div>

                <div>
                    </div>
            </form>
        </div>

        <div className="pop" id="courseList">
            <div id="list" />
        </div>
        </div>
    );
};

export default Courses;