import { Middleware } from "redux";
import { RootState } from "../store";

export const logger: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    console.log("will dispatch", action.type);
    const returnValue = next(action);
    console.log("state after dispatch", store.getState());
    return returnValue;
  };
