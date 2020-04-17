import axios from "axios";

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: "FETCH_SMURFS_START"});
        axios.get("http://localhost:3333/smurfs")
        .then(response => {
            console.log(response.data[0])
            dispatch({ type: "FETCH_SMURFS_SUCCESS", payload: response.data})
        })
    }
}

export const postSmurfs = (smurfName, smurfAge, smurfHeight) => {
    const newSmurf = {
        name: smurfName,
        age: smurfAge,
        height: smurfHeight
    }
    return dispatch => {
        dispatch({ type: "POST_SMURF_START"});
        axios.post("http://localhost:3333/smurfs", {newSmurf})
        .then(response => {
            console.log(response)
            dispatch({ type: "POST_SMURF_SUCCESS", payload: {newSmurf}});
        })
    }
}