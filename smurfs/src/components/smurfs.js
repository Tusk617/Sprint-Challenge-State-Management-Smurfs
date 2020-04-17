import React from "react";
import { connect } from "react-redux";

import { fetchSmurfs, postSmurfs } from "../actions/smurfAction";

const SmurfsComponenet = (props) => {
    // console.log(props.smurfVillage);
    return (
        <div>
            <h1>Welcome to the Smurf Village!</h1>
            <button onClick={props.fetchSmurfs}>Get the smurfs</button>
            {props.smurfVillage.map(item => {
                return <p key={item.id}>Name: {item.name}<br/>
                Age: {item.age}<br/>
                Height: {item.height}</p>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.smurfs.name,
        age: state.smurfs.age,
        height: state.smurfs.age,
        id: state.smurfs.id,
        smurfVillage: state.smurfs.smurfVillage
    }
}

export default connect(mapStateToProps, {fetchSmurfs, postSmurfs})(SmurfsComponenet)