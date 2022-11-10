import NavBar from './navbar';
import React, {useRef, useEffect, useState} from 'react';

function setStudentId (props) {
        return(
            <div>
                <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px", marginTop: "5px", marginBottom: "5px"}}>CourseMan!</p>
                <NavBar />
                <br className="break"></br>
                <form>
                    <p>ID Entry Form</p>
                    <br></br>
                    <p>ID:</p>
                    <input type="textfield" id='id'></input>
                    <br></br>
                    <button type='button' onClick={props.setId}>Set Student Id</button>

                </form>
            </div>
        )
}
export default setStudentId;
