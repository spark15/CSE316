import NavBar from './navbar';
import React, {useRef, useEffect, useState} from 'react';
import hashutil from '../hashutil.mjs';

function login (props) {
    function handleEvent() {
        var id = document.getElementById("id").value;
        var pwd = document.getElementById("pwd").value;
        props.changeId(id,pwd);
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
                                    <p>Password :</p>
                                </td>
                                <td>
                                    <input style={{width: "49%"}}type="text" id='pwd'></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <button className="setId" type='button' onClick={handleEvent}>Set Student Id</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
}
export default login;