import React from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions/smurfAction";

const SmurfsComponenet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.smurfs.name,
        age: state.smurfs.age,
        height: state.smurfs.age,
        id: state.smurfs.id
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfsComponenet)