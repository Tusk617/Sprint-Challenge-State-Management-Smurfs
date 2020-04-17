import React from "react";
import {useState} from "react";
import { connect } from "react-redux";

import {postSmurfs} from "../actions/smurfAction"


export const Form = (props) => {
    const [nameInput, setNameInput] = useState('');
    const [ageInput, setAgeInput] = useState(1);
    const [heightInput, setHeightInput] = useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            postSmurfs(nameInput, ageInput, heightInput)
            setNameInput('')
            setAgeInput('')
            setNameInput('')
        }}>
            <input
                placeholder="Enter a smurf name:"
                name="smurfName"
                value={nameInput}
                onChange={(event) => {
                    setNameInput(event.target.value);
                }}
            />
            <input
                placeholder="Enter a smurf age: (only numbers)"
                name="smurfAge"
                value={ageInput}
                onChange={(event) => {
                    setAgeInput(event.target.value);
                }}
            />
            <input
                placeholder="Enter a smurf height:"
                name="smurfHeight"
                value={heightInput}
                onChange={(event) => {
                    setHeightInput(event.target.value);
                }}
            />
            <input type="submit"/>
        </form>
    )
}

export default connect(null, {postSmurfs})(Form)
