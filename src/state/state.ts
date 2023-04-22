import { createStore } from "redux";
import { reducer } from "../reducer/reducer";
import { initialState } from "../reducer/initial-state";

let store = createStore(reducer, initialState);

export { store };
