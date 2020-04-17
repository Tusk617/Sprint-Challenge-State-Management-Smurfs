import React, { Component } from "react";
import "./App.css";

import SmurfsComponenet from "./smurfs";
import {Form} from "./smurfForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <SmurfsComponenet />
      </div>
    );
  }
}

export default App;
