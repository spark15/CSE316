import { Link } from 'react-router-dom';
import ShortNavBar from './ShortNavBar'
import '../CSS/Courses.css'

const Courses = () => {
    return (
        <div>
        <p className="Heading1" style={{ textAlign:"center"}}>CourseMan={'>'}Search/Register</p>
        <ShortNavBar />

        <div className="SearchBox">
            <form>
                <fieldset>
                    <legend>Search Form</legend>
                    <table>
                        <tr>
                            <td><p>Name :</p></td>
                            <td><input type="text" id="name" name="name" /></td>
                        </tr>
                        <tr>
                            <td>Search for:</td>
                            <td><input type="text" id="word" name="word" /></td>
                        </tr>
                    </table>
                    <button className="item1" type="submit" value="Submit" id="searchfor">Show courses</button>
                    <button className="item1" style= {{display: "none"}} type="submit" value="Submit" id="hide">Hide Courses</button>
                    </fieldset>
                    
            </form>
        </div>

        <div className="pop" id="courseList">
            <div id="list" />
        </div>
        </div>
    );
};

export default Courses;