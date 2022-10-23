import { Link } from 'react-router-dom';
import ShortNavBar from './ShortNavBar'
import '../CSS/Previous.css'

const Previous = () => {
    return (
        <div>
            <p className="Heading1" style={{ textAlign: "center"}}>CourseMan ={'>'} Search/Register</p>
            <ShortNavBar />
            <div className="block">
                <div><p>Check off the courses you have completed with a C or better</p></div>

                <div className="prev" >
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

                    <button className="item" type="submit" value="Submit" id="courses">Set Previous Courses</button>
                </div>
            </div>
        </div>
    );
};

export default Previous;