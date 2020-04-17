import axios from "axios";

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: "FETCH_SMURFS_START"});
        axios.get("http://localhost:3333/smurfs")
        .then(response => {
            console.log(response)
            dispatch({ type: "FETCH_SMURFS_SUCCESS"})
        })
    }
}