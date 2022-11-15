import NavBar from './navbar';
import React, {useRef, useEffect, useState} from 'react';

function setStudentId (props) {
    function handleEvent() {
        var id = document.getElementById("id").value;
        props.changeId(id);
    }
        return(
            <div>
                <p className="Heading1">CourseMan!</p>
                <NavBar />
                <form>
                    <table className="wrapper">
                        <tbody>
                            <tr>
                                <td>ID Entry Form</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>ID:</p>
                                </td>
                                <td>
                                    <input style={{width: "49%"}}type="number" id='id'></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <button className="reg" type='button' onClick={handleEvent}>Set Student Id</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    

                </form>
            </div>
        )
}
export default setStudentId;
