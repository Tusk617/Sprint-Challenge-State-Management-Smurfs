import { combineRedcuers } from "redux";
import { smurfReducer as smurfs } from "./smurfReducer"

export default combineRedcuers({
    smurfs
})